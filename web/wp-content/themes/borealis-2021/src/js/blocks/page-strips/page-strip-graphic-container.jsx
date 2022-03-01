import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function pageStripGraphicContainer() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { useSelect } = wp.data;
  const { i18n } = wp;

  const blockSlug = "page-strip-graphic-container"; // slug for the block
  const blockTitle = "Graphic Page Strip Container";
  const blockDescription =
    "Component to create page strip graphic container block";
  const blockCategory = "containers";
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
  };

  registerBlockType(`${namespace}/${blockSlug}`, {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes,
    edit: (props, editor = false, save = false) => {
      const innerBlockCount = useSelect(
        (select) =>
          select("core/block-editor").getBlock(props.clientId).innerBlocks
      );

      return [
        <div class="custom-component">
          <p className="block-title">Page Strip Graphic Container Block</p>
          <InnerBlocks
            allowedBlocks={[`${namespace}/page-strip-graphic`]}
            renderAppender={() => {
              if (innerBlockCount.length < 2) {
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
      return <InnerBlocks.Content />;
    },
  });
}
