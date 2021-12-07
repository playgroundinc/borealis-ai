import { namespace } from "../helper-functions/constants";
import defaultAttrs from "../helper-functions/default-attrs";


import BlockSettings from '../reusable/block-custom-settings.jsx';
import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function selectBlock() {
    const { registerBlockType } = wp.blocks;
    const {  CheckboxControl, Button } = wp.components;
    const { i18n } = wp;

    const blockSlug = "select-input";
	const blockTitle = "Dropdown";
	const blockDescription = "Component to a dropdown list to a form.";
	const blockCategory = "forms";
    const blockIcon = "arrow-down-alt"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const inputOptions = [{ value: 'select', label: 'Dropdown' }, { value: 'checkbox', label: 'Checkbox'}, {label: 'Radio', value: 'radio'}] ;

    const stringAttributes = [ 'helper_text', 'label', 'option', 'options', 'type' ];
    const attributes = defaultAttrs(stringAttributes);
    attributes['required'] = {
        type: Boolean,
        default: false,
    }

    registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
		attributes,
        parent: [`${namespace}/form-builder`],
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { helper_text, label, option, options, required, type } = attributes;
            const allOptions = options !== '' ? options.split(',') : [];
			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

            function updateOptionsArray() {
                if (options !== '') {
                    const updatedOptions = options.toString().split(',');
                    updatedOptions.push(option);
                    updateAttributeValue('options', updatedOptions.join(','));
                    updateAttributeValue('option', '');
                    return;
                }
                updateAttributeValue('options', option);
                updateAttributeValue('option', '');
            }

            function removeOption(value) {
                const splitOptions = options.split(',');
                if (splitOptions.length <= 1) {
                    updateAttributeValue('options', '');
                }
                const index = splitOptions.indexOf(value);
                if (index > -1) {
                    splitOptions.splice(index, 1);
                    updateAttributeValue('options', splitOptions.join(','));
                }
            }

			return [
                <div class="custom-form__input">
                    <p className="block-title">Select - Update input type in block settings</p>
                    <BlockSettings 
                        title="Block Settings"
                        controls={[
                            {
                                label: "Input type",
                                type: 'radio',
                                value: type,
                                reference: 'type',
                                options: inputOptions,
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    /> 
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
                                    { `${option}`}
                                    <Button 
                                        onClick={ function() { removeOption(option); } } 
                                    >
                                    Remove
                                    </Button>
                                </li>
                                
                            )
                        })
                    }
                    <div className="row">
                    <div className="col-md-6">
                        <CustomRichText 
                            onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                            components={[
                                {
                                    value: option,
                                    reference: "option",
                                    tagName: "li",
                                    placeholder: "Please provide an option"
                                },
                                {
                                    value: helper_text,
                                    reference: "helper_text",
                                    tagName: "p",
                                    placeholder: "Optional helper text"
                                }
                            ]}
                        />
                    </div>
                    <div className="col-md-6">
                        <Button 
                            onClick={ updateOptionsArray }
                            className={'button button-large' }
                        >
                            { i18n.__('Add Option') }
                        </Button>
                    </div>
                
                    </div>

                    <CheckboxControl
                        label="This field is required."
                        checked={ required }
                        onChange={ (change) => updateAttributeValue( 'required', change ) }
                    />
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { label, required, options, option } = attributes;
		},
	});
}