import { namespace } from '../helper-functions/constants';
import defaultAttrs from '../helper-functions/default-attrs';

export default function leadershipMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl } = wp.components;

    const meta_fields = [
        'position',
        'education'
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');

	registerBlockType(`${namespace}/team-member-meta-block`, {
		title: 'Team Member Meta',
		icon: 'align-full-width',
        category: 'common',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {
			const { setAttributes, attributes } = props;
			const { position, education } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return ([
				null,
				<div className="custom-component">
                    <p className="block-title">Team Member Meta</p>
                    <div className="page-settings__controls">
                        <div className="mt-xs-3">
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