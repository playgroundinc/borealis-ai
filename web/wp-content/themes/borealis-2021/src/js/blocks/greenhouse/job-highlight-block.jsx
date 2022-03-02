import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';
import CustomImageUpload from "../reusable/custom-image-upload.jsx";

export default function jobHighlightBlock() {
    const { registerBlockType, createBlock } = wp.blocks;
    const { i18n } = wp;

    const blockSlug = "job-highlight";
	const blockTitle = "Job Highlight";
	const blockDescription = "Add an image and text to a job list block";
	const blockCategory = "jobs";
    const blockIcon = "id"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        title: {
            type: 'String',
            default: '',
        },
        copy: {
            type: 'String',
            default: '',
        },
        image_id: {
            type: 'Number',
            default: 0,
        },
        image_alt: {
            type: 'String',
            default: ''
        },
        image_url: {
            type: 'String',
            default: ''
        },
    }

    registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
		attributes,
        parent: [`${namespace}/jobs-container`],
		edit: (props, editor = false, save = false) => {
			const { attributes, setAttributes } = props;
			const { copy, image_id, image_alt, image_url, title } = attributes;

            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-child">
                    <p className="block-title">Jobs Highlight Block</p>
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
                                value: title,
                                reference: "title", 
                                tagName: "h2",
                                settings: [],
                                placeholder: "Please provide a title"
                            },
                            {
                                value: copy,
                                reference: 'copy',
                                tagName: 'p',
                                placeholder: "Please provide copy"
                            }
                        ]}
                    />  
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { copy, image_id, image_alt, image_url, title } = attributes;
		},
	});
}