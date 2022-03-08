// Helpers
import { namespace } from "../helper-functions/constants.js";

// Reusable
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function podcastBlock() {
  /**
   * GUTENBERG BLOCK - Podcast
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;

  const { i18n } = wp;

  const slug = "podcast";
  const title = "Podcast";
  const description = "A Podcast Page Strip";
  const category = "rows";
  const icon = "align-full-width"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    author: {
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
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { author, title } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <section class="custom-child">
          <p className="block-title">Podcast</p>
          <CustomRichText
            components={[
              {
                value: title,
                reference: "title",
                tagName: "p",
                classes: ["paragraph"],
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
                tagName: "p",
                classes: ["paragraph"],
                placeholder: "Please provide author (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          {save ? (
            <InnerBlocks.Content />
          ) : (
            <InnerBlocks
              allowedBlocks={[
                "podcast-player/podcast-player",
                "core/table",
                "core/shortcode",
                "core/button",
                "core/video",
                "core/audio",
                "core/embed-podcast",
              ]}
            />
          )}
        </section>,
      ];
    },
    save: ({ attributes }) => {
      const { title, author } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
