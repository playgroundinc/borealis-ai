// Helpers
import { namespace } from '../helper-functions/constants.js';

// Reusable
import CustomRichText from '../reusable/custom-richtext-component.jsx';
import CustomImageUpload from '../reusable/custom-image-upload.jsx';

export default function imageTextBlock() {
	/**
	 * GUTENBERG BLOCK - Custom Column
	 */
	const { registerBlockType, createBlock } = wp.blocks;
	const { InnerBlocks } = wp.blockEditor;
    const { i18n } = wp;

    const slug = "callout-column";
	const title = "Card";
	const description = "A single card.";
	const category = "common";
    const icon = "table-col-after"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        image_alt: {
            type: "String",
            default: "",
        },
        image_id: {
            type: "Number",
            default: 0,
        },
        image_url: {
            type: "String",
            default: "",
        },
        link: {
            type: "String",
            default: "",
        },
        link_text: {
            type: "String",
            default: "read more",
        },
        title: {
            type: "String",
            default: "",
        }
    }
	registerBlockType(`${namespace}/${slug}`, {
		title: i18n.__(title, `${namespace}`),
		description: i18n.__(description, `${namespace}`),
		category,
		icon,
        attributes,
        parent: [`${namespace}/callout-container`],
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { 
                image_alt, 
                image_id, 
                image_url, 
                link, 
                link_text,
                title
            } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }
            return [
                <div className="custom-child">
                    <p className="block-title">Card</p>
                    <section>
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
                        <CustomRichText 
                            components={[
                                {
                                    value: title,
                                    reference: 'title',
                                    tagName: 'h2',
                                    classes: ['heading-one'],
                                    placeholder: "Add a title for this card"
                                },
                            ]}
                            onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) }}
                        />
                        {save ? (
                            <InnerBlocks.Content />
                        ) : (
                            <InnerBlocks allowedBlocks={[]} />
                        )}
                            <CustomRichText 
                                components={[
                                    {
                                        value: link,
                                        reference: 'link',
                                        tagName: 'p',
                                        placeholder: "Add a link for this card",
                                        classes: [],
                                    },
                                    {
                                        value: link_text,
                                        reference: 'link_text',
                                        placeholder: "Add link text for this card",
                                        tagName: 'p',
                                        classes: [],
                                    },
                                ]}
                                onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) }}
                            />
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
