import booleanAttrs from "../../blocks/helper-functions/boolean-attrs.js";
import { namespace } from "../../blocks/helper-functions/constants.js";
import BlockSettings from "../../blocks/reusable/block-custom-settings.jsx";

export default function developmentBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
	const { i18n } = wp;

	const blockSlug = "development";
	const blockTitle = "Development Block";
	const blockDescription = "A block to be used for collaborating between development and design.";
	const blockCategory = "common";
    const blockIcon = "format-status"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attrs = {};  
    const booleanFields =  ['btn', 'container', 'custom_component', 'eyebrow', 'headline', 'heading_one', 'heading_two', 'heading_three', 'heading_four', 'heading_five', 'heading_six', 'paragraph', 'caption'];
    const attributes = booleanAttrs(attrs, booleanFields);

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes,
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
            const { btn, container, custom_component, eyebrow, headline, heading_one, heading_two, heading_three, heading_four, heading_five, heading_six, paragraph, caption } = attributes;
			function updateAttributeValue(attribute, value) {
                setAttributes({ [attribute]: value });
            }

			return [
                <div className="development-block">
                    <p class="block-title"><strong>Development Block - </strong>You can add components to this block and toggle which controls are enabled in the block settings.</p>
                    <BlockSettings 
                        title="Design Tools"
                        controls={[
                            {
                                type: 'checkbox',
                                label: 'Container',
                                value: container,
                                reference: 'container',
                            },
                            {
                                type: 'checkbox',
                                label: 'Component Spacing',
                                value: custom_component,
                                reference: 'custom_component',
                            },
                            {
                                type: 'checkbox',
                                label: 'Eyebrow',
                                value: eyebrow,
                                reference: 'eyebrow',
                            },
                            {
                                type: 'checkbox',
                                label: 'Headline',
                                value: headline,
                                reference: 'headline',
                            },
                            {
                                type: 'checkbox',
                                label: 'Heading One',
                                value: heading_one,
                                reference: 'heading_one',
                            },
                            {
                                type: 'checkbox',
                                label: 'Heading Two',
                                value: heading_two,
                                reference: 'heading_two',
                            },
                            {
                                type: 'checkbox',
                                label: 'Heading Three',
                                value: heading_three,
                                reference: 'heading_three',
                            },
                            {
                                type: 'checkbox',
                                label: 'Heading Four',
                                value: heading_four,
                                reference: 'heading_four',
                            },
                            {
                                type: 'checkbox',
                                label: 'Heading Five',
                                value: heading_five,
                                reference: 'heading_five',
                            },
                            {
                                type: 'checkbox',
                                label: 'Heading Six',
                                value: heading_six,
                                reference: 'heading_six',
                            },
                            {
                                type: 'checkbox',
                                label: 'Paragraph',
                                value: paragraph,
                                reference: 'paragraph',
                            },
                            {
                                type: 'checkbox',
                                label: 'Caption',
                                value: caption,
                                reference: 'caption',
                            },
                            {
                                type: 'checkbox',
                                label: 'Button',
                                value: btn,
                                reference: 'btn',
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    {save ? (   
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/development-component`]}
                        />
                    )}
                </div>
            ];
		},
		save: ({ attributes }) => {
			return <InnerBlocks.Content />;
		},
	});
}