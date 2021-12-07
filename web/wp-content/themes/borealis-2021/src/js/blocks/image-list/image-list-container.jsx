// Helpers
import { namespace } from '../helper-functions/constants.js';

// Reusable
import CustomRichText from '../reusable/custom-richtext-component.jsx';
import CustomImageUpload from '../reusable/custom-image-upload.jsx';
import BlockSettings from '../reusable/block-custom-settings.jsx';

export default function listImageContainerBlock() {
	/**
	 * GUTENBERG BLOCK - Image List Container Block
	 */
	const { registerBlockType, createBlock } = wp.blocks;
	const { InnerBlocks } = wp.blockEditor;
    const { i18n } = wp;

    const slug = "image-list-container";
	const title = "Content Block - Square Image";
	const description = "Container with an image and lists.";
	const category = "containers";
    const icon = "align-pull-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        bg_color: {
            type: 'String',
            default: 'white',
        },
        image_id: {
            type: 'Number',
            default: 0,
        },
        image_alt: {
            type: 'String',
            default: '',
        },
        image_url: {
            type: 'String',
            default: '',
        },
        reverse: {
            type: 'Boolean',
            default: false,
        },
    }
	registerBlockType(`${namespace}/${slug}`, {
		title: i18n.__(title, `${namespace}`),
		description: i18n.__(description, `${namespace}`),
		category,
		icon,
        attributes,
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { 
                bg_color,
                description,
                image_url, 
                image_alt, 
                image_id, 
                reverse, 
                title,
            } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }
            return [
                <BlockSettings
                    title="Block Settings"
                    controls={[
                        {
                            type: 'toggle',
                            label: 'Reverse Layout',
                            reference: 'reverse',
                            value: reverse,
                        },
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
                        }
                    ]}
                    onChange={(attribute, change) => { updateAttributeValue(attribute, change) }}
                />,
                <div className={`custom-container block--${bg_color}`}>
                    <p className="block-title">Content Block - Square Image</p>
                    <section>
                        <div className={reverse ? 'row reverse' : 'row' }>
                            <div className="col-xs-12 col-md-6 col-v-center">
                                <CustomImageUpload
                                    components={[
                                        {
                                            value: image_url,
                                            reference: 'image_url',
                                            altValue: image_alt,
                                            altReference: 'image_alt',
                                            idValue: image_id,
                                            idReference: 'image_id',
                                            buttonText: 'Add Image',
                                            imageClasses: ['image-text__image']
                                        }
                                    ]}
                                    onChange={(attribute, change) => { updateAttributeValue(attribute, change) }}
                                />
                            </div>
                            <div className="col-xs-12 col-md-6 col-v-center">
                                
                                {save ? (
                                    <InnerBlocks.Content />
                                ) : (
                                    <InnerBlocks 
                                        allowedBlocks={[`${namespace}/image-list`]} 
                                        template={[[`${namespace}/image-list`]]} 
                                    />
                                )}
                            </div>
                            
                        </div>
                    </section>
                </div>,
			];
			
		},
		save: ({attributes}) => {
            const { 
                image_url, 
                image_alt, 
                image_id, 
                reverse, 
                title
            } = attributes;
            return <InnerBlocks.Content />;
		},
	});
}
