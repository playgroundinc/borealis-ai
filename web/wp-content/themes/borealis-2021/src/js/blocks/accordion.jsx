import { namespace } from './helper-functions/constants';

import CustomRichText from './reusable/custom-richtext-component.jsx';
import BlockSettings from "./reusable/block-custom-settings.jsx";

import defaultAttrs from './helper-functions/default-attrs';

export default function trmcAccordionBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "accordion";
	const blockTitle = "Accordion";
	const blockDescription = "Creates a set of expandable items.";
	const blockCategory = "containers";
    const blockIcon = "feedback"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttrs = [
        'anchor_id',
        'description',
        'title',
        'bg_color'
    ];
    const attributes = defaultAttrs(stringAttrs);
    attributes['bg_color']['default'] = 'white';

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes,
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;
        const { anchor_id, bg_color, description, title } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className={`custom-container block--${bg_color} }` }>
                    <p className="block-title">Accordion</p>
                    <BlockSettings 
                        controls={[
                            {
                                type: 'select',
                                label: 'Background color',
                                reference: 'bg_color',
                                value: bg_color,
                                options: [
                                    { value: 'white', label: 'White' },
                                    { value: 'grey', label: 'Grey' }
                                ]
                            },   
                            {
                                type: 'text',
                                label: 'Anchor',
                                reference: 'anchor_id',
                                value: anchor_id,
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    <CustomRichText 
                        components={[
                            {
                                reference: 'title',
                                value: title,
                                tagName: 'h2',
                                classes: ['heading_two'],
                                placeholder: 'Add title (optional)',
                            },
                            {
                                reference: 'description',
                                value: description,
                                tagName: 'p',
                                classes: ['paragraph'],
                                placeholder: 'Add description (optional)',
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    {save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/accordion-row`]}
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