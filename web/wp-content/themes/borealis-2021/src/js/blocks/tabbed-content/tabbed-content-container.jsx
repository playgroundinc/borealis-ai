import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

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
    const blockIcon = "dashicons-block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        title: {
            type: 'String',
            default: '',
        },
        copy: {
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
			const { title, copy } = attributes;

            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="tabbed-content-container__block">
                    <p class="block-title">Tabbed Content Container</p>
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
                                value: copy,
                                reference: "copy", 
                                tagName: "p",
                                placeholder: "Please provide copy (optional)"
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