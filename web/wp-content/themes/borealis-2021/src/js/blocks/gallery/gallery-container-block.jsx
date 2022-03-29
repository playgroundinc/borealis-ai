import { namespace } from "../helper-functions/constants";

import CustomRichText from "../reusable/custom-richtext-component.jsx";
import BlockSettings from "../reusable/block-custom-settings.jsx";

export default function galleryContainerBlock() {
  const { registerBlockType } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { i18n } = wp;

  const blockSlug = "gallery-container"; // slug for the block
  const blockTitle = "Gallery Container";
  const blockDescription = "Creates a Gallery Container block";
  const blockCategory = "carousels";
  const blockIcon = "format-gallery"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    description: {
      type: "String",
      default: "",
    },
    link: {
      type: "String",
      default: "",
    },
    link_text: {
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
      const { title, description, link, link_text } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div class="custom-container">
          <p class="block-title">Gallery Container</p>
          <CustomRichText
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
            components={[
              {
                value: title,
                reference: "title",
                tagName: "h2",
                placeholder: "Please provide a title (optional)",
                settings: [],
              },
              {
                value: description,
                reference: "description",
                tagName: "p",
                placeholder: "Please provide a description (optional)",
                settings: ["core/bold", "core/link", "core/italic"],
              },
              {
                value: link,
                reference: "link",
                tagName: "p",
                placeholder: "Please provide a link (optional)",
                settings: [],
              },
              {
                value: link_text,
                reference: "link_text",
                tagName: "p",
                placeholder: "Please provide a link text (optional)",
                settings: [],
              },
            ]}
          />
          {save ? (
            <InnerBlocks.Content />
          ) : (
            <InnerBlocks allowedBlocks={[`${namespace}/select-team-member`, `${namespace}/custom-image`]} />
          )}
        </div>,
      ];
    },
    save: ({ attributes }) => {
      const { title, description, link, link_text } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
