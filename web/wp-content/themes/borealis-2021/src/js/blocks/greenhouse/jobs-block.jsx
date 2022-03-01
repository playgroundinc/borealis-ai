import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function jobBlock() {
    const { registerBlockType, createBlock } = wp.blocks;
    const { i18n } = wp;

    const blockSlug = "job-block";
	const blockTitle = "Create job block";
	const blockDescription = "Component to create job block";
	const blockCategory = "jobs";
    const blockIcon = "users"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        title: {
            type: 'String',
            default: '',
        },
        emptyState: {
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
			const { title, emptyState } = attributes;

            function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-job__block">
                    <p className="block-title">Jobs Block</p>
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
                    <div>
                        <CustomRichText 
                            onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                            components={[
                                {
                                    value: emptyState,
                                    reference: "emptyState",
                                    tagName: "p",
                                }
                            ]}
                        />
                    </div>    
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { title, emptyState } = attributes;
		},
	});
}