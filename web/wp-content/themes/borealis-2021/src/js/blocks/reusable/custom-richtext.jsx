import { namespace } from "../helper-functions/constants";

export default function customRichTextBlock(blockObject) {
	const { registerBlockType } = wp.blocks;
	const {
        RichText,
    } = wp.blockEditor;
    const { i18n } = wp;

	registerBlockType(`${namespace}/${blockObject.slug}`, {
		title: i18n.__(blockObject.title),
		description: i18n.__(blockObject.description),
		category: blockObject.category,
		icon: blockObject.icon,
		attributes: {
			content: {
            },
		},
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { content } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div>
                    <RichText
                        class="components-text-control__input"
                        tagName={blockObject.tagName}
                        placeholder={blockObject.placeholder }
                        keepPlaceholderOnFocus={true}
                        value={content}
                        onChange={(changes) => {
                            updateAttributeValue("content", changes);
                        }}
                    />
				</div>,
			];
		},
		save: ({ attributes }) => {
            return (
                <RichText.Content tagName={blockObject.tagName} value={ attributes.content } />
            )
        },
	});
}