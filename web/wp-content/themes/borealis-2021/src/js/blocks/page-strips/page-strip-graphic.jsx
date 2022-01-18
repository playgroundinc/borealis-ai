// Helpers
import { namespace } from '../helper-functions/constants.js';

// Reusable
import CustomRichText from '../reusable/custom-richtext-component.jsx';
import BlockSettings from '../reusable/block-custom-settings.jsx';

export default function trmcPageStripGraphicBlock() {
	/**
	 * GUTENBERG BLOCK - Page Strip Graphic
	 */
	const { registerBlockType, createBlock } = wp.blocks;
	const { InnerBlocks } = wp.blockEditor;
    const { i18n } = wp;

    const slug = "page-strip-graphic";
	const title = "Page Strip - Image  BG";
	const description = "A page strip with a background image.";
	const category = "page-strips";
    const icon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        title: {
            type: 'String',
            default: '',
        },
        image_id: {
            type: 'Number',
            default: 0
        },
        image_alt: {
            type: 'String',
            default: ''
        },
        image_url: {
            type: 'String',
            default: ''
        }
    }
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
                    blocks: [`${namespace}/page-strip`],
                    transform: ( attributes, innerBlocks ) => {
                        return wp.blocks.createBlock(
                            `${namespace}/page-strip`,
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
                title,
                image_alt,
                image_id,
                image_url
            } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }
            return [
                <BlockSettings
                    title="Block Settings"
                    controls={[
                        {
                            type: 'image',
                            label: 'Background Image',
                            image_id,
                            image_alt,
                            image_url,
                            id_reference: 'image_id',
                            url_reference: 'image_url',
                            alt_reference: 'image_alt',
                        }
                    ]}
                    onChange={(attribute, change) => { updateAttributeValue(attribute, change) }}
                />,
                <div class="custom-component block--black" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <p className="block-title">Page Strip - Image BG</p>
                    <section >
                        <div>
                            <div className="copy--center">
                                <CustomRichText 
                                    components={[
                                        {
                                            value: title,
                                            reference: 'title',
                                            tagName: 'h2',
                                            classes: ['heading_one'],
                                            placeholder: 'Please provide a title for this block'
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
                title
            } = attributes;
            return <InnerBlocks.Content />;
		},
	});
}
