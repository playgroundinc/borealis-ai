import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function customSubsectionBlock() {
    const { registerBlockType, createBlock } = wp.blocks;
    const { i18n } = wp;

    const blockSlug = "custom-subsection-block"; // slug for the block
	const blockTitle = "Create custom subsection block";
	const blockDescription = "Component to create custom subsection block";
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
        parent: [`${namespace}/custom-section-block`],
		edit: (props, editor = false, save = false) => {
			const { attributes, setAttributes } = props;
			const { title } = attributes;

            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-subsection__block">
                    <p className="block-title">Custom Subsection Block</p>
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
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { title } = attributes;
		},
	});
} 