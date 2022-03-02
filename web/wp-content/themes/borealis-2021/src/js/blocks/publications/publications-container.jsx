import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function publicationsContainerBlock() {
    const { registerBlockType } = wp.blocks;
    const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

    const blockSlug = "publications-container"; // slug for the block
	const blockTitle = "Publications container";
	const blockDescription = "Component to create publications container block";
	const blockCategory = "containers";
    const blockIcon = "archive"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        title: {
            type: 'String',
            default: '',
        },
        link: {
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
			const { title, link } = attributes;

            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-container">
                    <p class="block-title">Publications List Container</p>
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: title,
                                reference: "title", 
                                tagName: "p",
                                placeholder: "Please provide a title (optional)",
                                settings: []
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
                                placeholder: "Please provide a link for the View All button",
                                settings: []
                            },
                        ]}
                    />
                    { save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/select-publications`, `${namespace}/select-research-blogs`, `${namespace}/select-news`]}
                        />
                    )}
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { title, link } = attributes;
            return <InnerBlocks.Content />;
		},
	});
}  