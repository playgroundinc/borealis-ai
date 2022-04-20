import { namespace } from "../helper-functions/constants";
import BlockSettings from "../reusable/block-custom-settings.jsx";
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function tagCloudContainerBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { TextControl } = wp.components;
  const { i18n } = wp;

  const blockSlug = "tag-cloud-container-block"; // slug for the block
  const blockTitle = "Tag Cloud Container Block";
  const blockDescription = "Component to create tag cloud container block";
  const blockCategory = "containers";
  const blockIcon = "block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    background_color: {
      type: "String",
      default: "",
    },
    anchor_id: {
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
      const { attributes, setAttributes } = props;
      const { title, background_color, anchor_id } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const bgStyles = [
        {
          label: "Default",
          value: "bg-shade-white-400 text-shade-black-400 before:bg-shade-black-400 hover-light",
        },
        {
          label: "Grey",
          value: "bg-shade-grey-100 text-shade-black-400 before:bg-shade-black-400 hover-dark",
        },
      ];

      return [
        <div class="tag-cloud-container__block custom-container">
          <p class="block-title">Tag Cloud Container</p>
          <BlockSettings
            title="Block Settings"
            controls={[
              {
                type: "select",
                label: "Background Colour",
                options: bgStyles,
                reference: "background_color",
                value: background_color,
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <CustomRichText
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
            components={[
              {
                value: title,
                reference: "title",
                tagName: "p",
                placeholder: "Please provide a title (optional)",
                settings: [],
              },
            ]}
          />
          <TextControl
            value={anchor_id}
            onChange={(value) => {
              updateAttributeValue("anchor_id", value);
            }}
            label="Anchor ID:"
          />
          {save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/tag-cloud-item-block`]} />}
        </div>,
      ];
    },
    save: ({ attributes }) => {
      const { title, background_color, anchor_id } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
