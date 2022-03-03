import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function fellowshipContainerBlock() {
    const { registerBlockType } = wp.blocks;
    const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

    const blockSlug = "fellowship-container"; // slug for the block
	const blockTitle = "Fellowships Container";
	const blockDescription = "Creates a Fellowships Container block";
	const blockCategory = "containers";
    const blockIcon = "id"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
		attributes: {
            title: {
                type: 'String',
                default: ''
            }
        },
		edit: (props, editor = false, save = false) => {
			const { attributes, setAttributes } = props;
            const { title } = attributes;
            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-container">
                    <p class="block-title">Fellowships Container</p>
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
                            allowedBlocks={ [`${namespace}/fellowship`]}
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