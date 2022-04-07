import { namespace } from "../helper-functions/constants";
import BlockSettings from "../reusable/block-custom-settings.jsx";
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function featuredJobsBlock() {
  const { registerBlockType } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { i18n } = wp;

  const blockSlug = "jobs-container"; // slug for the block
  const blockTitle = "Featured Jobs Block";
  const blockDescription = "Component to create highlighted jobs container block";
  const blockCategory = "jobs";
  const blockIcon = "archive"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    background_color: {
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
      const { attributes, setAttributes } = props;
      const { title, background_color } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const bgStyles = [
        {
          label: "Default",
          value: "bg-shade-white-400 text-shade-black-400 before:bg-shade-black-400 hover-light",
        },
        {
          label: "Grey",
          value: "bg-shade-grey-100 text-shade-black-400 before:bg-shade-black-400 hover-dark",
        },
      ];

      return [
        <div class="custom-container">
          <p class="block-title">Featured Jobs Container</p>
          <BlockSettings
            title="Block Settings"
            controls={[
              {
                type: "select",
                label: "Background Colour",
                options: bgStyles,
                reference: "background_color",
                value: background_color,
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <CustomRichText
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
            components={[
              {
                value: title,
                reference: "title",
                tagName: "h2",
                placeholder: "Please provide a title (optional)",
                settings: [],
              },
            ]}
          />
          {save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/select-job`]} />}
        </div>,
      ];
    },
    save: ({ attributes }) => {
      const { title, background_color } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
