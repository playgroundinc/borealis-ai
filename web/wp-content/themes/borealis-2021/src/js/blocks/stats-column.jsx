import { namespace } from './helper-functions/constants';

import CustomRichText from './reusable/custom-richtext-component.jsx';

export default function trmcStatsColumnBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "stat-column";
	const blockTitle = "Statistic";
	const blockDescription = "Creates a single statistic.";
	const blockCategory = "common";
    const blockIcon = "layout"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        statistic: {
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
        parent: [`${namespace}/stats-container`],
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;
        const { description, statistic } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className="custom-child">
                    <p className="block-title">Statistic</p>
                    <CustomRichText 
                        components={[
                            {
                                reference: 'statistic',
                                value: statistic,
                                tagName: 'h3',
                                classes: ['heading_two'],
                                placeholder: 'Add statistic',
                            },
                            {
                                reference: 'description',
                                value: description,
                                tagName: 'p',
                                classes: ['paragraph'],
                                placeholder: 'Add description',
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                </div>, 
            ];
		},
		save: () => {
            const { description, statistic} = attributes;
			return <InnerBlocks.Content />;
		},
	});
}