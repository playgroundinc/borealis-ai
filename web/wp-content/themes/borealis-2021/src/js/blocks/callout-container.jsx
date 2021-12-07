import { namespace } from './helper-functions/constants';

import CustomRichText from './reusable/custom-richtext-component.jsx';
import BlockSettings from "./reusable/block-custom-settings.jsx";

export default function trmcAccordionBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "callout-container";
	const blockTitle = "Cards - Image";
	const blockDescription = "Creates a container for single callout cards.";
	const blockCategory = "containers";
    const blockIcon = "layout"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttrs = [
        'alignment',
        'columns',
        'title',
    ];
    const attributes = {
        columns: {
            type: 'String',
            default: '3',
        },
        description: {
            type: 'String',
            default: '',
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
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;
        const { description, columns, title } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className="custom-container">
                    <p className="block-title">Cards - Image (set number of columns in block settings)</p>
                    <BlockSettings 
                        controls={[   
                            {
                                type: 'select',
                                label: '# of Columns',
                                reference: 'columns',
                                value: columns,
                                options: [
                                    // Value is the 12 / number of columns.
                                    { label: "Four", value: "3" },
                                    { label: "Three", value: "4" },
                                    { label: "Two", value: "6" }
                                ]
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
                                classes: ['heading-two'],
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
                    <div className={`col--${columns}`}>
                        {save ? (
                            <InnerBlocks.Content />
                        ) : (
                            <InnerBlocks
                                allowedBlocks={[`${namespace}/callout-column`]}
                            />
                        )}
                    </div>
                </div>, 
            ];
		},
		save: () => {
            const { columns, description, title } = attributes;
			return <InnerBlocks.Content />;
		},
	});
}