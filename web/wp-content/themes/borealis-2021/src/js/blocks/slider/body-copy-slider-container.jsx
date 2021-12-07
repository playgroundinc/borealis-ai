import { namespace } from '../helper-functions/constants';

export default function trmcBodyCopySliderBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "body-copy-carousel";
	const blockTitle = "News - Slider";
	const blockDescription = "Creates a carousel.";
	const blockCategory = "carousels";
    const blockIcon = "slides"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes: {},
        parent: [`${namespace}/body-copy`],
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className={`custom-child` }>
                    <p className="block-title">News - Slider</p>
                    {save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/body-copy-image-slide`, 'core/video']}
                        />
                    )}
                </div>, 
            ];
		},
		save: () => {
			return <InnerBlocks.Content />;
		},
	});
}