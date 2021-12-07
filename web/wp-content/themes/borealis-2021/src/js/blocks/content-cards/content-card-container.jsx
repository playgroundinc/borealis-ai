import { namespace } from '../helper-functions/constants';

import CustomRichText from '../reusable/custom-richtext-component.jsx';
import BlockSettings from "../reusable/block-custom-settings.jsx";

export default function trmcContentContainerBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "content-card-container";
	const blockTitle = "Content Block - Cards";
	const blockDescription = "Creates a container for content cards.";
	const blockCategory = "containers";
    const blockIcon = "layout"; // Dashicons: https://developer.wordpress.org/resource/dashicons/
    const attributes = {
        bg_color: {
            type: 'String',
            default: 'white'
        },
        description: {
            type: 'String',
            default: '',
        },
        icon: {
            type: 'Boolean',
            default: true,
        },
        link: {
            type: 'String',
            default: ''
        },
        link_text: {
            type: 'String',
            default: 'Learn More'
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
        const { bg_color, description, icon, link, link_text, title } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className={`custom-container block--${bg_color}`}>
                    <p className="block-title">Content Block - Cards (set background color and whether or not to use icons in the settings)</p>
                    <BlockSettings
                        title="Block Settings"
                        controls={[
                            {
                                type: 'select',
                                label: 'Background Color',
                                reference: 'bg_color',
                                value: bg_color,
                                options: [
                                    { value: 'white', label: 'White' },
                                    { value: 'grey', label: 'Grey' },
                                    { value: 'black', label: 'Black' },
                                    { value: 'red', label: 'Dark Red' },
                                ]
                            },
                            {
                                type: 'toggle',
                                label: 'Card Icons',
                                reference: 'icon',
                                value: icon,
                            },
                        ]}
                        onChange={(attribute, change) => { updateAttributeValue(attribute, change) }}
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
                            },
                            {
                                reference: 'link',
                                value: link,
                                tagName: 'p',
                                classes: ['paragraph'],
                                placeholder: 'Add cta link (optional)',
                            },
                            {
                                reference: 'link_text',
                                value: link_text,
                                tagName: 'p',
                                classes: ['paragraph'],
                                placeholder: 'Add cta link text (optional)',
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    <div className={icon ? `col--4` : `col--4 no-icon`}>
                        {save ? (
                            <InnerBlocks.Content />
                        ) : (
                            <InnerBlocks
                                allowedBlocks={[`${namespace}/content-card`]}
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