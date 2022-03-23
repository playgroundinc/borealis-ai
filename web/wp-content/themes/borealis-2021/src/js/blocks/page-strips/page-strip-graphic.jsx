import { namespace } from "../helper-functions/constants.js";
import BlockSettings from "../reusable/block-custom-settings.jsx";
import CustomRichText from "../reusable/custom-richtext-component.jsx";
import CustomImageUpload from "../reusable/custom-image-upload.jsx";

export default function pageStripGraphicBlock() {
  /**
   * GUTENBERG BLOCK - Page Strip Graphic
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { i18n } = wp;

  const slug = "page-strip-graphic";
  const title = "Page Strip - Image  BG";
  const description = "A page strip with a background image.";
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
    transforms: {
      to: [
        {
          type: "block",
          blocks: [`${namespace}/page-strip`],
          transform: (attributes, innerBlocks) => {
            return wp.blocks.createBlock(`${namespace}/page-strip`, attributes, innerBlocks);
          },
        },
      ],
    },
    parent: [`${namespace}/page-strip-graphic-container`],
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
        image_url_mobile,
        image_id_mobile,
        image_alt_mobile,
        background_colour,
      } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const background_styles = [
        {
          label: "Default",
          value: "bg-shade-white-400 text-shade-black-400",
        },
        {
          label: "Purple",
          value: "bg-primary-purple-400 text-shade-white-400",
        },
        { label: "Navy", value: "bg-primary-navy-400 text-shade-white-400" },
        {
          label: "Light Blue",
          value: "bg-tint-lightBlue-400 text-shade-white-400",
        },
        {
          label: "Light Purple",
          value: "bg-tint-purple-400 text-shade-white-400",
        },
      ];

      return [
        <section class="custom-child">
          <p className="block-title">Graphic Page Strip</p>
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
                buttonText: "Add a mobile image",
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
        </section>,
      ];
    },
    save: ({ attributes }) => {
      const { title, copy, btn_url, btn_text, image_url, image_url_mobile, background_colour } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
