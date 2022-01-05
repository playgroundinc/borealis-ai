import { namespace } from '../helper-functions/constants';

import defaultAttrs from '../helper-functions/default-attrs';

export default function researchBlogMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl } = wp.components;
    const {
        Inserter
    } = wp.blockEditor;

    const meta_fields = [
        'publication_date',
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');

	registerBlockType(`${namespace}/research-blog-meta-block`, {
		title: 'Research Blogs Meta',
		icon: 'align-full-width',
        category: 'common',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {
			const { setAttributes, attributes } = props;
			const { publication_date } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return ([
				null,
				<div className="custom-component">
                    <p className="block-title">Research Blog Meta</p>
                    <div className="page-settings__controls">
                        <div className="mt-xs-3">
                            <TextControl
                                value={publication_date}
                                onChange={(value) => { updateAttributeValue('publication_date', value) }}
                                label="Publication Date (YYYY/MM/DD):"
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
