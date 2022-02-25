import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';
import BlockSettings from "../reusable/block-custom-settings.jsx";

export default function compareFiguresBlock() {
    const { registerBlockType } = wp.blocks;
    const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

    const blockSlug = "compare-figures"; // slug for the block
	const blockTitle = "Compare Figures";
	const blockDescription = "Component to compare multiple figures";
	const blockCategory = "common";
    const blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        title: {
            type: 'String',
            default: '',
        },
        description: {
            type: 'String',
            default: ''
        },
        caption: {
            type: 'String',
            default: '',
        },
        columns: {
            type: 'Number',
            default: 6,
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
			const { caption, description, title, columns } = attributes;

            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-container">
                    <p class="block-title">Compare Figures</p>
                    <BlockSettings 
                        title="Block Settings"
                        controls={[
                            { 
                                type: 'radio',
                                label: 'Number of Columns',
                                options: [
                                    { value: '6', label: 'Two' },
                                    { value: '4', label: 'Three' },
                                    { value: '3', label: 'Four' },
                                ],
                                reference: 'columns',
                                value: `${columns}`,
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, Number(change)) } }
                    />
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: title,
                                reference: "title", 
                                tagName: "h2",
                                placeholder: "Please provide a title (optional)",
                                settings: []
                            },
                            {
                                value: description,
                                reference: "description", 
                                tagName: "p",
                                placeholder: "Please provide a description (optional)",
                            },
                        ]}
                    />
                    { save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/custom-image`]}
                        />
                    )}
                     <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: caption,
                                reference: "caption", 
                                tagName: "p",
                                placeholder: "Please provide a caption (optional)",
                                settings: []
                            },
                        ]}
                    />
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { title, caption } = attributes;
            return <InnerBlocks.Content />;
		},
	});
}  