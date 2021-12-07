//Helpers
import { namespace } from '../blocks/helper-functions/constants';

import CustomImageUpload from "../blocks/reusable/custom-image-upload.jsx";
import CustomRichText from "../blocks/reusable/custom-richtext-component.jsx";

export default function developmentBlock() {
	const { registerBlockType } = wp.blocks;
	const { i18n } = wp;

	const blockSlug = "custom-image";
	const blockTitle = "Media - Image";
	const blockDescription = "A single image upload.";
	const blockCategory = "media";
    const blockIcon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: blockTitle,
		description: blockDescription,
		category: blockCategory,
        icon: blockIcon,
        attributes: {
            caption: {
                type: 'String',
                default: '',
            },
            image_alt: {
                type: 'String',
                default: '',
            },
            image_url: {
                type: 'String',
                default: '',
            },
            image_id: {
                type: 'Number',
                default: 0,
            }
        },
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
            const { caption, image_id, image_url, image_alt } = attributes;
			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div className="custom-component">
                    <p className="block-title">Media - Image</p>
                    <CustomImageUpload
                        components={[
                            {
                                value: image_url,
                                reference: 'image_url',
                                altValue: image_alt,
                                altReference: 'image_alt',
                                idValue: image_id,
                                idReference: 'image_id',
                                buttonText: 'Add an image',
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: caption,
                                reference: "caption",
                                classes: ['caption'],
                                tagName: "p",
                                settings: [],
                                placeholder: "Please provide a caption for your image"
                            },
                        ]}
                    />
                </div>,
			];
		},
		save: ({ attributes }) => {
            const { caption, image_id, image_alt, image_url } = attributes;
            return null;
        },
	});
}