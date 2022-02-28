//Helpers
import { namespace } from '../helper-functions/constants';

import CustomImageUpload from "../reusable/custom-image-upload.jsx";
import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function logoBlock() {
	const { registerBlockType } = wp.blocks;
	const { i18n } = wp;

	const blockSlug = "logo";
	const blockTitle = "Logo";
	const blockDescription = "A single logo.";
	const blockCategory = "common";
    const blockIcon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: blockTitle,
		description: blockDescription,
		category: blockCategory,
        icon: blockIcon,
        attributes: {
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
            },
            link: {
                type: 'String',
                default: '',
            }
        },
        parent: [`${namespace}/logos-subsection`],
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
            const { image_id, image_url, image_alt, link } = attributes;
			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div className="custom-child">
                    <p className="block-title">Logo</p>
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
                        components={[
                            {
                                reference: 'link',
                                value: link,
                                tagName: 'p',
                                classes: ['paragraph'],
                                placeholder: 'Add a link for this logo (optional)',
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                </div>,
			];
		},
		save: ({ attributes }) => {
            const { image_id, image_alt, image_url } = attributes;
            return null;
        },
	});
}