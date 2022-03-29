import { namespace } from "../helper-functions/constants.js";
import CustomRichText from "../reusable/custom-richtext-component.jsx";
import BlockSettings from "../reusable/block-custom-settings.jsx";

export default function titleTextCtaBlock() {
  /**
   * GUTENBERG BLOCK - Title Text Cta Block
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { TextControl } = wp.components;
  const { i18n } = wp;

  const slug = "title-text-cta";
  const title = "Title & Text & Cta Block";
  const description = "A Title Text Cta Page Strip";
  const category = "page-strips";
  const icon = "align-full-width"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    copy: {
      type: "String",
      default: "",
    },
    cta_text: {
      type: "String",
      default: "",
    },
    cta_url: {
      type: "String",
      default: "",
    },
    background_colour: {
      type: "String",
      default: "",
    },
  };
  registerBlockType(`${namespace}/${slug}`, {
    title: i18n.__(title, `${namespace}`),
    description: i18n.__(description, `${namespace}`),
    category,
    icon,
    attributes,
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { title, copy, cta_url, cta_text, background_colour } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const background_styles = [
        {
          label: "Default",
          value: "bg-shade-white-400 text-shade-black-400 before:bg-shade-black-400",
        },
        {
          label: "Purple",
          value: "bg-primary-purple-400 text-shade-white-400 before:bg-shade-white-400",
        },
        { label: "Navy", value: "bg-primary-navy-400 text-shade-white-400 before:bg-shade-white-400" },
        {
          label: "Light Blue",
          value: "bg-tint-lightBlue-400 text-shade-white-400 before:bg-shade-white-400",
        },
        {
          label: "Light Purple",
          value: "bg-tint-purple-400 text-shade-white-400 before:bg-shade-white-400",
        },
      ];

      return [
        <section class="child-component">
          <p className="block-title">Title Text Cta Block</p>
          <BlockSettings
            title="Block Settings"
            controls={[
              {
                type: "select",
                label: "Background Colour",
                options: background_styles,
                reference: "background_colour",
                value: background_colour,
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <CustomRichText
            components={[
              {
                value: title,
                reference: "title",
                tagName: "h2",
                classes: ["heading_two"],
                placeholder: "Please provide a title",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <CustomRichText
            components={[
              {
                value: copy,
                reference: "copy",
                tagName: "p",
                classes: ["paragraph"],
                placeholder: "Please provide copy (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <TextControl
            value={cta_text}
            onChange={(value) => {
              updateAttributeValue("cta_text", value);
            }}
            label="CTA Text:"
          />
          <TextControl
            value={cta_url}
            onChange={(value) => {
              updateAttributeValue("cta_url", value);
            }}
            label="CTA Url:"
          />
        </section>,
      ];
    },
    save: ({ attributes }) => {
      const { title, copy, cta_url, cta_text, background_colour } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
