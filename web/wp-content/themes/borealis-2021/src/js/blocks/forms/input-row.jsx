import { namespace } from "../helper-functions/constants";
import defaultAttrs from "../helper-functions/default-attrs";

import BlockSettings from '../reusable/block-custom-settings.jsx';

export default function inputRowBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
	const { i18n } = wp;

	const blockSlug = "input-row";
	const blockTitle = "Input Row";
	const blockDescription = "Component to add two inputs side by side on desktop.";
	const blockCategory = "forms";
    const blockIcon = "table-row-after"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttributes = [ 'split' ];
    const attributes = defaultAttrs(stringAttributes);
    attributes['split']['default'] = 'half';

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
		attributes,
        parent: [`${namespace}/form-builder`],
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { split } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-form__input-row">
                    <p className="block-title">Input Row - Update widths of inputs in block settings.</p>
                    <BlockSettings 
                        title="Form Settings"
                        controls={[
                            {
                                label: "Layout split",
                                type: 'radio',
                                value: split,
                                reference: 'split',
                                options: [
                                    { label: 'half / half', value: 'half' },
                                    { label: 'two thirds / one third', value: 'two-thirds' },
                                    { label: 'three quarters / one quarter', value: 'three-quarters' }
                                ]
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    /> 
                    { save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[ `${namespace}/text-input`, `${namespace}/select-input`, `${namespace}/date-input`, `${namespace}/number-input`]}
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