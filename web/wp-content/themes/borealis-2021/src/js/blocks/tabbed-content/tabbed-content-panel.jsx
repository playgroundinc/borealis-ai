import { namespace } from "../helper-functions/constants";

import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function tabbedContentPanelBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { i18n } = wp;
  const { InnerBlocks } = wp.blockEditor;
  const blockSlug = "tabbed-content-panel-block"; // slug for the block
  const blockTitle = "Tabbed content panel block";
  const blockDescription = "Component to create tabbed content panel block";
  const blockCategory = "rows";
  const blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    content: {
      type: "String",
      default: "",
    },
  };

  registerBlockType(`${namespace}/${blockSlug}`, {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes,
    parent: [`${namespace}/tabbed-content-container-block`],
    edit: (props, editor = false, save = false) => {
      const { attributes, setAttributes } = props;
      const { title, content } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div class="tabbed-content-panel__block custom-container">
          <p class="block-title">Tabbed Content Panel</p>
          <CustomRichText
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
            components={[
              {
                value: title,
                reference: "title",
                tagName: "h3",
                placeholder: "Please provide a title",
              },
            ]}
          />
          {save ? (
            <InnerBlocks.Content />
          ) : (
            <InnerBlocks
              allowedBlocks={[
                `${namespace}/paragraph`,
                `${namespace}/icon-list-container-block`,
                `${namespace}/accordion`,
                `core/video`,
                `core/embed-youtube`,
              ]}
            />
          )}
        </div>,
      ];
    },
    save: ({ attributes }) => {
      const { title } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
