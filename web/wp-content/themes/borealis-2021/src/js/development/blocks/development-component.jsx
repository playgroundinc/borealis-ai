// Helpers
import { namespace } from '../../blocks/helper-functions/constants';

export default function developmentComponentBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
	const { i18n } = wp;

	const blockSlug = "development-component";
	const blockTitle = "Development Component Block";
	const blockDescription = "A block to be used for collaborating between development and design.";
	const blockCategory = "common";
  const blockIcon = "format-status"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        parent: [`${namespace}/development`],
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
        }

			return [
                <div className="development-block__component">
                    <p class="block-title"><strong>Component - </strong>You can add columns to this component.</p>
                    {save ? (   
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/development-column`]}
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