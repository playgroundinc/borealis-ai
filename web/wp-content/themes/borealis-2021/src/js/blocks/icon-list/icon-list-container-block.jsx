import { namespace } from "../helper-functions/constants";

import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function iconListContainerBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { ToggleControl, TextControl } = wp.components;
  const { i18n } = wp;

  const blockSlug = "icon-list-container-block"; // slug for the block
  const blockTitle = "Icon List Container Block";
  const blockDescription = "Component to create icon list container block";
  const blockCategory = "containers";
  const blockIcon = "block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    description: {
      type: "String",
      default: "",
    },
    icon: {
      type: "Boolean",
      default: false,
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
      const { title, description, icon, anchor_id } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div className={`custom-container`}>
          <p className="block-title">Icon List Container Block</p>
          <CustomRichText
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
            components={[
              {
                value: title,
                reference: "title",
                tagName: "h2",
                settings: [],
                placeholder: "Please provide a title (optional)",
              },
            ]}
          />
          <CustomRichText
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
            components={[
              {
                value: description,
                reference: "description",
                tagName: "p",
                placeholder: "Please provide a description (optional)",
              },
            ]}
          />
          <ToggleControl
            label={"Style: check for with icon or leave unchecked for without icon"}
            checked={icon}
            onChange={(change) => {
              updateAttributeValue("icon", change);
            }}
          />
          <TextControl
            value={anchor_id}
            onChange={(value) => {
              updateAttributeValue("anchor_id", value);
            }}
            label="Anchor ID:"
          />
          {save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/custom-icon-list-item-block`]} />}
        </div>,
      ];
    },
    save: ({ attributes }) => {
      const { title, description, icon, anchor_id } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
