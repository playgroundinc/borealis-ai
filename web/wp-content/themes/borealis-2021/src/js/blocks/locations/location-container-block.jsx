import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";
import BlockSettings from "../reusable/block-custom-settings.jsx";

export default function LocationsContainerBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { useSelect } = wp.data;
  const { i18n } = wp;

  const blockSlug = "locations-container"; // slug for the block
  const blockTitle = "Locations Container Block";
  const blockDescription = "Component to create a Locations container block";
  const blockCategory = "containers";
  const blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    description: {
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
      const { title, description } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      const innerBlockCount = useSelect((select) => select("core/block-editor").getBlock(props.clientId).innerBlocks);

      return [
        <div class="custom-container">
          <p className="block-title">Locations Container Block</p>
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
          <CustomRichText
            components={[
              {
                value: description,
                reference: "description",
                tagName: "h3",
                classes: ["heading_two"],
                placeholder: "Please provide a description (optional)",
                settings: ["core/bold", "core/link", "core/italic", "core/list"],
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          <InnerBlocks
            allowedBlocks={[`${namespace}/location`]}
            renderAppender={() => {
              if (innerBlockCount.length < 4) {
                return <InnerBlocks.ButtonBlockAppender />;
              } else {
                return false;
              }
            }}
          />
        </div>,
      ];
    },
    save: () => {
      const { title, description } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
