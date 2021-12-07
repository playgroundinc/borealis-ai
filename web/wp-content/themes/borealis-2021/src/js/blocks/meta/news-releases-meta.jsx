import { namespace } from '../helper-functions/constants';

import defaultAttrs from '../helper-functions/default-attrs';

export default function locationMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl } = wp.components;
    const {
        Inserter
    } = wp.blockEditor;

    const meta_fields = [
        'news_release_date',
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');

	registerBlockType(`${namespace}/news-release-meta-block`, {
		title: 'News Release Meta',
		icon: 'align-full-width',
        category: 'common',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {
			const { setAttributes, attributes } = props;
			const { news_release_date } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return ([
				null,
				<div className="custom-component">
                    <p className="block-title">New Release Meta</p>
                    <div className="page-settings__controls">
                        <div className="mt-xs-3">
                            <TextControl
                                value={news_release_date}
                                onChange={(value) => { updateAttributeValue('news_release_date', value) }}
                                label="Release Date (YYYY/MM/DD):"
                            />
                        </div>
                    </div> 
                    
                </div>
			])
		},
		// No information saved to the block
		// Data is saved to post meta via attributes
		save: function () {
			return null;
		}
	});
}

