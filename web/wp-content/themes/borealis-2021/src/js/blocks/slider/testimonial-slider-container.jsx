import { namespace } from '../helper-functions/constants';

import CustomRichText from '../reusable/custom-richtext-component.jsx';

import defaultAttrs from '../helper-functions/default-attrs';

export default function trmcTestimonialSliderBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "testimonial-carousel";
	const blockTitle = "Testimonials";
	const blockDescription = "Creates a carousel for testimonials.";
	const blockCategory = "carousels";
    const blockIcon = "testimonial"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

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

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className={`custom-container` }>
                    <p className="block-title">Testimonials</p>
                    {save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/testimonial-slide`]}
                            template={[[`${namespace}/testimonial-slide`]]}
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