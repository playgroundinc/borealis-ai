import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function selectDestinationBlock() {
    const { registerBlockType } = wp.blocks;
    const {  CheckboxControl, Button } = wp.components;
    const { i18n } = wp;

    const blockSlug = "select-destination-input";
	const blockTitle = "Select Destination";
	const blockDescription = "Component to select a destination for form.";
	const blockCategory = "forms";
    const blockIcon = "email"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        destination: {
            type: 'String',
            default: '',
        },
        label: {
            type: 'String',
            default: '',
        },
        options: {
            type: 'String',
            default: '',
        },
        option: {
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
        supports: {
            multiple: false,
        },
        parent: [`${namespace}/form-builder`],
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { destination, label, option, options } = attributes;
            function getAllOptions() {
                if (options !== '') {
                    const optionsArray = [];
                    const allOptions = JSON.parse(options);
                    for (let option in allOptions) {
                        optionsArray.push({
                            key: option,
                            value: allOptions[option],
                        });
                    }
                    return optionsArray;
                }
                return [];
            }

            const allOptions = getAllOptions();
			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

            function clearValues() {
                updateAttributeValue('destination', '');
                updateAttributeValue('option', '');
            }

            function updateOptionsArray() {
                let updatedOptions = {};
                if (options !== '') {
                    updatedOptions = JSON.parse(options);
                }
                updatedOptions[destination] = option;
                updateAttributeValue('options', JSON.stringify(updatedOptions));
                clearValues();
            }

            function removeOption(value) {
                const updatedOptions = JSON.parse(options);
                delete updatedOptions[value];
                updateAttributeValue('options', JSON.stringify(updatedOptions));
    
            }

			return [
                <div class="custom-form__input">
                    <p className="block-title">Select - Update input type in block settings</p>

                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: label,
                                reference: "label",
                                tagName: "p",
                                placeholder: "Please provide the name for this input"
                            },
                        ]}
                    />
                    {
                        allOptions.map((option) => {
                            return (
                                <li>
                                    { `${option.key} - ${option.value}`}
                                    <Button 
                                        onClick={ function() { removeOption(option.key); } } 
                                    >
                                    Remove
                                    </Button>
                                </li>
                                
                            )
                        })
                    }
                    <div>
                        <CustomRichText 
                            onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                            components={[
                                {
                                    value: option,
                                    reference: "option",
                                    tagName: "p",
                                    placeholder: "Please provide an option"
                                },
                                {
                                    value: destination,
                                    reference: "destination",
                                    tagName: "p",
                                    placeholder: "Please provide the destination email for that option"
                                }
                            ]}
                        />
                    </div>
                    <div>
                        <Button 
                            onClick={ updateOptionsArray }
                            className={'button button-large' }
                        >
                            { i18n.__('Add Option') }
                        </Button>
                    </div>
                
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { label, required, options, option } = attributes;
		},
	});
}