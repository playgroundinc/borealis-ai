// Helpers
import { namespace } from "./helper-functions/constants.js";

// Reusable
import CustomRichText from "./reusable/custom-richtext-component.jsx";

export default function statisticsBlock() {
  /**
   * GUTENBERG BLOCK - Statistics
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;

  const { i18n } = wp;

  const slug = "statistics";
  const title = "Statistics";
  const description = "A Statistics Page Strip";
  const category = "page-strips";
  const icon = "align-full-width"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    stat: {
      type: "String",
      default: "",
    },
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
    parent: [`${namespace}/statistics-container`],
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { copy, stat } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <section class="child-component">
          <p className="block-title">Statistics Column</p>
          <CustomRichText
            components={[
              {
                value: stat,
                reference: "stat",
                tagName: "p",
                classes: ["paragraph"],
                settings: [
                  "core/bold",
                  "core/link",
                  "core/italic",
                ],
                placeholder: "Please provide a stat",
              }
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
                settings: [
                  "core/bold",
                  "core/link",
                  "core/italic",
                ],
                placeholder: "Please provide copy (optional)",
              }
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
        </section>,
      ];
    },
    save: ({ attributes }) => {
      const { copy, stat } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
