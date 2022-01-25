import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function tagCloudItemBlock() {
    const { registerBlockType, createBlock } = wp.blocks;
    const { i18n } = wp;

    const blockSlug = "tag-cloud-item-block"; // slug for the block
	const blockTitle = "Tag cloud item block";
	const blockDescription = "Component to create tag cloud item block";
	const blockCategory = "common";
    const blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        text: {
            type: 'String',
            default: '',
        },
        link: {
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
        parent: [`${namespace}/tag-cloud-container-block`],
		edit: (props, editor = false, save = false) => {
			const { attributes, setAttributes } = props;
			const { text, link } = attributes;

            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="tag-cloud-item__block">
                    <p class="block-title">Tag Cloud Item</p>
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: text,
                                reference: "text", 
                                tagName: "p",
                                placeholder: "Please provide a title"
                            },
                        ]}
                    />
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: link,
                                reference: "link", 
                                tagName: "p",
                                placeholder: "Please provide a link"
                            },
                        ]}
                    />
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { text, link } = attributes;
		},
	});
}   