import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';
import CustomImageUpload from "../reusable/custom-image-upload.jsx";

export default function fellowshipBlock() {
    const { registerBlockType } = wp.blocks;
    const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

    const blockSlug = "fellowship"; // slug for the block
	const blockTitle = "Fellowship";
	const blockDescription = "Creates a Fellowship block";
	const blockCategory = "containers";
    const blockIcon = "admin-users"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        parent: [`${namespace}/fellowship-container`],
		attributes: {
            name: {
                type: 'String',
                default: ''
            },
            topic: {
                type: 'String',
                default: ''
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
            logo_id: {
                type: 'Number',
                default: 0,
            },
            logo_alt: {
                type: 'String',
                default: ''
            },
            logo_url: {
                type: 'String',
                default: ''
            },
        },
		edit: (props, editor = false, save = false) => {
			const { attributes, setAttributes } = props;
            const { name, topic, image_id, image_url, image_alt, logo_id, logo_alt, logo_url } = attributes;
            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-container">
                    <p class="block-title">Fellowships Container</p>
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: name,
                                reference: "name", 
                                tagName: "h2",
                                placeholder: "Please provide name",
                                settings: []
                            },
                            {
                                value: topic,
                                reference: "topic", 
                                tagName: "p",
                                placeholder: "Please provide research topic",
                                settings: []
                            },
                        ]}
                    />
                    <CustomImageUpload
                        components={[
                            {
                                value: image_url,
                                reference: 'image_url',
                                altValue: image_alt,
                                altReference: 'image_alt',
                                idValue: image_id,
                                idReference: 'image_id',
                                buttonText: 'Add an image'
                            },
                            {
                                value: logo_url,
                                reference: 'logo_url',
                                altValue: logo_alt,
                                altReference: 'logo_alt',
                                idValue: logo_id,
                                idReference: 'logo_id',
                                buttonText: 'Add an affiliation logo (optional)'
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                </div>,
			];
		},
		save: ({ attributes }) => {
			const {  name, topic, image_id, image_url, image_alt, logo_id, logo_alt, logo_url } = attributes;
            return;
		},
	});
}  