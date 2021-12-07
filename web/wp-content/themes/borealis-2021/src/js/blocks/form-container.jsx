// Helpers
import { namespace } from './helper-functions/constants';
import defaultAttrs from './helper-functions/default-attrs';

// Components
import BlockSettings from './reusable/block-custom-settings.jsx';
import CustomRichText from './reusable/custom-richtext-component.jsx';


export default function formContainerBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
	const { i18n } = wp;

	const blockSlug = "form-builder";
	const blockTitle = "Form Builder";
	const blockDescription = "Component to build a custom form.";
	const blockCategory = "forms";
    const blockIcon = "clipboard"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        alignment: {
            type: 'String',
            default: 'left',
        },
        bg_color: {
            type: 'String',
            default: 'white',
        },
        description: {
            type: 'String',
            default: ''
        },
        email: {
            type: 'String',
            default: '',
        },
        submit_text: {
            type: 'String',
            default: 'Submit',
        },
        success_message: {
            type: 'String',
            default: 'Your message has been successfully sent. We will contact you very soon!',
        },
        success_title: {
            type: 'String',
            default: 'Thank You!',
        },
        title: {
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
			const { setAttributes, attributes } = props;
			const { alignment, bg_color, description, email, submit_text, success_title, success_message, title } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-form">
                    <p class="block-title">Custom Form - Please make sure to add a destination email in the block settings</p>
                    <BlockSettings 
                        title="Form Settings"
                        controls={[
                            {
                                label: "Destination email",
                                type: 'text',
                                value: email,
                                reference: 'email',
                            },
                            {
                                label: "Background Color",
                                type: 'radio',
                                value: bg_color,
                                reference: 'bg_color',
                                options: [
                                    { value: 'white', label: 'White'},
                                    { value: 'grey', label: 'Grey'},
                                ]
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    /> 
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: title,
                                reference: "title",
                                classes: ['heading_two'],
                                tagName: "h2",
                                align: {
                                    value: alignment,
                                    reference: 'alignment'
                                },
                                settings: [],
                                placeholder: "Please provide a title for your form"
                            },
                            {
                                value: description,
                                classes: ['paragraph'],
                                reference: "description",
                                tagName: "p",
                                placeholder: "Please provide a description for this form"
                            },
                        ]}
                    />
                    { save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/heading-three`, 'core/paragraph', `${namespace}/text-input`, `${namespace}/input-row`, `${namespace}/select-input`, `${namespace}/date-input`, `${namespace}/number-input`, `${namespace}/textarea-input`, `${namespace}/select-destination-input`]}
                        />
                    )}
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: submit_text,
                                classes: ['btn'],
                                reference: "submit_text",
                                tagName: "p",
                                placeholder: "Please provide submit button text..."
                            },
                            {
                                value: success_title,
                                reference: "success_title",
                                classes: ['heading_two'],
                                tagName: "h2",
                                settings: [],
                                placeholder: "Please provide a title for the success message"
                            },
                            {
                                value: success_message,
                                classes: ['paragraph'],
                                reference: "success_message",
                                tagName: "p",
                                placeholder: "Please provide a success message this form"
                            },
                        ]}
                    />
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { alignment, description, email, submitText, title } = attributes;
			return <InnerBlocks.Content />;
		},
	});
}