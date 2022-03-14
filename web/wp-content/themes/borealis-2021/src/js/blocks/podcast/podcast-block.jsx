import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";
import CustomImageUpload from "../reusable/custom-image-upload.jsx";

export default function podcastBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { useSelect } = wp.data;
  const { i18n } = wp;

  const blockSlug = "podcast"; // slug for the block
  const blockTitle = "Create podcast block";
  const blockDescription = "Component to create a podcast block";
  const blockCategory = "common";
  const blockIcon = "format-audio"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    author: {
      type: "String",
      default: "",
    },
    link_url: {
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
  };

  registerBlockType(`${namespace}/${blockSlug}`, {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes,
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { title, author, link_url, image_id, image_url, image_alt } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const innerBlockCount = useSelect((select) => select("core/block-editor").getBlock(props.clientId).innerBlocks);

      return [
        <div class="custom-container">
          <p className="block-title">Podcast Block</p>
          <CustomRichText
            components={[
              {
                value: title,
                reference: "title",
                tagName: "h2",
                classes: ["heading_one"],
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
                value: author,
                reference: "author",
                tagName: "h3",
                classes: ["heading_two"],
                placeholder: "Please provide a author",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <CustomRichText
            components={[
              {
                value: link_url,
                reference: "link_url",
                tagName: "h3",
                classes: ["heading_two"],
                placeholder: "Please provide a podcast audio link",
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
        </div>,
      ];
    },
    save: () => {
      const { title, author, link_url, image_id, image_url, image_alt } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
