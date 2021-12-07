// Helpers
import { namespace } from './helper-functions/constants';

import BlockSettings from './reusable/block-custom-settings.jsx';


export default function formStackEmbedBlock() {
	const { registerBlockType } = wp.blocks;
	const { i18n } = wp;

	const blockSlug = "formstack-form";
	const blockTitle = "Formstack Form Embed";
	const blockDescription = "Component to embed a FormStack form.";
	const blockCategory = "forms";
    const blockIcon = "clipboard"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
		attributes: {
            formstack_url: {
                type: String,
                default: '',
            },
        },
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { formstack_url } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-form">
                    <p class="block-title">Formstack Form Embed</p>
                    <p>Please provide the form script url from FormStack in the block settings.</p>
                    <BlockSettings 
                        title="Form Settings"
                        controls={[
                            {
                                label: "Formstack URL",
                                type: 'text',
                                value: formstack_url,
                                reference: 'formstack_url',
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    /> 
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { formstack_url } = attributes;
			return null;
		},
	});
}
