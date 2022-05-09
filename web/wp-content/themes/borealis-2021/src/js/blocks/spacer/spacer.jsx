// Helpers
import { namespace } from "../helper-functions/constants.js";

export default function pgSpacerBlock() {
  /**
   * GUTENBERG BLOCK - SPACER
   */
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;

  const { i18n } = wp;

  const slug = "spacer";
  const title = "Spacer";
  const description = "Adds vertical spacer";
  const category = "rows";
  const icon = "insert"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

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
    edit: (props, editor = false, save = false) => {
      return [
        <section class="child-component h-14">
          <p> 56px of Space</p>
        </section>,
      ];
    },
    save: () => {
      return <InnerBlocks.Content />;
    },
  });
}
