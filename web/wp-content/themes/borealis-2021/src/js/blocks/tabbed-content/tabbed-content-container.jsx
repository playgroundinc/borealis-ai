import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function tabbedContentContainerBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { InnerBlocks } = wp.blockEditor;
  const { i18n } = wp;

  const blockSlug = "tabbed-content-container-block"; // slug for the block
  const blockTitle = "Tabbed Content Container Block";
  const blockDescription = "Component to create tabbed content container block";
  const blockCategory = "containers";
  const blockIcon = "block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    copy: {
      type: "String",
      default: "",
    },
    cta_one_text: {
      type: "String",
      default: "",
    },
    cta_one_link: {
      type: "String",
      default: "",
    },
    cta_two_text: {
      type: "String",
      default: "",
    },
    cta_two_link: {
      type: "String",
      default: "",
    },
    title: {
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
      const { copy, cta_one_text, cta_one_link, cta_two_text, cta_two_link, title } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div class="tabbed-content-container__block custom-section">
          <p class="block-title">Tabbed Content Container</p>
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
              },
              {
                value: copy,
                reference: "copy",
                tagName: "p",
                placeholder: "Please provide copy (optional)",
              },
              {
                value: cta_one_text,
                reference: "cta_one_text",
                tagName: "p",
                placeholder: "Please provide text for the first CTA (optional)",
              },
              {
                value: cta_one_link,
                reference: "cta_one_link",
                tagName: "p",
                placeholder: "Please provide a link for the first CTA (optional)",
              },
              {
                value: cta_two_text,
                reference: "cta_two_text",
                tagName: "p",
                placeholder: "Please provide text for the second CTA (optional)",
              },
              {
                value: cta_two_link,
                reference: "cta_two_link",
                tagName: "p",
                placeholder: "Please provide a link for the second CTA (optional)",
              },
            ]}
          />
          {save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/tabbed-content-panel-block`]} />}
        </div>,
      ];
    },
    save: ({ attributes }) => {
      const { title, copy } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
