import { namespace } from "../helper-functions/constants";

export default function pgSpacerContainer() {
	/**
	 * GUTENBERG BLOCK - SPACER CONTAINER
	 */
	const { registerBlockType } = wp.blocks;
	const { InnerBlocks } = wp.blockEditor;
	const { i18n } = wp;

	const blockSlug = "spacer-container";
	const blockTitle = "Spacer";
	const blockDescription = "Creates a container for spacer blocks.";
	const blockCategory = "containers";
	const blockIcon = "editor-insertmore"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
		icon: blockIcon,
		edit: (props, editor = false, save = false) => {
			return [
				<div className={`custom-container`}>
					<p className="block-title">Spacer Blocks Container</p>
					<div className="col--4">
						{save ? (
							<InnerBlocks.Content />
						) : (
							<InnerBlocks allowedBlocks={[`${namespace}/spacer`]} />
						)}
					</div>
				</div>,
			];
		},
		save: () => {
			return <InnerBlocks.Content />;
		},
	});
}
