import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function imageRowContainer() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { useSelect } = wp.data;
  const { TextControl } = wp.components;
  const { i18n } = wp;

  const blockSlug = "image-row-container"; // slug for the block
  const blockTitle = "Image Row Container";
  const blockDescription = "Component to create image row container block";
  const blockCategory = "media";
  const blockIcon = "cover-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    limit: {
      type: "Number",
      default: 0,
    },
    anchor_id: {
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
      const innerBlockCount = useSelect((select) => select("core/block-editor").getBlock(props.clientId).innerBlocks);

      const { setAttributes, attributes } = props;
      const { anchor_id } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div class="custom-component">
          <p className="block-title">Image Row Container Block</p>
          <InnerBlocks
            allowedBlocks={[`${namespace}/image-row-block`]}
            renderAppender={() => {
              if (innerBlockCount.length < 4) {
                return <InnerBlocks.ButtonBlockAppender />;
              } else {
                return false;
              }
            }}
          />
          <TextControl
            value={anchor_id}
            onChange={(value) => {
              updateAttributeValue("anchor_id", value);
            }}
            label="Anchor ID:"
          />
        </div>,
      ];
    },
    save: () => {
      const { anchor_id } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
