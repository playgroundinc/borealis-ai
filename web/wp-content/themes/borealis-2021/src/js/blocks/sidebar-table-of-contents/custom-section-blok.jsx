import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function customSectionBlock() {
    const { registerBlockType, createBlock } = wp.blocks;
    const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

    const blockSlug = "custom-section-block"; // slug for the block
	const blockTitle = "Custom Section";
	const blockDescription = "Component to create custom section block";
	const blockCategory = "common";
    const blockIcon = "welcome-add-page"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

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
                <div class="custom-section custom-section__block">
                    <p className="block-title">Custom Section Block</p>
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: title,
                                reference: "title", 
                                tagName: "h2",
                                settings: ['core/bold', 'core/link', 'core/italic', 'core/code'],
                                placeholder: "Please provide a title"
                            },
                        ]}
                    />
                    { save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/custom-subsection-block`, `core/paragraph`, `${namespace}/tag-cloud-container-block`, `${namespace}/paragraph`, `${namespace}/heading-two`, `${namespace}/heading-three`, `${namespace}/heading-four`, `${namespace}/custom-image`, `core/list`, `core/quote`]}
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