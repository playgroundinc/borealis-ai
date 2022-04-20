import { namespace } from "../helper-functions/constants";
import BlockSettings from "../reusable/block-custom-settings.jsx";
import CustomRichText from "../reusable/custom-richtext-component.jsx";

export default function jobBlock() {
  const { registerBlockType, createBlock } = wp.blocks;
  const { i18n } = wp;

  const blockSlug = "job-block";
  const blockTitle = "Open Roles/Jobs Block";
  const blockDescription = "Component to create job block";
  const blockCategory = "jobs";
  const blockIcon = "admin-users"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  const attributes = {
    title: {
      type: "String",
      default: "",
    },
    background_color: {
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
        <div class="custom-job__block">
          <p className="block-title">Jobs Block</p>
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
            onChange={(attribute, change) => {
              updateAttributeValue(attribute, change);
            }}
            components={[
              {
                value: title,
                reference: "title",
                tagName: "p",
                placeholder: "Please provide a title",
              },
            ]}
          />
        </div>,
      ];
    },
    save: ({ attributes }) => {
      const { title, background_color } = attributes;
    },
  });
}
