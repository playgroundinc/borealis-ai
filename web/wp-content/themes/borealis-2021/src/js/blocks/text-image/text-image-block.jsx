import { namespace } from "../helper-functions/constants.js";
import CustomImageUpload from "../reusable/custom-image-upload.jsx";

export default function textImageBlock() {
  /**
   * GUTENBERG BLOCK - TEXT & IMAGE
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { i18n } = wp;

  const slug = "text-image-block";
  const title = "Text & Image Block";
  const description = "A Text & Image Block";
  const category = "page-strips";
  const icon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    image_url: {
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
    image_url_mobile: {
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
  };
  registerBlockType(`${namespace}/${slug}`, {
    title: i18n.__(title, `${namespace}`),
    description: i18n.__(description, `${namespace}`),
    category,
    icon,
    attributes,
    parent: [`${namespace}/text-image-container`],
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { image_id, image_alt, image_url, image_id_mobile, image_alt_mobile, image_url_mobile } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <section class="child-component">
          <p className="block-title">Text & Image Block</p>
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
        </section>,
      ];
    },
    save: ({ attributes }) => {
      const { image_id, image_alt, image_url, image_id_mobile, image_alt_mobile, image_url_mobile } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
