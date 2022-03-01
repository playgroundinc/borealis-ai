import { namespace } from "./helper-functions/constants";
import CustomRichText from "./reusable/custom-richtext-component.jsx";
import BlockSettings from "./reusable/block-custom-settings.jsx";

export default function text2UpContainerBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { useSelect } = wp.data;
  const { i18n } = wp;

  const blockSlug = "text-2-up-container"; // slug for the block
  const blockTitle = "Text 2 Up Container";
  const blockDescription = "Component to create a text 2 up container block";
  const blockCategory = "containers";
  const blockIcon = "align-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    subtitle: {
      type: "String",
      default: "",
    },
    bgColour: {
      type: "String",
      default: "default",
    },
    colAmount: {
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
      const { title, subtitle, bgColour, colAmount } = attributes;

      const bgStyles = [
        { label: "Default", value: "bg-shade-white-400 text-shade-black-400" },
        { label: "Purple", value: "bg-primary-purple-400 text-shade-white-400" },
        { label: "Navy", value: "bg-primary-navy-400 text-shade-white-400" },
        { label: "Light Blue", value: "bg-tint-lightBlue-400 text-shade-white-400" },
        { label: "Light Purple", value: "bg-tint-purple-400 text-shade-white-400" },
      ];

      const colStyles = [
        { label: "Default", value: "default" },
        { label: "Two", value: "two" },
      ];

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const innerBlockCount = useSelect(
        (select) =>
          select("core/block-editor").getBlock(props.clientId).innerBlocks
      );

      return [
        <div class="custom-component">
          <p className="block-title">Text 2 Up Container Block</p>
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
                value: subtitle,
                reference: "subtitle",
                tagName: "h3",
                classes: ["heading_two"],
                placeholder: "Please provide a subtitle (optional)",
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
              {
                type: "select",
                label: "1 or 2 Columns of Copy",
                options: colStyles,
                reference: "colAmount",
                value: colAmount,
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <InnerBlocks
            allowedBlocks={[`${namespace}/text-2-up`]}
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
      const { title, subtite, bgColour, colAmount } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
