import {namespace } from '../helper-functions/constants';

import CustomImageUpload from "../reusable/custom-image-upload.jsx";
import CustomRichText from '../reusable/custom-richtext-component.jsx';
import BlockSettings from '../reusable/block-custom-settings.jsx';

export default function blockquoteBlock() {
	const { registerBlockType } = wp.blocks;
    const { i18n } = wp;

	const blockSlug = "blockquote";
	const blockTitle = "Quote";
	const blockDescription = "Creates a Blockquote.";
	const blockCategory = "copy";
    const blockIcon = "format-quote"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes: {
            style: {
                type: 'String',
                default: 'default'
            },
            image_alt: {
                type: 'String',
                default: '',
            },
            image_url: {
                type: 'String',
                default: '',
            },
            image_id: {
                type: 'Number',
                default: 0,
            },
            name: {
                type: 'String',
                default: '',
            },
            role: {
                type: 'String',
                default: ''
            },
            quote: {
                type: 'String',
                default: ''
            },
            speaker: {
                type: 'String',
                default: '',
            }
        },
		edit: (props, editor = false, save = false ) => {
            const { setAttributes, attributes } = props;
            const { image_id, image_url, image_alt, speaker, role, quote, style } = attributes;

            const styles = [
                { label: 'Default', value: 'default' },
                { label: 'Circle', value: 'circle' },
                { label: 'Circle Centered', value: 'circle-centered' },
                { label: 'Dark', value: 'dark' },
            ]
            function updateAttributeValue(attribute, value) {
                setAttributes({ [attribute]: value });
            }

            return [
                <div className={`custom-component`}>
                    <p className="block-title">{blockTitle}</p>
                    <BlockSettings 
                        title="Block Settings"
                        controls={[
                            { 
                                type: 'select',
                                label: 'Quote Style',
                                options: styles,
                                reference: 'style',
                                value: style,
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    <CustomImageUpload
                        components={[
                            {
                                value: image_url,
                                reference: 'image_url',
                                altValue: image_alt,
                                altReference: 'image_alt',
                                idValue: image_id,
                                idReference: 'image_id',
                                buttonText: 'Add an image',
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    <CustomRichText 
                        components={[
                            {
                                reference: 'quote',
                                value: quote,
                                tagName: 'p',
                                settings: [],
                                classes: [''],
                                placeholder: 'Provide quote (required)',
                            },
                            {
                                reference: 'speaker',
                                value: speaker,
                                tagName: 'p',
                                settings: [],
                                classes: [],
                                placeholder: 'Speaker',
                            },
                            {
                                reference: 'role',
                                value: role,
                                tagName: 'p',
                                settings: [],
                                classes: [],
                                placeholder: 'Role',
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                </div>, 
            ];
		},
		save: () => {
			return null;
		},
	});
}