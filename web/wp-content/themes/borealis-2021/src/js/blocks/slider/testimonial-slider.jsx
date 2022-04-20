import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";
import defaultAttrs from "../helper-functions/default-attrs";

export default function testimonialSliderBlock() {
  const { registerBlockType } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { TextControl } = wp.components;
  const { i18n } = wp;

  const blockSlug = "testimonial-carousel";
  const blockTitle = "Testimonial Carousel";
  const blockDescription = "Creates a testimonial carousel.";
  const blockCategory = "carousels";
  const blockIcon = "slides"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const stringAttrs = ["title", "anchor_id"];
  const attributes = defaultAttrs(stringAttrs);

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
      anchor_id: {
        type: "String",
        default: "",
      },
    },
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { title, anchor_id } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div className={`custom-container`}>
          <p className="block-title">Testimonial Slider</p>
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
          <TextControl
            value={anchor_id}
            onChange={(value) => {
              updateAttributeValue("anchor_id", value);
            }}
            label="Anchor ID:"
          />
          {save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/testimonial`]} />}
        </div>,
      ];
    },
    save: () => {
      const { link, title, anchor_id } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
