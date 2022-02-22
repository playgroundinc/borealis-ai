import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';
import CustomImageUpload from "../reusable/custom-image-upload.jsx";
import BlockSettings from "../reusable/block-custom-settings.jsx";

export default function tabbedContentContainerBlock() {
    const { registerBlockType, createBlock } = wp.blocks;
    const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

    const blockSlug = "tabbed-content-container-block"; // slug for the block
	const blockTitle = "Tabbed content container block";
	const blockDescription = "Component to create tabbed content container block";
	const blockCategory = "common";
    const blockIcon = "block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        copy: {
            type: 'String',
            default: '',
        },
        cta_one_text: {
            type: "String",
            default: "",
        },
        cta_one_link: {
            type: "String",
            default: "",
        },
        cta_two_text: {
            type: "String",
            default: "",
        },
        cta_two_link: {
            type: "String",
            default: "",
        },
        display_style: {
            type: "String",
            default: "default",
        },
        image_url: {
            type: 'String',
            default: '',
        },
        image_id: {
            type: 'Number',
            default: 0,
        },
        image_alt: {
            type: "String",
            default: "" 
        },
        title: {
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
		edit: (props, editor = false, save = false) => {
			const { attributes, setAttributes } = props;
			const { 
                copy, 
                cta_one_text, 
                cta_one_link, 
                cta_two_text, 
                cta_two_link, 
                display_style,
                image_id, 
                image_url, 
                image_alt, 
                title,
            } = attributes;

            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="tabbed-content-container__block custom-container">
                    <p class="block-title">Tabbed Content Container</p>
                    <BlockSettings 
                        title="Block Settings"
                        controls={[
                            {
                                type: 'radio',
                                label: 'Display Style',
                                value: display_style,
                                reference: 'display_style',
                                options: [
                                    { label: "Default", value: "default" },
                                    { label: "Background Image", value: "background-image" }
                                ]
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    {
                        display_style === "background-image" ? 
                        <CustomImageUpload 
                            components={[
                                {
                                    value: image_url,
                                    reference: 'image_url',
                                    altValue: image_alt,
                                    altReference: 'image_alt',
                                    idValue: image_id,
                                    idReference: 'image_id',
                                    buttonText: 'Add a background image (optional)',
                                },
                            ]}
                            onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        />
                        : 
                        null
                    }
                   
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: title,
                                reference: "title", 
                                tagName: "h2",
                                placeholder: "Please provide a title (optional)"
                            },
                            {
                                value: copy,
                                reference: "copy", 
                                tagName: "p",
                                placeholder: "Please provide copy (optional)"
                            },
                            {
                                value: cta_one_text,
                                reference: "cta_one_text", 
                                tagName: "p",
                                placeholder: "Please provide text for the first CTA (optional)"
                            },
                            {
                                value: cta_one_link,
                                reference: "cta_one_link", 
                                tagName: "p",
                                placeholder: "Please provide a link for the first CTA (optional)"
                            },
                            {
                                value: cta_two_text,
                                reference: "cta_two_text", 
                                tagName: "p",
                                placeholder: "Please provide text for the second CTA (optional)"
                            },
                            {
                                value: cta_two_link,
                                reference: "cta_two_link", 
                                tagName: "p",
                                placeholder: "Please provide a link for the second CTA (optional)"
                            },
                        ]}
                    />
                    { save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/tabbed-content-panel-block`]}
                        />
                    )}
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { title, copy } = attributes;
            return <InnerBlocks.Content />;
		},
	});
} 