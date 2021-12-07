// Helpers
import { namespace } from './helper-functions/constants.js';

// Reusable
import CustomRichText from './reusable/custom-richtext-component.jsx';
import CustomImageUpload from './reusable/custom-image-upload.jsx';

export default function featureStripBlock() {
	/**
	 * GUTENBERG BLOCK - Feature Strip
	 */
	const { registerBlockType, createBlock } = wp.blocks;
	const { InnerBlocks } = wp.blockEditor;
    const { i18n } = wp;

    const slug = "feature-strip";
	const title = "Feature Callout";
	const description = "A feature strip with optional CTA.";
	const category = "page-strips";
    const icon = "align-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        image_id: {
            type: 'Number',
            default: 0
        },
        image_url: {
            type: 'String',
            default: '',
        },
        image_alt: {
            type: 'String',
            default: '',
        },
        title: {
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
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { 
                image_id,
                image_url,
                image_alt,
                title
            } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }
            return [
                <div className="custom-component">
                    <p className="block-title">Feature Callout</p>
                    <section>
                        <div className="row">
                            <div className="col-md-6">
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
                            <div className="col-md-6">
                                <CustomRichText 
                                    components={[
                                        {
                                            value: title,
                                            reference: 'title',
                                            tagName: 'h2',
                                            classes: ['heading_one'],
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
                image_alt,
                image_id,
                image_url,
                title
            } = attributes;
            return <InnerBlocks.Content />;
		},
	});
}
