import { namespace } from '../helper-functions/constants';

import defaultAttrs from '../helper-functions/default-attrs';

export default function pageMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl, TextareaControl, RadioControl, SelectControl, ToggleControl, Button  } = wp.components;
    const {
        Inserter
    } = wp.blockEditor;

    const meta_fields = [
        'headline',
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');

	registerBlockType(`${namespace}/page-meta-block`, {
		title: 'Page Meta',
		icon: 'align-full-width',
        category: 'meta',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {

            const className = `${props.className} meta-block`;
			const { setAttributes, attributes } = props;
			const { 
                headline, 
            } = attributes;
			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return ([
				null,
				<div className={className}>
                    <div className="page-settings__controls">
                        <h4>Header Settings</h4>
                        <TextareaControl
                            value={headline}
                            onChange={(value) => { updateAttributeValue('headline', value) }}
                            label="Headline:"
                        />
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

