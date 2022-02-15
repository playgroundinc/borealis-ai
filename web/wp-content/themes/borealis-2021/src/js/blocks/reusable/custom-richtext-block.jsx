import { namespace } from "../helper-functions/constants.js";
import defaultAttrs from '../helper-functions/default-attrs';

import BlockSettings from "./block-custom-settings.jsx";

export default function customRichTextBlock(blockObject) {
    const { registerBlockType, createBlock } = wp.blocks;
	const {
        RichText,
        AlignmentToolbar,
        BlockControls,
    } = wp.blockEditor;

    const {
        slug,
        title,
        description,
        category,
        classes,
        icon,
        tagName,
        placeholder,
    } = blockObject;
    const settings = blockObject.settings && Array.isArray(blockObject.settings) ? blockObject.settings : ['core/italic', 'core/bold', 'core/link'];
    const parent = blockObject.parent && Array.isArray(blockObject.parent) ? blockObject.parent : null; 
    const blockSettings = blockObject.blockSettings ? true : false; 
    let transforms = {};
    if (blockObject.transforms && blockObject.transforms.length) {
        transforms.to = [];
        blockObject.transforms.forEach((block) => {
            const transformObject = {
                type: 'block',
                blocks: [`${namespace}/${block}`],
                transform: function (attributes, innerBlocks) {
                    return createBlock(`${namespace}/${block}`, attributes, innerBlocks);
                },
            };
            transforms.to.push(transformObject);
        });
    }
    const stringAttrs = ['content'];
    const attributes = defaultAttrs(stringAttrs);
    attributes['alignment'] = blockObject.alignment === false ? { type: 'Boolean', default: false } : { type: 'String', default: 'left' };
    attributes['custom_settings'] = {
        type: 'boolean',
        default: blockSettings,
    } 
    const { i18n } = wp;
	registerBlockType(`${namespace}/${slug}`, {
		title: i18n.__(title),
		description: i18n.__(description),
		category,
        icon,
        parent,
        attributes,
        transforms,
		edit: (props, editor = false, save = false) => {
        const { setAttributes, attributes } = props;

        const { alignment, content, custom_settings } = attributes;
			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
        }

			return [
                <div class={alignment ? `text-${alignment} custom-component` : 'custom-component' }>
                    <p className="block-title">{title}</p>
                    {
                        alignment ?          
                        <BlockControls>
                            <AlignmentToolbar
                                value={ alignment }
                                onChange={(change) => {
                                    updateAttributeValue("alignment", change);
                                }}
                            />
                        </BlockControls> : null
                    }
        
                    <RichText
                        className={classes && classes.length ?  classes.join(' ') : null}
                        tagName={tagName}
                        placeholder={placeholder }
                        keepPlaceholderOnFocus={true}
                        allowedFormats={ settings }
                        value={content}
                        onChange={(changes) => {
                            updateAttributeValue("content", changes);
                        }}
                    />
				</div>,
			];
		},
		save: ({ attributes }) => {
            const { alignment, content, custom_settings } = attributes;
            return (
                <RichText.Content tagName={tagName} value={ content } />
            )
        },
    });
}
