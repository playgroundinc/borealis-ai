// Helpers
import { namespace } from "../helper-functions/constants.js";

// Reusable
import BlockSettings from "../reusable/block-custom-settings.jsx";

export default function featuredPostsContainerBlock() {
  /**
   * GUTENBERG BLOCK - Featured Posts Container
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { TextControl } = wp.components;
  const { i18n } = wp;

  const slug = "featured-posts-container";
  const title = "Featured Post(s) Page Strip Block";
  const description = "A container for one or more featured post.";
  const category = "page-strips";
  const icon = "welcome-write-blog"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    columns: {
      type: "String",
      default: "12",
    },
    anchor_id: {
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
      const { columns, anchor_id } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }
      return [
        <BlockSettings
          title="Block Settings"
          controls={[
            {
              type: "radio",
              label: "Number of Columns",
              reference: "columns",
              value: columns,
              options: [
                { label: "One", value: "12" },
                { label: "Two", value: "6" },
              ],
            },
          ]}
          onChange={(attribute, change) => {
            updateAttributeValue(attribute, change);
          }}
        />,
        <div className={`custom-container`}>
          <p className="block-title">Featured Post(s)</p>
          <TextControl
            value={anchor_id}
            onChange={(value) => {
              updateAttributeValue("anchor_id", value);
            }}
            label="Anchor ID:"
          />
          {save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/select-research-blogs`, `${namespace}/select-news`]} />}
        </div>,
      ];
    },
    save: ({ attributes }) => {
      const { columns, anchor_id } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
