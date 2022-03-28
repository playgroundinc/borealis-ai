import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";
import BlockSettings from "../reusable/block-custom-settings.jsx";

export default function statisticsContainerBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { useSelect } = wp.data;
  const { i18n } = wp;

  const blockSlug = "statistics-container"; // slug for the block
  const blockTitle = "Statistics Container Block";
  const blockDescription = "Component to create a statistics container block";
  const blockCategory = "containers";

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
    bgColour: {
      type: "String",
      default: "default",
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
      const { title, description, bgColour } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const bgStyles = [
        { label: "Default", value: "default" },
        { label: "Purple", value: "purple" },
      ];

      const innerBlockCount = useSelect((select) => select("core/block-editor").getBlock(props.clientId).innerBlocks);

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
                settings: ["core/bold", "core/link", "core/italic", "core/list"],
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <BlockSettings
            title="Block Settings"
            controls={[
              {
                type: "select",
                label: "Background Colour",
                options: bgStyles,
                reference: "bgColour",
                value: bgColour,
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
      const { title, description, bgColour } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
