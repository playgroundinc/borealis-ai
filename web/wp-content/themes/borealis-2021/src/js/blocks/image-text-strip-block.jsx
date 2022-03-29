// Helpers
import { namespace } from "./helper-functions/constants.js";

// Reusable
import CustomRichText from "./reusable/custom-richtext-component.jsx";
import CustomImageUpload from "./reusable/custom-image-upload.jsx";
import BlockSettings from "./reusable/block-custom-settings.jsx";

export default function imageTextStripBlock() {
  /**
   * GUTENBERG BLOCK -Image Text Strip
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { ToggleControl } = wp.components;

  const { i18n } = wp;

  const slug = "image-text-strip";
  const title = "Image & Text Block";
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
      type: "Boolean",
      default: false,
    },
    full_width: {
      type: "Boolean",
      default: false,
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
        image_alt_mobile,
        image_id,
        image_id_mobile,
        image_url_mobile,
        image_url,
        reverse,
        full_width,
      } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }
      return [
        <div class="custom-component">
          <p className="block-title">Image Text Strip (Control layout in block settings)</p>
          <BlockSettings
            title="Block Settings"
            controls={[
              {
                type: "toggle",
                label: "Reversed?",
                reference: "reverse",
                value: reverse,
              },
              {
                type: "toggle",
                label: "Full Width?",
                reference: "full_width",
                value: full_width,
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />

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
          <CustomImageUpload
            components={[
              {
                value: image_url_mobile,
                reference: "image_url_mobile",
                altValue: image_alt_mobile,
                altReference: "image_alt_mobile",
                idValue: image_id_mobile,
                idReference: "image_id_mobile",
                buttonText: "Add an image (Mobile)",
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
                settings: ["core/bold", "core/link", "core/italic", "core/list"],
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
        </div>,
      ];
    },
    save: ({ attributes }) => {
      const { title, copy, btn_url, btn_text, image_url, reverse, image_url_mobile, full_width, image_id, image_id_mobile } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
