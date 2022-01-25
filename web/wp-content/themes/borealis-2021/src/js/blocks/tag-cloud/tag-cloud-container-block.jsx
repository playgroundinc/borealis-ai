import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function tagCloudContainerBlock() {
    const { registerBlockType, createBlock } = wp.blocks;
    const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

    const blockSlug = "tag-cloud-container-block"; // slug for the block
	const blockTitle = "Tag cloud container block";
	const blockDescription = "Component to create tag cloud container block";
	const blockCategory = "common";
    const blockIcon = "block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        title: {
            type: 'String',
            default: '',
        },
        tags: {
            type: 'String',
            default: '',
        }
    }

    registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
		attributes,
		edit: (props, editor = false, save = false) => {
			const { attributes, setAttributes } = props;
			const { title, tags } = attributes;

            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="tag-cloud-container__block">
                    <p class="block-title">Tag Cloud Container</p>
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: title,
                                reference: "title", 
                                tagName: "p",
                                placeholder: "Please provide a title (optional)"
                            },
                        ]}
                    />
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: tags,
                                reference: "tags", 
                                tagName: "p",
                                placeholder: "Please provide tags (optional)"
                            },
                        ]}
                    />
                    { save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/tag-cloud-item-block`]}
                        />
                    )}
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { title, tags } = attributes;
            return <InnerBlocks.Content />;
		},
	});
}  