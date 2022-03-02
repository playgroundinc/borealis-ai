// Helpers
import { namespace } from './helper-functions/constants.js';
import defaultAttrs from './helper-functions/default-attrs';

// Reusable
import CustomRichText from './reusable/custom-richtext-component.jsx';
import CustomImageUpload from './reusable/custom-image-upload.jsx';
import BlockSettings from './reusable/block-custom-settings.jsx';

export default function imageTextBlock() {
	/**
	 * GUTENBERG BLOCK - Image Text Block
	 */
	const { registerBlockType, createBlock } = wp.blocks;
	const { InnerBlocks } = wp.blockEditor;
    const { i18n } = wp;

    const slug = "image-text";
	const title = "Image + Content Block";
	const description = "A reversible component with image one side and text on the other.";
	const category = "page-strips";
    const icon = "align-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttributes = [
        'image_url', 
        'image_alt', 
        'title', 
        'bg_color'
    ];
    const attributes = defaultAttrs(stringAttributes);
    attributes['reverse'] = {
        type: 'boolean',
        default: false,
    }
    attributes['image_id'] = {
        type: 'integer',
        default: 0,
    }
    attributes['bg_color']['default'] = 'white';
	registerBlockType(`${namespace}/${slug}`, {
		title: i18n.__(title, `${namespace}`),
		description: i18n.__(description, `${namespace}`),
		category,
		icon,
    attributes,
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { 
                bg_color,
                image_url, 
                image_alt, 
                image_id, 
                reverse, 
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
                            label: 'Background color',
                            reference: 'bg_color',
                            value: bg_color,
                            options: [
                                { label: 'White', value: 'white' },
                                { label: 'Grey', value: 'grey' }
                            ]
                        },
                        {
                            type: 'toggle',
                            label: 'Reverse Layout',
                            reference: 'reverse',
                            value: reverse,
                        }
                    ]}
                    onChange={(attribute, change) => { updateAttributeValue(attribute, change) }}
                />,
                <div className={`image-text__container custom-component block--${bg_color}`}>
                    <p className="block-title">Content Block - Slanted Image</p>
                    <section>
                        <div className={reverse ? 'row reverse' : 'row' }>

                            <div className="col-xs-12 col-md-6 col-v-center">
                                <CustomRichText 
                                    components={[
                                        {
                                        value: title,
                                        reference: 'title',
                                        tagName: 'h2',
                                        classes: ['heading-one'],
                                        },
                                    ]}
                                    onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) }}
                                />
                                {save ? (
                                    <InnerBlocks.Content />
                                ) : (
                                    <InnerBlocks allowedBlocks={[`${namespace}/paragraph-no-alignment`, 'core/list', 'core/buttons']} />
                                )}
                            </div>
                            <div className="col-xs-12 col-md-6 col-v-center">
                                <CustomImageUpload
                                    components={[
                                        {
                                            value: image_url,
                                            reference: 'image_url',
                                            altValue: image_alt,
                                            altReference: 'image_alt',
                                            idValue: image_id,
                                            idReference: 'image_id',
                                            buttonText: 'Add Image',
                                            imageClasses: ['image-text__image']
                                        }
                                    ]}
                                    onChange={(attribute, change) => { updateAttributeValue(attribute, change) }}
                                />
                            </div>
                        </div>
                    </section>
                </div>,
			];
			
		},
		save: ({attributes}) => {
            const { 
                image_url, 
                image_alt, 
                image_id, 
                reverse, 
                title
            } = attributes;
            return <InnerBlocks.Content />;
		},
	});
}
