import { namespace } from "../helper-functions/constants";

import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function customSubsectionBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { i18n } = wp;
  const { InnerBlocks } = wp.blockEditor;

  const blockSlug = "custom-subsection-block"; // slug for the block
  const blockTitle = "Custom Subsection";
  const blockDescription = "Component to create custom subsection block";
  const blockCategory = "sections";
  const blockIcon = "admin-page"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
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
    parent: [`${namespace}/custom-section-block`],
    edit: (props, editor = false, save = false) => {
      const { attributes, setAttributes } = props;
      const { title } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div class="custom-subsection custom-subsection__block">
          <p className="block-title">Custom Subsection Block</p>
          <CustomRichText
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
            components={[
              {
                label: "Title",
                value: title,
                reference: "title",
                tagName: "h3",
                settings: ["core/bold", "core/link", "core/italic", "core/code"],
                placeholder: "Please provide a title",
              },
            ]}
          />
          {save ? (
            <InnerBlocks.Content />
          ) : (
            <InnerBlocks
              allowedBlocks={[
                `core/table`,
                `core/button`,
                `core/audio`,
                `core/video`,
                `core/list`,
                `core/quote`,
                `${namespace}/tag-cloud-container-block`,
                `${namespace}/paragraph`,
                `${namespace}/heading-two`,
                `${namespace}/heading-three`,
                `${namespace}/heading-four`,
                `${namespace}/custom-image`,
                `${namespace}/blockquote`,
                `${namespace}/publications-container`,
                `${namespace}/image-text`,
                `${namespace}/icon-list-container-block`,
                `${namespace}/compare-code`,
                `${namespace}/code`,
                `${namespace}/jobs-container`,
                `${namespace}/compare-figures`,
                `${namespace}/podcast`,
                `${namespace}/tabbed-content-container-block`,
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
