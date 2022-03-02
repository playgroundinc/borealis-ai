import { namespace } from '../helper-functions/constants';
import defaultAttrs from '../helper-functions/default-attrs';

export default function authorMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl } = wp.components;

    const meta_fields = [
        'external_link',
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');

	registerBlockType(`${namespace}/author-meta-block`, {
		title: 'Author Meta',
		icon: 'align-full-width',
        category: 'meta',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {
			const { setAttributes, attributes } = props;
			const { external_link } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return ([
				null,
				<div className="custom-component">
                    <p className="block-title">Author Meta</p>
                    <div className="page-settings__controls">
                        <div className="mt-xs-3">
                            <TextControl
                                value={external_link}
                                onChange={(value) => { updateAttributeValue('external_link', value) }}
                                label="External Link:"
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