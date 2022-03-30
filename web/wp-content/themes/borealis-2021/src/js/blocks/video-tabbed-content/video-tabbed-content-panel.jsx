import { namespace } from "../helper-functions/constants";
import CustomRichText from "../reusable/custom-richtext-component.jsx";
// import CustomImageUpload from "../reusable/custom-image-upload.jsx";

export default function videoTabbedContentPanelBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { i18n } = wp;
  const { InnerBlocks } = wp.blockEditor;
  const blockSlug = "video-tabbed-content-panel-block"; // slug for the block
  const blockTitle = "Video tabbed content panel block";
  const blockDescription = "Component to create a video tabbed content panel block";
  const blockCategory = "rows";
  const blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

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
    parent: [`${namespace}/video-tabbed-content-container-block`],
    edit: (props, editor = false, save = false) => {
      const { attributes, setAttributes } = props;
      const { title, cta_one_link, cta_one_text, cta_two_link, cta_two_text, copy } = attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes({ [attribute]: value });
      }

      return [
        <div class="tabbed-content-panel__block custom-container">
          <p class="block-title">Video Tabbed Content Panel</p>
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
          {save ? <InnerBlocks.Content /> : <InnerBlocks allowedBlocks={[`${namespace}/custom-video`]} />}
        </div>,
      ];
    },
    save: ({ attributes }) => {
      const { title, cta_one_link, cta_one_text, cta_two_link, cta_two_text, copy } = attributes;
      return <InnerBlocks.Content />;
    },
  });
}
