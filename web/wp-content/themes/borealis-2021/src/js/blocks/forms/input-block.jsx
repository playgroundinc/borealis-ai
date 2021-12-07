import { namespace } from "../helper-functions/constants";
import defaultAttrs from "../helper-functions/default-attrs";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function inputBlock() {
    const { registerBlockType } = wp.blocks;
    const {  CheckboxControl } = wp.components;
    const { i18n } = wp;

    const blockSlug = "text-input";
	const blockTitle = "Text Input";
	const blockDescription = "Component to build a custom form.";
	const blockCategory = "forms";
    const blockIcon = "edit-large"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttributes = [ 'helper_text', 'label' ];
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
			const { helper_text, label, required } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-form__input">
                    <p className="block-title">Text Input</p>
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: label,
                                reference: "label",
                                tagName: "p",
                                placeholder: "Please provide the name for this input"
                            },
                            {
                                value: helper_text,
                                reference: "helper_text",
                                tagName: "p",
                                placeholder: "Optional helper text"
                            }
                        ]}
                    />
                    <CheckboxControl
                        label="This field is required."
                        checked={ required }
                        onChange={ (change) => updateAttributeValue( 'required', change ) }
                    />
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { helper_text, label, required } = attributes;
		},
	});
}