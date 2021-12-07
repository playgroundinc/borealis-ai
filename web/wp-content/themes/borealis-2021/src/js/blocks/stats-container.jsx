import { namespace } from './helper-functions/constants';

import CustomRichText from './reusable/custom-richtext-component.jsx';

export default function trmcStatsContainerBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "stats-container";
	const blockTitle = "Stat Call Out";
	const blockDescription = "Creates a container for single statistics.";
	const blockCategory = "containers";
    const blockIcon = "chart-bar"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        title: {
            type: 'String',
            default: '',
        },
        description: {
            type: 'String',
            default: '',
        },
    }

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes,
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;
        const { description, title } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className="custom-container">
                    <p className="block-title">Stat Call Out</p>
                    <CustomRichText 
                        components={[
                            {
                                reference: 'title',
                                value: title,
                                tagName: 'h2',
                                classes: ['heading_one'],
                                placeholder: 'Add title (optional)',
                            },
                            {
                                reference: 'description',
                                value: description,
                                tagName: 'p',
                                classes: ['paragraph'],
                                placeholder: 'Add description (optional)',
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    <div className={`col--3`}>
                        {save ? (
                            <InnerBlocks.Content />
                        ) : (
                            <InnerBlocks
                                allowedBlocks={[`${namespace}/stat-column`]}
                            />
                        )}
                    </div>
                </div>, 
            ];
		},
		save: () => {
            const { description, title } = attributes;
			return <InnerBlocks.Content />;
		},
	});
}