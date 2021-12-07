import { namespace } from './helper-functions/constants';

import BlockSettings from "./reusable/block-custom-settings.jsx";
import CustomRichText from './reusable/custom-richtext-component.jsx';

import defaultAttrs from './helper-functions/default-attrs';

export default function documentContainerBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
	const { i18n } = wp;

	const blockSlug = "document-row";
	const blockTitle = "Document Row";
	const blockDescription = "Row for downloadable file.";
	const blockCategory = "common";
    const blockIcon = "format-aside"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttributes = [ 'file_url', 'file_name', 'icon', 'link_text', 'name' ];
    const attributes = defaultAttrs(stringAttributes);
    attributes['link_text']['default'] = 'Download PDF';
    attributes['icon'] = {
        type: 'boolean',
        default: true,
    };
    attributes['file_id'] = {
        type: "number",
        default: 0,
    }

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
		icon: blockIcon,
        attributes,
        parent: [`${namespace}/accordion-row`],
		edit: (props, editor = false, save = false) => {
            const { setAttributes, attributes } = props;
            const { file_url, file_id, file_name, icon, link_text, name } = attributes;
            const buttonClass = ['hyperlink'];

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
					<div>
                        <BlockSettings 
                            title="Block Settings"
                            controls={[
                                {
                                    type: 'file',
                                    label: "File",
                                    id_value: file_id,
                                    id_reference: 'file_id',
                                    url_value: file_url,
                                    url_reference: 'file_url',
                                    name_value: file_name,
                                    name_reference: 'file_name',
                                },
                                {
                                    type: 'toggle',
                                    label: 'Download Icon',
                                    value: icon,
                                    reference: 'icon',
                                }

                            ]}
                            onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        />
                        <div className={`custom-container ${ editor ? "column-container--editor" : "column-container--fe" }` }>
                            <div className="row middle-xs">
                                <div className="col-lg-9 col-md-7">
                                    <CustomRichText 
                                        components={[
                                            {
                                                value: name,
                                                reference: "name",
                                                tagName: "p",
                                                placeholder: "Please provide a file name",
                                                settings: [],
                                            },
                                        ]}
                                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                                    />
                                </div>
                                <div className="col-lg-3 col-md-5">
                                    <CustomRichText 
                                        components={[
                                            {
                                                value: link_text,
                                                reference: "link_text",
                                                tagName: "a",
                                                placeholder: "Please provide a link title",
                                                settings: [],
                                                classes: buttonClass,
                                            },
                                        ]}
                                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                                    />
                                </div>
                            </div>

                            {
                                file_name !== '' ? 
                                    <p>Current File: { file_name }</p> :
                                    <p><em>No file. Add file in sidebar.</em></p>
                            }
                            {save ? (
                                <InnerBlocks.Content />
                            ) : (
                                <InnerBlocks
                                    allowedBlocks={[]}
                                />
                            )}
                        </div>
					</div>,
			];
		},
		save: ({ attributes }) => {
			const { details, name, file_url, file_id, file_name, icon, link_text } = attributes;
			return <InnerBlocks.Content />;
		},
	});
}