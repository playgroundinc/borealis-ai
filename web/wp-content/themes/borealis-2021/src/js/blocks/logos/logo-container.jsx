import { namespace } from "../helper-functions/constants";

import CustomRichText from "../reusable/custom-richtext-component.jsx";
import BlockSettings from "../reusable/block-custom-settings.jsx";

export default function pgLogoContainerBlock() {
  const { registerBlockType } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { TextControl } = wp.components;
  const { i18n } = wp;

  const blockSlug = "logos-container";
  const blockTitle = "Logo Parade Block";
  const blockDescription = "Creates a container for logos parade.";
  const blockCategory = "containers";
  const blockIcon = "awards"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    copy: {
      type: "String",
      default: "",
    },
    title: {
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
      const { setAttributes, attributes } = props;
      const { copy, title, anchor_id } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div className={`custom-container`}>
          <p className="block-title">Logo Parade</p>
          <CustomRichText
            components={[
              {
                reference: "title",
                value: title,
                tagName: "h2",
                settings: [],
                placeholder: "Logo parade title here (optional)",
              },
              {
                reference: "copy",
                value: copy,
                tagName: "p",
                classes: ["paragraph"],
                settings: ["core/bold", "core/link", "core/italic", "core/list"],
                placeholder: "Logo parade copy here (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <TextControl
            value={anchor_id}
            onChange={(value) => {
              updateAttributeValue("anchor_id", value);
            }}
            label="Anchor ID:"
          />
          <div className="col--4">{save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/logo-subsection`]} />}</div>
        </div>,
      ];
    },
    save: () => {
      const { title, copy, anchor_id } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
