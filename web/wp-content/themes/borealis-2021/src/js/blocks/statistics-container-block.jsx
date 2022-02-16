import { namespace } from "./helper-functions/constants";
import CustomRichText from "./reusable/custom-richtext-component.jsx";

export default function statisticsContainerBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { useSelect } = wp.data;
  const { i18n } = wp;

  const blockSlug = "statistics-container"; // slug for the block
  const blockTitle = "Create statistics container block";
  const blockDescription = "Component to create a statistics container block";
  const blockCategory = "common";
  const blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    description: {
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
      const { title, description } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const innerBlockCount = useSelect(
        (select) =>
          select("core/block-editor").getBlock(props.clientId).innerBlocks
      );

      return [
        <div class="custom-component">
          <p className="block-title">Statistics Container Block</p>
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
          <CustomRichText
            components={[
              {
                value: description,
                reference: "description",
                tagName: "h3",
                classes: ["heading_two"],
                placeholder: "Please provide a description (optional)",
                settings: [
                  "core/bold",
                  "core/link",
                  "core/italic",
                  "core/list",
                ],
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <InnerBlocks
            allowedBlocks={[`${namespace}/statistics`]}
            renderAppender={() => {
              if (innerBlockCount.length < 2) {
                return <InnerBlocks.ButtonBlockAppender />;
              } else {
                return false;
              }
            }}
          />
        </div>,
      ];
    },
    save: () => {
      const { title, description } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
