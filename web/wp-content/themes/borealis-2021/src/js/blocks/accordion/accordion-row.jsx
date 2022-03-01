import {namespace } from '../helper-functions/constants';

import CustomRichText from '../reusable/custom-richtext-component.jsx';

import defaultAttrs from '../helper-functions/default-attrs';

export default function accordionBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "accordion-row";
	const blockTitle = "Accordion Row";
	const blockDescription = "Creates a single expandable accordion item.";
	const blockCategory = "rows";
    const blockIcon = "table-row-after"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttrs = ['title'];
    const attributes = defaultAttrs(stringAttrs);

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes,
        parent: [`${namespace}/accordion`],
		edit: (props, editor = false, save = false ) => {
            const { setAttributes, attributes } = props;
            const { title } = attributes;

            function updateAttributeValue(attribute, value) {
                setAttributes({ [attribute]: value });
            }

            return [
                <div className={`custom-child ${ editor ? "accordion-editory" : "accordion--fe" }` }>
                    <p className="block-title">Accordion Row</p>
                    <CustomRichText 
                        components={[
                            {
                                reference: 'title',
                                value: title,
                                tagName: 'p',
                                settings: [],
                                classes: ['heading-four'],
                                placeholder: 'Accordion row title here',
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    {save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/paragraph`, `${namespace}/heading-four`]}
                        />
                    )}
                </div>, 
            ];
		},
		save: () => {
			return <InnerBlocks.Content />;
		},
	});
}