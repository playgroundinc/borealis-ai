import { namespace } from "../helper-functions/constants";

import CustomRichText from "../reusable/custom-richtext-component.jsx";
import CustomImageUpload from "../reusable/custom-image-upload.jsx";

export default function trmcAccordionBlock() {
  const { registerBlockType } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { i18n } = wp;

  const blockSlug = "callout-container";
  const blockTitle = "Callout Cards Container Block";
  const blockDescription = "Creates a container for single callout cards.";
  const blockCategory = "containers";
  const blockIcon = "layout"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    description: {
      type: "String",
      default: "",
    },
    title: {
      type: "String",
      default: "",
    },
    image_alt: {
      type: "String",
      default: "",
    },
    image_url: {
      type: "String",
      default: "",
    },
    image_id: {
      type: "Number",
      default: 0,
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
      const { description, image_alt, image_id, image_url, title } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div className="custom-container">
          <p className="block-title">Callout Cards Container</p>
          <CustomImageUpload
            components={[
              {
                value: image_url,
                reference: "image_url",
                altValue: image_alt,
                altReference: "image_alt",
                idValue: image_id,
                idReference: "image_id",
                buttonText: "Add background image",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <CustomRichText
            components={[
              {
                reference: "title",
                value: title,
                tagName: "h2",
                classes: ["heading-two"],
                placeholder: "Add title (optional)",
              },
              {
                reference: "description",
                value: description,
                tagName: "p",
                classes: ["paragraph"],
                placeholder: "Add description (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <div className={`col--${columns}`}>
            {save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/callout-column`]} />}
          </div>
        </div>,
      ];
    },
    save: () => {
      const { columns, description, title } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
