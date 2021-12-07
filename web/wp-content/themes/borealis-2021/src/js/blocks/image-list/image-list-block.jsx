// Helpers
import { namespace } from '../helper-functions/constants.js';

// Reusable
import CustomRichText from '../reusable/custom-richtext-component.jsx';
import CustomImageUpload from '../reusable/custom-image-upload.jsx';
import BlockSettings from '../reusable/block-custom-settings.jsx';

export default function listImageBlock() {
	/**
	 * GUTENBERG BLOCK - Image List Block
	 */
	const { registerBlockType, createBlock } = wp.blocks;
	const { InnerBlocks } = wp.blockEditor;
    const { i18n } = wp;

    const slug = "image-list";
	const title = "List";
	const description = "A single list.";
	const category = "common";
    const icon = "align-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
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
        title: {
            type: 'String',
            default: '',
        }
    }
	registerBlockType(`${namespace}/${slug}`, {
		title: i18n.__(title, `${namespace}`),
		description: i18n.__(description, `${namespace}`),
		category,
		icon,
        parent: [`${namespace}/image-list-container`],
        attributes,
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { 
                image_url, 
                image_alt, 
                image_id, 
                title,
            } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }
            return [
                <div className={`custom-child`}>
                    <p className="block-title">List</p>
                    <div>
                        <CustomImageUpload
                            components={[
                                {
                                    value: image_url,
                                    reference: 'image_url',
                                    altValue: image_alt,
                                    altReference: 'image_alt',
                                    idValue: image_id,
                                    idReference: 'image_id',
                                    buttonText: 'Add Icon (optional)',
                                    imageClasses: ['image-text__image']
                                }
                            ]}
                            onChange={(attribute, change) => { updateAttributeValue(attribute, change) }}
                        />
                        <CustomRichText 
                            components={[
                                {
                                    value: title,
                                    reference: 'title',
                                    tagName: 'h4',
                                    classes: ['heading_three'],
                                    placeholder: 'Add title'
                                },
                            ]}
                            onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) }}
                        />
                        {save ? (
                            <InnerBlocks.Content />
                        ) : (
                            <InnerBlocks allowedBlocks={['core/list', `${namespace}/paragraph-no-alignment`]} />
                        )}  
                    </div>
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
