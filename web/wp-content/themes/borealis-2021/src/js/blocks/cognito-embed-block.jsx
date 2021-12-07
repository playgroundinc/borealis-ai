// Helpers
import { namespace } from './helper-functions/constants';

import BlockSettings from './reusable/block-custom-settings.jsx';


export default function cognitoEmbedBlock() {
	const { registerBlockType } = wp.blocks;
	const { i18n } = wp;

	const blockSlug = "cognito-form";
	const blockTitle = "Cognito Form Embed";
	const blockDescription = "Component to embed a Cognito form.";
	const blockCategory = "forms";
    const blockIcon = "clipboard"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
		attributes: {
            cognito_url: {
                type: String,
                default: '',
            },
            form_id: {
                type: String,
                default: '',
            }
        },
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { form_id, cognito_url } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div class="custom-form">
                    <p class="block-title">Cognito Form Embed</p>
                    <p>Please provide the embed url and form id from Cognito forms in the block settings.</p>
                    <BlockSettings 
                        title="Form Settings"
                        controls={[
                            {
                                label: "Cognito Embed URL",
                                type: 'text',
                                value: cognito_url,
                                reference: 'cognito_url',
                            },
                            {
                                label: "Form ID",
                                type: 'text',
                                value: form_id,
                                reference: 'form_id'
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    /> 
                </div>,
			];
		},
		save: ({ attributes }) => {
			const { cognito_url, form_id } = attributes;
			return null;
		},
	});
}
