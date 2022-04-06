import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";
import defaultAttrs from "../helper-functions/default-attrs";

export default function accordionBlock() {
  const { registerBlockType } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { i18n } = wp;

  const blockSlug = "accordion";
  const blockTitle = "Accordion Container Block";
  const blockDescription = "Creates a set of expandable items.";
  const blockCategory = "containers";
  const blockIcon = "feedback"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const stringAttrs = ["description", "title"];
  const attributes = defaultAttrs(stringAttrs);

  registerBlockType(`${namespace}/${blockSlug}`, {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes,
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { description, title } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div className={`custom-container`}>
          <p className="block-title">Accordion</p>
          <CustomRichText
            components={[
              {
                reference: "title",
                value: title,
                tagName: "h2",
                classes: ["heading_two"],
                settings: [],
                placeholder: "Add title (optional)",
              },
              {
                reference: "description",
                value: description,
                tagName: "p",
                classes: ["paragraph"],
                placeholder: "Add description (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          {save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/accordion-row`]} />}
        </div>,
      ];
    },
    save: () => {
      return <InnerBlocks.Content />;
    },
  });
}
