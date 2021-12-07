// Helpers
import { namespace } from './helper-functions/constants';

export default function bodyCopyBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
	const { i18n } = wp;

	const blockSlug = "body-copy";
	const blockTitle = "Body Copy";
	const blockDescription = "Component to add copy to a page.";
	const blockCategory = "common";
    const blockIcon = "editor-bold"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
		attributes: {
        },
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-container">
                    <p class="block-title">Body Copy</p>
                    { save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/heading-two`, `${namespace}/heading-three`, `${namespace}/heading-four`, `${namespace}/heading-five`, `${namespace}/paragraph`, 'core/list', `${namespace}/body-copy-carousel`, `${namespace}/body-copy-image`]}
                        />
                    )}
                </div>,
			];
		},
		save: ({ attributes }) => {
			return <InnerBlocks.Content />;
		},
	});
}