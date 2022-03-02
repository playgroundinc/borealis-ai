import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function compareCodeBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { i18n } = wp;

  const blockSlug = "compare-code"; // slug for the block
  const blockTitle = "Compare Code";
  const blockDescription = "Component to compare two code blocks";
  const blockCategory = "containers";
  const blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    caption: {
      type: "String",
      default: ""
    }
  };

  registerBlockType(`${namespace}/${blockSlug}`, {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes,
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { title, caption } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div class="custom-component">
          <p className="block-title">Compare Code</p>
          <CustomRichText
            components={[
              {
                value: title,
                reference: "title",
                tagName: "h2",
                classes: ["heading_one"],
                settings: [],
                placeholder: "Please provide a title (optional)",
              },
              {
                value: caption,
                reference: "caption",
                tagName: "p",
                settings: [],
                placeholder: "Please provide a caption (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
      
          <InnerBlocks
            allowedBlocks={[`core/code`]}
            template={ [['core/code'], ['core/code']]}
            templateLock="all"
          />
        </div>,
      ];
    },
    save: () => {
      const { title, caption } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
