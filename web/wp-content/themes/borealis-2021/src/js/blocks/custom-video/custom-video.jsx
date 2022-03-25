import { namespace } from "../helper-functions/constants.js";
import CustomRichText from "../reusable/custom-richtext-component.jsx";
import BlockSettings from "../reusable/block-custom-settings.jsx";
import CustomVideoUpload from "../reusable/custom-video-upload.jsx";
import CustomImageUpload from "../reusable/custom-image-upload.jsx";

export default function customVideoBlock() {
  /**
   * GUTENBERG BLOCK -Custom Video Block
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { TextControl } = wp.components;
  const { i18n } = wp;

  const slug = "custom-video";
  const title = "Custom Video";
  const description = "A Custom Video Block";
  const category = "page-strips";
  const icon = "align-full-width"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    copy: {
      type: "String",
      default: "",
    },
    width: {
      type: "String",
      default: "",
    },
    video_url: {
      type: "String",
      default: "",
    },
    video_alt: {
      type: "String",
      default: "",
    },
    video_id: {
      type: "Number",
      default: 0,
    },
    image_url: {
      type: "String",
      default: "",
    },
    image_alt: {
      type: "String",
      default: "",
    },
    image_id: {
      type: "Number",
      default: 0,
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
      const { copy, width, video_url, video_id, video_alt, image_url, image_id, image_alt } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const width_styles = [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Full Width",
          value: "full-width",
        },
      ];

      return [
        <section class="custom-component">
          <p className="block-title">Custom Video Block</p>
          <BlockSettings
            title="Width Settings"
            controls={[
              {
                type: "select",
                label: "Width",
                options: width_styles,
                reference: "width",
                value: width,
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <CustomVideoUpload
            components={[
              {
                value: video_url,
                reference: "video_url",
                altValue: video_alt,
                altReference: "video_alt",
                idValue: video_id,
                idReference: "video_id",
                buttonText: "Add a video",
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
                buttonText: "Add placeholder image",
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
        </section>,
      ];
    },
    save: ({ attributes }) => {
      const { copy, width, video_url, video_id, video_alt, image_url, image_id, image_alt } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
