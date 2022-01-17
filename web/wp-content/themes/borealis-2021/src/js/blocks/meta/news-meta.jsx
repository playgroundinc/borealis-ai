import { namespace } from '../helper-functions/constants';
import defaultAttrs from '../helper-functions/default-attrs';
import CustomRichText from '../reusable/custom-richtext-component.jsx';
import CustomImageUpload from '../reusable/custom-image-upload.jsx';


export default function newsMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl } = wp.components;
    const {
        Inserter
    } = wp.blockEditor;

    const meta_fields = [
        'publication_date',
        'description',
        'source_publication',
        'authors',
        'external_link',
        'image_url',
        'image_alt',
        'image_id',
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');

	registerBlockType(`${namespace}/news-meta-block`, {
		title: 'News Meta',
		icon: 'align-full-width',
        category: 'common',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {
			const { setAttributes, attributes } = props;
			const { publication_date, description, source_publication, authors, external_link, image_url, image_id, image_alt } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return ([
				null,
				<div className="custom-component">
                    <p className="block-title">News Meta</p>
                    <div className="page-settings__controls">
                        <div className="mt-xs-3">
                            <TextControl
                                value={publication_date}
                                onChange={(value) => { updateAttributeValue('publication_date', value) }}
                                label="Publication date (YYYY/MM/DD):"
                            />
                            <CustomRichText 
                                components={[
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
                            <TextControl
                                value={source_publication}
                                onChange={(value) => { updateAttributeValue('source_publication', value) }}
                                label="Source publication:"
                            />
                            <TextControl
                                value={authors}
                                onChange={(value) => { updateAttributeValue('authors', value) }}
                                label="Author(s):"
                                placeholder="Please separate authors with a comma"
                            />
                              <TextControl
                                value={external_link}
                                onChange={(value) => { updateAttributeValue('external_link', value) }}
                                label="External link:"
                            />
                            <CustomImageUpload
                                components={[
                                    {
                                        value: image_url,
                                        reference: 'image_url',
                                        altValue: image_alt,
                                        altReference: 'image_alt',
                                        idValue: image_id,
                                        idReference: 'image_id',
                                        buttonText: 'Add Image',
                                        imageClasses: ['image-text__image']
                                    }
                                ]}
                                onChange={(attribute, change) => { updateAttributeValue(attribute, change) }}
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