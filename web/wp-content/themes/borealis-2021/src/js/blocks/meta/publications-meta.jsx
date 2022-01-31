import { namespace } from '../helper-functions/constants';

import SelectAuthors from '../reusable/select-authors.jsx';

import defaultAttrs from '../helper-functions/default-attrs';

export default function publicationMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl } = wp.components;
    const meta_fields = [
        'authors',
        'abstract',
        'code',            
        'paper',
        'blog',
        'publication_date',            
        'time_to_read',            
        'citation', 
        'citation_link'
    ]
    const attributes = defaultAttrs(meta_fields, 'meta');

	registerBlockType(`${namespace}/publications-meta-block`, {
		title: 'Publications Meta',
		icon: 'align-full-width',
        category: 'common',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {
			const { setAttributes, attributes } = props;
			const { 
                authors,
                abstract,
                code,            
                paper,
                blog,
                publication_date,            
                time_to_read,            
                citation, 
                citation_link 
            } = attributes;
            
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
                            <TextControl
                                value={abstract}
                                onChange={(value) => { updateAttributeValue('abstract', value) }}
                                label="Abstract:"
                            />
                            <TextControl
                                value={code}
                                onChange={(value) => { updateAttributeValue('code', value) }}
                                label="Code:"
                            />
                            <TextControl
                                value={paper}
                                onChange={(value) => { updateAttributeValue('paper', value) }}
                                label="Paper:"
                            />
                            <TextControl
                                value={blog}
                                onChange={(value) => { updateAttributeValue('blog', value) }}
                                label="Blog:"
                            />
                             <TextControl
                                value={time_to_read}
                                onChange={(value) => { updateAttributeValue('time_to_read', value) }}
                                label="Time to Read:"
                            />
                            <TextControl
                                value={citation}
                                onChange={(value) => { updateAttributeValue('citation', value) }}
                                label="Citation:"
                            />
                            <TextControl
                                value={citation_link}
                                onChange={(value) => { updateAttributeValue('citation_link', value) }}
                                label="Citation Link:"
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
