// Helpers
import { namespace } from "./helper-functions/constants.js";

// Reusable
import CustomRichText from "./reusable/custom-richtext-component.jsx";
import CustomImageUpload from "./reusable/custom-image-upload.jsx";

export default function imageTextStripBlock() {
  /**
   * GUTENBERG BLOCK -Image Text Strip
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
    const { ToggleControl } = wp.components;

  const { i18n } = wp;

  const slug = "image-text-strip";
  const title = "Image Text Strip";
  const description = "A page strip with an image and text.";
  const category = "page-strips";
  const icon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    copy: {
      type: "String",
      default: "",
    },
    btn_url: {
      type: "String",
      default: "",
    },
    btn_text: {
      type: "String",
      default: "",
    },
    image_id: {
      type: "Number",
      default: 0,
    },
    image_alt: {
      type: "String",
      default: "",
    },
    image_url: {
      type: "String",
      default: "",
    },
    image_id_mobile: {
      type: "Number",
      default: 0,
    },
    image_alt_mobile: {
      type: "String",
      default: "",
    },
    image_url_mobile: {
      type: "String",
      default: "",
    },
    reverse: {
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
      const {
        title,
        copy,
        btn_url,
        btn_text,
        image_alt,
        image_id,
        image_url,
        reverse,
      } = attributes;

      function updateAttributeValue(attribute, value) {
        console.log(attribute, value);
        setAttributes({ [attribute]: value });
      }
      return [
        <section class="custom-component">
          <p className="block-title">Graphic Page Strip</p>
          <CustomImageUpload
            components={[
              {
                value: image_url,
                reference: "image_url",
                altValue: image_alt,
                altReference: "image_alt",
                idValue: image_id,
                idReference: "image_id",
                buttonText: "Add an image",
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
                value: copy,
                reference: "copy",
                tagName: "p",
                classes: ["paragraph"],
                settings: ['core/bold', 'core/link', 'core/italic', 'core/list'],
                placeholder: "Please provide copy (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <CustomRichText
            components={[
              {
                value: btn_url,
                reference: "btn_url",
                tagName: "p",
                classes: ["paragraph"],
                placeholder: "Please provide button url (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <CustomRichText
            components={[
              {
                value: btn_text,
                reference: "btn_text",
                tagName: "p",
                classes: ["paragraph"],
                placeholder: "Please provide button text (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <ToggleControl
            label={
              "Style: check for image and text to reverse positions"
            }
            checked={reverse}
            onChange={(change) => {
              updateAttributeValue("reverse", change);
            }}
          />
        </section>,
      ];
    },
    save: ({ attributes }) => {
      const { title, copy, btn_url, btn_text, image_url, reverse, image_url_mobile } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}