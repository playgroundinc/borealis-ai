import { namespace } from '../helper-functions/constants';
import defaultAttrs from '../helper-functions/default-attrs';

export default function productMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl } = wp.components;

    const meta_fields = [
        'market',
        'description'
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');

	registerBlockType(`${namespace}/product-meta-block`, {
		title: 'Product Meta',
		icon: 'align-full-width',
        category: 'meta',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {
			const { setAttributes, attributes } = props;
			const { market, description } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return ([
				null,
				<div className="custom-component">
                    <p className="block-title">Product Meta</p>
                    <div className="page-settings__controls">
                        <div className="mt-xs-3">
                            <TextControl
                                value={ market }
                                onChange={(value) => { updateAttributeValue('market', value) }}
                                label="Market:"
                            />
                            <TextControl
                                value={ description }
                                onChange={(value) => { updateAttributeValue('description', value) }}
                                label="Description:"
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