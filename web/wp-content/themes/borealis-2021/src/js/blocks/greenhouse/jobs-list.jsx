import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function featuredJobsBlock() {
    const { registerBlockType } = wp.blocks;
    const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

    const blockSlug = "jobs-container"; // slug for the block
	const blockTitle = "Featured Jobs container";
	const blockDescription = "Component to create highlighted jobs container block";
	const blockCategory = "jobs";
    const blockIcon = "archive"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

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
                <div class="custom-container">
                    <p class="block-title">Featured Jobs Container</p>
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
                        ]}
                    />
                    { save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/select-job`]}
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