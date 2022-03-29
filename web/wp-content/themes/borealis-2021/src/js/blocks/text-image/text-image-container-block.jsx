import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function textImageContainerBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { useSelect } = wp.data;
  const { i18n } = wp;

  const blockSlug = "text-image-container"; // slug for the block
  const blockTitle = "Text & Image Container Block";
  const blockDescription = "Component to create a text and image container block";
  const blockCategory = "page-strips";
  const blockIcon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    copy: {
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
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { title, copy } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const innerBlockCount = useSelect((select) => select("core/block-editor").getBlock(props.clientId).innerBlocks);

      return [
        <div class="custom-component">
          <p className="block-title">Text & Image Container Block</p>
          <CustomRichText
            components={[
              {
                value: title,
                reference: "title",
                tagName: "h2",
                classes: ["heading_one"],
                placeholder: "Please provide a title (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <InnerBlocks
            allowedBlocks={[`${namespace}/text-image-block`]}
            renderAppender={() => {
              if (innerBlockCount.length < 1) {
                return <InnerBlocks.ButtonBlockAppender />;
              } else {
                return false;
              }
            }}
          />
          <CustomRichText
            components={[
              {
                value: copy,
                reference: "copy",
                tagName: "h3",
                classes: ["heading_three"],
                placeholder: "Please provide a copy (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
        </div>,
      ];
    },
    save: () => {
      const { title, copy } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
