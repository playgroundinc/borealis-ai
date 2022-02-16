import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function bibtexBlock() {
    const { registerBlockType } = wp.blocks;
    const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

    const blockSlug = "bibtex"; // slug for the block
	const blockTitle = "Bibtex";
	const blockDescription = "Component to add bibtex to a publication";
	const blockCategory = "common";
    const blockIcon = "archive"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        entry: {
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
			const { entry } = attributes;

            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-component">
                    <p class="block-title">Bibtex</p>
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: entry,
                                reference: "entry", 
                                tagName: "p",
                                placeholder: "Please provide the bibtext string",
                                settings: []
                            },
                        ]}
                    />
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { entry } = attributes;
            return <InnerBlocks.Content />;
		},
	});
}  