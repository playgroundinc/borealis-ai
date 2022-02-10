import { namespace } from "../helper-functions/constants";

import CustomRichText from "../reusable/custom-richtext-component.jsx";
import CustomImageUpload from "../reusable/custom-image-upload.jsx";


export default function iconListItemBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { i18n } = wp;
  const {
    InnerBlocks,
} = wp.blockEditor;

  const blockSlug = "icon-list-item-block"; // slug for the block
  const blockTitle = "Create icon list item block";
  const blockDescription = "Component to create icon list item block";
  const blockCategory = "common";
  const blockIcon = "admin-users"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

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
    subtitle: {
      type: "String",
      default: "",
    },
    copy: {
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
      const { subtitle, copy, image_url, image_alt, image_id } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div className={`custom-child`}>
          <p className="block-title">List</p>
          <div>
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
          </div>
        </div>,
      ];
    },
    save: () => {
      const { subtitle, copy, image_url, image_alt, image_id } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}