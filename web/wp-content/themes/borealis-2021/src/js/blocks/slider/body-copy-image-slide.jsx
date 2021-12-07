import { namespace } from '../helper-functions/constants';

import CustomRichText from '../reusable/custom-richtext-component.jsx';
import CustomImageUpload from '../reusable/custom-image-upload.jsx';

import defaultAttrs from '../helper-functions/default-attrs';

export default function trmcBodyCopyImageSlideBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "body-copy-image-slide";
	const blockTitle = "Image Slide";
	const blockDescription = "Creates an image slide with a caption.";
	const blockCategory = "common";
    const blockIcon = "feedback"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttrs = [
        'caption',
        'image_alt',
        'image_url'
    ];
    const attributes = defaultAttrs(stringAttrs);
    attributes['image_id'] = {
        type: 'Number',
        default: 0,
    }

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes,
        parent: [`${namespace}/body-copy-carousel`],
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;
        const { caption, image_id, image_alt, image_url } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className={`custom-child` }>
                    <p className="block-title">Image Slide</p>
                    <p style={{ fontSize: '1.4rem', fontStyle: 'italic'}}>Images should be at least 745px wide and 620px tall. Larger images will be cropped with a central focal point.</p>
                    <CustomImageUpload
                        components={[
                            {
                                value: image_url,
                                reference: 'image_url',
                                altValue: image_alt,
                                altReference: 'image_alt',
                                idValue: image_id,
                                idReference: 'image_id',
                                buttonText: 'Add an Image',
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    <CustomRichText 
                        components={[
                            {
                                reference: 'caption',
                                value: caption,
                                tagName: 'p',
                                classes: ['capstion'],
                                placeholder: 'Provide a caption for this slide',
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                </div>, 
            ];
		},
		save: () => {
            const { caption, image_alt, image_id, image_url } = attributes;
			return <InnerBlocks.Content />;
		},
	});
}
