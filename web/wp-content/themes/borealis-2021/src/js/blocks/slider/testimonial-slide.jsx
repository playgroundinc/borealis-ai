import { namespace } from '../helper-functions/constants';

import CustomRichText from '../reusable/custom-richtext-component.jsx';
import CustomImageUpload from '../reusable/custom-image-upload.jsx';

import defaultAttrs from '../helper-functions/default-attrs';

export default function trmcTestimonialSlideBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "testimonial-slide";
	const blockTitle = "Testimonial Slide";
	const blockDescription = "Creates a testimonial slide.";
	const blockCategory = "carousels";
    const blockIcon = "format-quote"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        company: {
            type: 'String',
            default: '',
        },
        image_alt: {
            type: 'String',
            default: '',
        },
        image_id: {
            type: 'Number',
            default: 0,
        },
        image_url: {
            type: 'String',
            default: '',
        },
        speaker: {
            type: 'String',
            default: '',
        },
    }

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes,
        parent: [`${namespace}/testimonial-carousel`],
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;
        const { company, image_id, image_alt, image_url, speaker } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className={`custom-child` }>
                    <p className="block-title">Testimonial Slide</p>
                    <p style={{ fontSize: '14px', fontStyle: "italic"}}>NOTE: Please limit quote lengths to 270 characters or less.</p>
                    {save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            template={[[`${namespace}/paragraph-no-alignment`]]}
                            allowedBlocks={[`${namespace}/paragraph-no-alignment`]}
                        />
                    )}
                    <p style={{ fontSize: '14px', fontStyle: "italic"}}>NOTE: Images should be square with a central focal point. Ideal size is 56 x 56</p>
                    <CustomImageUpload
                        components={[
                            {
                                value: image_url,
                                reference: 'image_url',
                                altValue: image_alt,
                                altReference: 'image_alt',
                                idValue: image_id,
                                idReference: 'image_id',
                                buttonText: 'Add an Image',
                                imageClasses: ['image-avatar'],
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    <CustomRichText 
                        components={[
                            {
                                reference: 'speaker',
                                value: speaker,
                                tagName: 'h3',
                                classes: ['heading_five'],
                                placeholder: 'Provide a speaker for this quote',
                            },
                            {
                                reference: 'company',
                                value: company,
                                tagName: 'p',
                                classes: ['paragraph'],
                                placeholder: 'Provide the speaker\'s company/relationship',
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                </div>, 
            ];
		},
		save: () => {
            const { company, image_id, image_alt, image_url, speaker  } = attributes;
			return <InnerBlocks.Content />;
		},
	});
}