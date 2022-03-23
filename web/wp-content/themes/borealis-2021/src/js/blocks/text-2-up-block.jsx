// Helpers
import { namespace } from "./helper-functions/constants.js";

// Reusable
import CustomRichText from "./reusable/custom-richtext-component.jsx";

export default function text2UpBlock() {
  /**
   * GUTENBERG BLOCK - TEXT 2 UP
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;

  const { i18n } = wp;

  const slug = "text-2-up";
  const title = "Text 2 Up";
  const description = "A Text 2 Up Page Strip";
  const category = "rows";
  const icon = "align-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    copy: {
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
    parent: [`${namespace}/text-2-up-container`],
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { copy } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <section class="child-component">
          <p className="block-title">Text 2 Up Column</p>
          <CustomRichText
            components={[
              {
                value: copy,
                reference: "copy",
                tagName: "p",
                classes: ["paragraph"],
                settings: ["core/bold", "core/link", "core/italic", "core/list", "core/paragraph"],
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
      const { copy } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
