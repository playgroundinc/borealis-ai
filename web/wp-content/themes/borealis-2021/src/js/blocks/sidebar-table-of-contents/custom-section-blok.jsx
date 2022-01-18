import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function customSectionBlock() {
    const { registerBlockType, createBlock } = wp.blocks;
    const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

    const blockSlug = "custom-section-block"; // slug for the block
	const blockTitle = "Create custom section block";
	const blockDescription = "Component to create custom section block";
	const blockCategory = "common";
    const blockIcon = "admin-users"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
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
			const { title } = attributes;

            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-section__block">
                    <p className="block-title">Custom Section Block</p>
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: title,
                                reference: "title", 
                                tagName: "p",
                                placeholder: "Please provide a title"
                            },
                        ]}
                    />
                    { save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/custom-subsection-block`, `${namespace}/paragraph`]}
                        />
                    )}
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { title } = attributes;
            return <InnerBlocks.Content />;
		},
	});
}