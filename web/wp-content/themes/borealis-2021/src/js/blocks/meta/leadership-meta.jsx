import { namespace } from '../helper-functions/constants';
import defaultAttrs from '../helper-functions/default-attrs';
import CustomRichText from '../reusable/custom-richtext-component.jsx';
import CustomImageUpload from '../reusable/custom-image-upload.jsx';


export default function leadershipMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl } = wp.components;
    const {
        Inserter
    } = wp.blockEditor;

    const meta_fields = [
        'name',
        'position',
        'education',
        'copy',
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');

	registerBlockType(`${namespace}/leadership-meta-block`, {
		title: 'Leadership Meta',
		icon: 'align-full-width',
        category: 'common',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {
			const { setAttributes, attributes } = props;
			const { name, position, education, copy } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return ([
				null,
				<div className="custom-component">
                    <p className="block-title">Leadership Meta</p>
                    <div className="page-settings__controls">
                        <div className="mt-xs-3">
                            <TextControl
                                value={name}
                                onChange={(value) => { updateAttributeValue('name', value) }}
                                label="Name:"
                            />
                            <TextControl
                                value={position}
                                onChange={(value) => { updateAttributeValue('position', value) }}
                                label="Position:"
                            />
                            <TextControl
                                value={education}
                                onChange={(value) => { updateAttributeValue('education', value) }}
                                label="Education:"
                            />
                            <CustomRichText 
                                components={[
                                    {
                                        reference: 'copy',
                                        value: copy,
                                        tagName: 'p',
                                        classes: ['paragraph'],
                                        placeholder: 'Add copy',
                                    }
                                ]}
                                onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
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