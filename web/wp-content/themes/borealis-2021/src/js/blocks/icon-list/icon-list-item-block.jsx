import { namespace } from "../helper-functions/constants";
import BlockSettings from "../reusable/block-custom-settings.jsx";
import CustomRichText from "../reusable/custom-richtext-component.jsx";
import CustomImageUpload from "../reusable/custom-image-upload.jsx";

export default function iconListItemBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { i18n } = wp;
  const { TextControl } = wp.components;
  const { InnerBlocks } = wp.blockEditor;

  const blockSlug = "icon-list-item-block"; // slug for the block
  const blockTitle = "Icon list item block";
  const blockDescription = "Component to create icon list item block";
  const blockCategory = "rows";
  const blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    image_id: {
      type: "Number",
      default: 0,
    },
    width: {
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
    title: {
      type: "String",
      default: "",
    },
    subtitle: {
      type: "String",
      default: "",
    },
    copy: {
      type: "String",
      default: "",
    },
    link_text: {
      type: "String",
      default: "",
    },
    link_url: {
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
    parent: [`${namespace}/icon-list-container-block`],
    edit: (props, editor = false, save = false) => {
      const { attributes, setAttributes } = props;
      const { title, subtitle, copy, link_text, link_url, image_url, image_alt, image_id, width } = attributes;

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
        <div className={`custom-child`}>
          <p className="block-title">Icon List Item</p>
          <div>
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
            <CustomImageUpload
              components={[
                {
                  value: image_url,
                  reference: "image_url",
                  altValue: image_alt,
                  altReference: "image_alt",
                  idValue: image_id,
                  idReference: "image_id",
                  buttonText: "Add Icon (optional)",
                  imageClasses: ["image-text__image"],
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
                  tagName: "p",
                  classes: ["p"],
                  placeholder: "Add title (optional)",
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
                  tagName: "p",
                  classes: ["p"],
                  placeholder: "Add Subtitle (optional)",
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
                  classes: ["p"],
                  placeholder: "Add Copy (optional)",
                },
              ]}
              onChange={(attribute, change) => {
                updateAttributeValue(attribute, change);
              }}
            />
            <TextControl
              value={link_text}
              onChange={(value) => {
                updateAttributeValue("link_text", value);
              }}
              label="Link Text:"
            />
            <TextControl
              value={link_url}
              onChange={(value) => {
                updateAttributeValue("link_url", value);
              }}
              label="Link URL:"
            />
          </div>
        </div>,
      ];
    },
    save: () => {
      const { title, subtitle, copy, link_text, link_url, image_url, image_alt, image_id, width } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
