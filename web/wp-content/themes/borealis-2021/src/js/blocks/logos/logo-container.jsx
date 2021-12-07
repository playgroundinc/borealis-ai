import { namespace } from '../helper-functions/constants';

import CustomRichText from '../reusable/custom-richtext-component.jsx';
import BlockSettings from "../reusable/block-custom-settings.jsx";

export default function trmcLogoContainerBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "logos-container";
	const blockTitle = "Logo Parade";
	const blockDescription = "Creates a container for logos parade.";
	const blockCategory = "containers";
    const blockIcon = "awards"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        bg_color: {
            type: 'String',
            default: 'white'
        },
        description: {
            type: 'String',
            default: '',
        },
        title: {
            type: 'String',
            default: '',
        }
    }

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes,
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;
        const { bg_color, description, title } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className={`custom-container block--${bg_color} }` }>
                    <p className="block-title">Logo Parade</p>
                    <BlockSettings 
                        controls={[   
                            {
                                type: 'select',
                                label: 'Background Color',
                                reference: 'bg_color',
                                value: bg_color,
                                options: [
                                    { value: 'white', label: 'White'},
                                    { value: 'grey', label: 'Grey' }
                                ]
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    <CustomRichText 
                        components={[
                            {
                                reference: 'title',
                                value: title,
                                tagName: 'h2',
                                classes: ['heading_one'],
                                placeholder: 'Logos title here',
                            },
                            {
                                reference: 'description',
                                value: description,
                                tagName: 'p',
                                classes: ['paragraph'],
                                placeholder: 'Add a description'
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    <div className="col--4">
                        {save ? (
                            <InnerBlocks.Content />
                        ) : (
                            <InnerBlocks
                                allowedBlocks={[`${namespace}/logo`]}
                                template={[[`${namespace}/logo`]]}
                            />
                        )}
                    </div>
                </div>, 
            ];
		},
		save: () => {
			return <InnerBlocks.Content />;
		},
	});
}