// Helpers
import { namespace } from './helper-functions/constants.js';
import defaultAttrs from './helper-functions/default-attrs';

// Reusable
import CustomRichText from './reusable/custom-richtext-component.jsx';
import BlockSettings from './reusable/block-custom-settings.jsx';

export default function pageStripBlock() {
	/**
	 * GUTENBERG BLOCK - Page Strip
	 */
	const { registerBlockType, createBlock } = wp.blocks;
	const { InnerBlocks } = wp.blockEditor;
    const { i18n } = wp;

    const slug = "page-strip";
	const title = "Page Strip";
	const description = "A page strip with optional CTA.";
	const category = "page-strips";
    const icon = "align-center"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttributes = [
        'bg_color', 
        'title', 
    ];
    const attributes = defaultAttrs(stringAttributes);
    
    attributes['bg_color']['default'] = 'white';
	registerBlockType(`${namespace}/${slug}`, {
		title: i18n.__(title, `${namespace}`),
		description: i18n.__(description, `${namespace}`),
		category,
		icon,
        attributes,
        transforms: {
            to: [
                {
                    type: "block",
                    blocks: [`${namespace}/page-strip-graphic`],
                    transform: ( attributes, innerBlocks ) => {
                        return wp.blocks.createBlock(
                            `${namespace}/page-strip-graphic`,
                            attributes,
                            innerBlocks
                        );
                    },
                },
            ]
        },
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { 
                bg_color,
                title
            } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }
            return [
                <BlockSettings
                    title="Block Settings"
                    controls={[
                        {
                            type: 'select',
                            label: 'Background Color',
                            reference: 'bg_color',
                            value: bg_color,
                            options: [
                                { value: 'white', label: 'White' },
                                { value: 'grey', label: 'Grey' },
                                { value: 'black', label: 'Black' },
                                { value: 'red', label: 'Dark Red' },
                                { value: 'red-lt', label: 'Light Red' },
                            ]
                        }
                    ]}
                    onChange={(attribute, change) => { updateAttributeValue(attribute, change) }}
                />,
                <div className={`block--${bg_color} custom-component`}>
                    <p className="block-title">Page Strip</p>
                    <section>
                        <div>
                            <div>
                                <CustomRichText 
                                    components={[
                                        {
                                            value: title,
                                            reference: 'title',
                                            tagName: 'h2',
                                            classes: ['heading_one'],
                                            placeholder: "Please provide a title"
                                        },
                                    ]}
                                    onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) }}
                                />
                                {save ? (
                                    <InnerBlocks.Content />
                                ) : (
                                    <InnerBlocks allowedBlocks={[`${namespace}/paragraph-no-alignment`, 'core/buttons']} />
                                )}
                            </div>
                        </div>
                    </section>
                </div>,
			];
			
		},
		save: ({attributes}) => {
            const {
                bg_color,
                title
            } = attributes;
            return <InnerBlocks.Content />;
		},
	});
}
