import { namespace } from "../helper-functions/constants";
import CustomImageUpload from "../reusable/custom-image-upload.jsx";
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function videoTabbedContentContainerBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { TextControl } = wp.components;
  const { i18n } = wp;

  const blockSlug = "video-tabbed-content-container-block"; // slug for the block
  const blockTitle = "Video Tabbed Content Container Block";
  const blockDescription = "Component to create a video tabbed content container block";
  const blockCategory = "containers";
  const blockIcon = "block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

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
      const { attributes, setAttributes } = props;
      const { image_id, image_url, image_alt, title, anchor_id } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({
          [attribute]: value,
        });
      }

      return [
        <div class="tabbed-content-container__block custom-section">
          <p class="block-title"> Video Tabbed Content Container </p>
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
              },
            ]}
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
                buttonText: "Add a background image (optional)",
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
          {save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/video-tabbed-content-panel-block`]} />}
        </div>,
      ];
    },
    save: ({ attributes }) => {
      const { image_id, image_url, image_alt, title, anchor_id } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
