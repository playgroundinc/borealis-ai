import { namespace } from '../helper-functions/constants';

import CustomRichText from '../reusable/custom-richtext-component.jsx';

import defaultAttrs from '../helper-functions/default-attrs';

export default function pgNewsSlideBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "news-slide";
	const blockTitle = "News Slide";
	const blockDescription = "Creates a slide for an external news source.";
	const blockCategory = "rows";
    const blockIcon = "external"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttrs = [
        'link',
        'title',
        'source'
    ];
    const attributes = defaultAttrs(stringAttrs);

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes,
        parent: [`${namespace}/carousel`],
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;
        const { link, title, source } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className={`custom-container` }>
                    <p className="block-title">News Slide</p>
                    <CustomRichText 
                        components={[
                            {
                                reference: 'title',
                                value: title,
                                tagName: 'h3',
                                classes: ['h3'],
                                settings: [],
                                placeholder: 'Provide the title for the news item (required)',
                            },
                            {
                                reference: 'link',
                                value: link,
                                tagName: 'p',
                                classes: ['paragraph'],
                                settings: [],
                                placeholder: 'Provide a link to the news item (required)',
                            },
                            {
                                reference: 'source',
                                value: source,
                                tagName: 'p',
                                classes: ['paragraph'],
                                settings: [],
                                placeholder: 'Provide the name for the news source (optional)',
                            }
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                </div>, 
            ];
		},
		save: () => {
            const { link, title, source } = attributes;
			return <InnerBlocks.Content />;
		},
	});
}