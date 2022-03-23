// Helpers
import { namespace } from "../helper-functions/constants.js";

// Reusable
import CustomRichText from "../reusable/custom-richtext-component.jsx";
import CustomImageUpload from "../reusable/custom-image-upload.jsx";

export default function imageRowBlock() {
  /**
   * GUTENBERG BLOCK - Image Row Block
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { ToggleControl } = wp.components;

  const { i18n } = wp;

  const slug = "image-row-block";
  const title = "Image Row Block";
  const description = "An Image Row Block";
  const category = "page-strips";
  const icon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
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
  };
  registerBlockType(`${namespace}/${slug}`, {
    title: i18n.__(title, `${namespace}`),
    description: i18n.__(description, `${namespace}`),
    category,
    icon,
    attributes,
    parent: [`${namespace}/image-row-container`],
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { image_alt, image_id, image_url } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }
      return [
        <section class="custom-child">
          <p className="block-title">Image Row Block</p>
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
        </section>,
      ];
    },
    save: ({ attributes }) => {
      const { image_url, image_id, image_alt } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
