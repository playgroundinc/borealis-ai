import { namespace } from "../helper-functions/constants";
import BlockSettings from "../reusable/block-custom-settings.jsx";
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function productContainerBlock() {
  const { registerBlockType } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { i18n } = wp;

  const blockSlug = "product-container";
  const blockTitle = "Products List Container Block";
  const blockDescription = "Creates a container for a products list.";
  const blockCategory = "containers";
  const blockIcon = "editor-justify"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType(`${namespace}/${blockSlug}`, {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: {
      title: {
        type: "String",
        default: "",
      },
      background_color: {
        type: "String",
        default: "",
      },
    },
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
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
        <div className={`custom-container`}>
          <p className="block-title">Products Container</p>
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
            components={[
              {
                reference: "title",
                value: title,
                tagName: "h2",
                classes: ["h2"],
                settings: [],
                placeholder: "Provide a title (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          {save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/select-product`]} />}
        </div>,
      ];
    },
    save: () => {
      // const { title, background_color } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
