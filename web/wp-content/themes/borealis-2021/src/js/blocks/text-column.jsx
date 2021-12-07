// Helpers
import { namespace } from './helper-functions/constants';
import defaultAttrs from './helper-functions/default-attrs';

import CustomRichText from "./reusable/custom-richtext-component.jsx";

export default function textColumnBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
	const { i18n } = wp;

	const blockSlug = "text-2up";
	const blockTitle = "Text 2-up";
	const blockDescription = "Two columns with headline on left and copy on the right.";
	const blockCategory = "common";
    const blockIcon = "table-col-after"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttributes = [ 'title' ];
    const attributes = defaultAttrs(stringAttributes);

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
		attributes,
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;
			const { title } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return [
                <div>
                    <div className={`row`}>
                        <div className="col-md-6">
                            <CustomRichText 
                                components={[
                                    {
                                        value: title,
                                        reference: 'title',
                                        tagName: 'h2',
                                        placeholder: 'Start writing title...',
                                        classes: ['heading-one'],
                                    }
                                ]}
                                onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                            />
                        </div>
                        <div className="col-md-6">
                            {save ? (
                                <InnerBlocks.Content />
                            ) : (
                                <InnerBlocks
                                    template={[['core/paragraph']]}
                                    allowedBlocks={['core/paragraph', 'core/button']}
                            />
                            )}
                        </div> 
                    </div>		
                </div>,
            ];
		},
		save: ({ attributes }) => {
			const { title } = attributes;
			return <InnerBlocks.Content />;
		},
	});
}