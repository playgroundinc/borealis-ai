// Helpers
import { namespace } from "../helper-functions/constants.js";

// Reusable
import CustomVideoUpload from "../reusable/custom-video-upload.jsx";
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function locationBlock() {
  /**
   * GUTENBERG BLOCK - Locations
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { useSelect } = wp.data;
  const { i18n } = wp;

  const slug = "location";
  const title = "Location";
  const description = "A Location Page Strip";
  const category = "page-strips";
  const icon = "align-full-width"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    city: {
      type: "String",
      default: "",
    },
    address: {
      type: "String",
      default: "",
    },
    video_alt: {
      type: "String",
      default: "",
    },
    video_url: {
      type: "String",
      default: "",
    },
    video_id: {
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
    parent: [`${namespace}/locations-container`],
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { city, address, video_alt, video_id, video_url } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const innerBlockCount = useSelect(
        (select) =>
          select("core/block-editor").getBlock(props.clientId).innerBlocks
      );

      return [
        <section class="custom-child">
          <p className="block-title">Location Column</p>
          <CustomRichText
            components={[
              {
                value: city,
                reference: "city",
                tagName: "p",
                classes: ["paragraph"],
                settings: ["core/bold"],
                placeholder: "Please provide a city",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <CustomRichText
            components={[
              {
                value: address,
                reference: "address",
                tagName: "p",
                classes: ["paragraph"],
                settings: ["core/bold"],
                placeholder: "Please provide address (optional)",
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
          <InnerBlocks
            allowedBlocks={[`${namespace}/location-image`]}
            renderAppender={() => {
              if (innerBlockCount.length < 4) {
                return <InnerBlocks.ButtonBlockAppender />;
              } else {
                return false;
              }
            }}
          />
        </section>,
      ];
    },
    save: ({ attributes }) => {
      const { city, address, video_alt, video_id, video_url } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
