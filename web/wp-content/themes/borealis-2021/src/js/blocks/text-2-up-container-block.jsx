import { namespace } from "./helper-functions/constants";
import CustomRichText from "./reusable/custom-richtext-component.jsx";
import BlockSettings from "./reusable/block-custom-settings.jsx";
import CustomImageUpload from "./reusable/custom-image-upload.jsx";

export default function text2UpContainerBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { TextControl } = wp.components;

  const { useSelect } = wp.data;
  const { i18n } = wp;

  const blockSlug = "text-2-up-container"; // slug for the block
  const blockTitle = "Text 2 Up Container Block";
  const blockDescription = "Component to create a text 2 up container block";
  const blockCategory = "containers";
  const blockIcon = "align-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    subtitle: {
      type: "String",
      default: "",
    },
    bgColour: {
      type: "String",
      default: "default",
    },
    colAmount: {
      type: "String",
      default: "default",
    },
    title_size: {
      type: "String",
      default: "default",
    },
    copy_size: {
      type: "String",
      default: "default",
    },
    text_or_image: {
      type: "String",
      default: "default",
    },
    cta_text: {
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
    anchor_id: {
      type: "String",
      default: "",
    },
    anchor_href: {
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
      const { title, subtitle, bgColour, colAmount, cta_text, title_size, copy_size, image_alt, image_id, image_url, text_or_image, anchor_id, anchor_href } = attributes;

      const bgStyles = [
        {
          label: "Default",
          value: "bg-shade-white-400 text-shade-black-400 before:bg-shade-black-400",
        },
        {
          label: "Grey",
          value: "bg-shade-grey-100 text-shade-black-400 before:bg-shade-black-400",
        },
        {
          label: "Purple",
          value: "bg-primary-purple-400 text-shade-white-400 before:bg-shade-white-400",
        },
        { label: "Navy", value: "bg-primary-navy-400 text-shade-white-400 before:bg-shade-white-400" },
        {
          label: "Light Blue",
          value: "bg-tint-lightBlue-400 text-shade-white-400 before:bg-shade-white-400",
        },
        {
          label: "Light Purple",
          value: "bg-tint-purple-400 text-shade-white-400 before:bg-shade-white-400",
        },
      ];

      const colStyles = [
        { label: "Default", value: "default" },
        { label: "Two", value: "two" },
        { label: "Three", value: "three" },
      ];

      const textOrImageStyles = [
        { label: "text", value: "default" },
        { label: "image", value: "image" },
      ];

      const titleStyles = [
        { label: "Large", value: "h2 md:h2-desktop" },
        { label: "Small", value: "h3" },
      ];

      const copyStyles = [
        { label: "Large", value: "paragraph-lg" },
        { label: "Small", value: "paragraph" },
      ];

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const innerBlockCount = useSelect((select) => select("core/block-editor").getBlock(props.clientId).innerBlocks);

      return [
        <div class="custom-component">
          <p className="block-title">Text 2 Up Container Block</p>
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
                value: subtitle,
                reference: "subtitle",
                tagName: "h3",
                classes: ["heading_two"],
                placeholder: "Please provide a subtitle (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <BlockSettings
            title="Block Settings"
            controls={[
              {
                type: "select",
                label: "Title or Img",
                options: textOrImageStyles,
                reference: "text_or_image",
                value: text_or_image,
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <BlockSettings
            title="Block Settings"
            controls={[
              {
                type: "select",
                label: "Background Colour",
                options: bgStyles,
                reference: "bgColour",
                value: bgColour,
              },
              {
                type: "select",
                label: "1/2/3 Columns",
                options: colStyles,
                reference: "colAmount",
                value: colAmount,
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <BlockSettings
            title="Block Settings"
            controls={[
              {
                type: "select",
                label: "Title Size",
                options: titleStyles,
                reference: "title_size",
                value: title_size,
              },
              {
                type: "select",
                label: "Copy Size",
                options: copyStyles,
                reference: "copy_size",
                value: copy_size,
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <InnerBlocks
            allowedBlocks={[`${namespace}/text-2-up`]}
            renderAppender={() => {
              if (innerBlockCount.length < 3) {
                return <InnerBlocks.ButtonBlockAppender />;
              } else {
                return false;
              }
            }}
          />
          <CustomRichText
            components={[
              {
                value: cta_text,
                reference: "cta_text",
                tagName: "p",
                classes: ["heading_three"],
                placeholder: "Please provide CTA anchor text (optional)",
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
            label="Anchor ID: (optional)"
          />
          <TextControl
            value={anchor_href}
            onChange={(value) => {
              updateAttributeValue("anchor_href", value);
            }}
            label="Anchor HREF: (optional)"
          />
        </div>,
      ];
    },
    save: () => {
      const { title, subtite, bgColour, colAmount, cta_text, title_size, copy_size, image_alt, image_id, image_url, text_or_image, anchor_id, anchor_href } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
