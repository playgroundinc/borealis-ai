import { namespace } from '../helper-functions/constants';

import CustomRichText from '../reusable/custom-richtext-component.jsx';

import defaultAttrs from '../helper-functions/default-attrs';

export default function trmcSliderBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "carousel";
	const blockTitle = "Media - Slider";
	const blockDescription = "Creates a carousel.";
	const blockCategory = "carousels";
    const blockIcon = "slides"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttrs = [
        'alignment',
        'title'
    ];
    const attributes = defaultAttrs(stringAttrs);
    attributes['alignment']['default'] = 'center';

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes,
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;
        const { alignment, title } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className={`custom-container` }>
                    <p className="block-title">Media - Slider</p>
                    <CustomRichText 
                        components={[
                            {
                                reference: 'title',
                                value: title,
                                tagName: 'h2',
                                classes: ['heading_two'],
                                placeholder: 'Provide a Carousel title (optional)',
                                align: {
                                    value: alignment,
                                    reference: 'alignment',
                                }
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    {save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/image-slide`, 'core/video']}
                        />
                    )}
                </div>, 
            ];
		},
		save: () => {
            const { title } = attributes;
			return <InnerBlocks.Content />;
		},
	});
}