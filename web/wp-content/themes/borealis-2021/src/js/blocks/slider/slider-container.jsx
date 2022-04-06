import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";
import defaultAttrs from "../helper-functions/default-attrs";

export default function pgCarouselBlock() {
  const { registerBlockType } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { i18n } = wp;

  const blockSlug = "carousel";
  const blockTitle = "News Carousel";
  const blockDescription = "Creates a carousel.";
  const blockCategory = "carousels";
  const blockIcon = "slides"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const stringAttrs = ["link", "title"];
  const attributes = defaultAttrs(stringAttrs);

  registerBlockType(`${namespace}/${blockSlug}`, {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes,
    edit: (props, editor = false, save = false) => {
      const { setAttributes, attributes } = props;
      const { link, title, font_size } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div className={`custom-container`}>
          <p className="block-title">Media - Slider</p>
          <CustomRichText
            components={[
              {
                reference: "title",
                value: title,
                tagName: "h2",
                classes: ["h2"],
                settings: [],
                placeholder: "Provide a Carousel title (optional)",
              },
              {
                reference: "link",
                value: link,
                tagName: "p",
                classes: ["paragraph"],
                settings: [],
                placeholder: "Provide a Carousel View All link (optional)",
              },
            ]}
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
          />
          {save ? (
            <InnerBlocks.Content />
          ) : (
            <InnerBlocks allowedBlocks={[`${namespace}/select-research-blogs`, `${namespace}/select-news`, `${namespace}/news-slide`]} />
          )}
        </div>,
      ];
    },
    save: () => {
      const { link, title } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
