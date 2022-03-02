import { namespace } from '../helper-functions/constants';

import SelectAuthors from '../reusable/select-authors.jsx';

import defaultAttrs from '../helper-functions/default-attrs';

export default function researchBlogMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl } = wp.components;
    const meta_fields = [
        'publication_date', 
        'time_to_read',
        'authors',
        'series_order'
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');

	registerBlockType(`${namespace}/research-blogs-meta-block`, {
		title: 'Research Blogs Meta',
		icon: 'align-full-width',
        category: 'meta',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {
			const { setAttributes, attributes } = props;
			const { authors, publication_date, series_order, time_to_read } = attributes;
            
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
                                label="Publication Date (MM/DD/YYYY):"
                            />
                            <TextControl
                                value={time_to_read}
                                type="number"
                                onChange={(value) => { updateAttributeValue('time_to_read', value) }}
                                label="Time to Read:"
                            />
                            <TextControl
                                value={series_order}
                                type="number"
                                onChange={(value) => { updateAttributeValue('series_order', value) }}
                                label="Series Order:"
                            />
                            <SelectAuthors 
                                authors={authors}
                                updateAttributeValue={updateAttributeValue}
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
