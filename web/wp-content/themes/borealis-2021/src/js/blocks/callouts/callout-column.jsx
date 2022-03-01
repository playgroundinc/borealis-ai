// Helpers
import { namespace } from '../helper-functions/constants.js';

// Reusable
import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function calloutColumnBlock() {
	/**
	 * GUTENBERG BLOCK - Custom Column
	 */
	const { registerBlockType, createBlock } = wp.blocks;
	const { InnerBlocks } = wp.blockEditor;
    const { i18n } = wp;

    const slug = "callout-column";
	const title = "Card";
	const description = "A single card.";
	const category = "rows";
    const icon = "table-col-after"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        link: {
            type: "String",
            default: "",
        },
        subtitle: {
            type: "String",
            default: ""
        },
        title: {
            type: "String",
            default: "",
        },
    }
	registerBlockType(`${namespace}/${slug}`, {
		title: i18n.__(title, `${namespace}`),
		description: i18n.__(description, `${namespace}`),
		category,
		icon,
        attributes,
        parent: [`${namespace}/callout-container`],
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { 
                link, 
                subtitle,
                title
            } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }
            return [
                <div className="custom-child">
                    <p className="block-title">Callout Card</p>
                    <section>
                        <CustomRichText 
                            components={[
                                {
                                    value: title,
                                    reference: 'title',
                                    tagName: 'h2',
                                    classes: ['heading-one'],
                                    settings: [],
                                    placeholder: "Add a title for this card"
                                },
                                {
                                    value: subtitle,
                                    reference: 'subtitle',
                                    tagName: 'p',
                                    placeholder: "Add a subtitle for this card"
                                },
                                {
                                    value: link,
                                    reference: 'link',
                                    settings: [],
                                    tagName: 'p',
                                    placeholder: "Add a link (required)"
                                },
                            ]}
                            onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) }}
                        />
                    </section>
                </div>,
			];
			
		},
		save: ({attributes}) => {
            const { 
                link,
                subtitle,
                title
            } = attributes;
            return;
		},
	});
}
