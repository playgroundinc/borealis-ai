//Helpers
import { namespace } from '../../blocks/helper-functions/constants';
import DefaultAttrs from "../../blocks/helper-functions/default-attrs.js";

// Reusable
import BlockSettings from "../../blocks/reusable/block-custom-settings.jsx";

export default function developmentRowBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
	const { i18n } = wp;

	const blockSlug = "development-column";
	const blockTitle = "Development Column Block";
	const blockDescription = "A block to be used for collaborating between development and design.";
	const blockCategory = "common";
    const blockIcon = "format-status"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const stringAttrs = ['xl', 'lg', 'md', 'sm'];
    const attributes = DefaultAttrs(stringAttrs);

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes,
        parent: [`${namespace}/development-component`],
		edit: (props, editor = false, save = false) => {
			const { setAttributes, attributes } = props;

            const { xl, lg, md, sm} = attributes;
                function updateAttributeValue(attribute, value) {
                    setAttributes({ [attribute]: value });
            }

            const options = [
                { value: '', label: 'Inherit'},
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
                { value: '5', label: '5' },
                { value: '6', label: '6' },
                { value: '7', label: '7' },
                { value: '8', label: '8' },
                { value: '9', label: '9' },
                { value: '10', label: '10' },
                { value: '11', label: '11' },
                { value: '12', label: '12' },
            ]

            return [
                <div className="development-block__column">
                        <p class="block-title"><strong>Column - </strong>You can change the width of this column in the block settings.</p>
                        <BlockSettings 
                            controls={[
                                { 
                                    type: 'select',
                                    label: 'Column Width - SM',
                                    options,
                                    reference: 'sm',
                                    value: sm,
                                },
                                { 
                                    type: 'select',
                                    label: 'Column Width - MD',
                                    options,
                                    reference: 'md',
                                    value: md,
                                },
                                { 
                                    type: 'select',
                                    label: 'Column Width - LG',
                                    options,
                                    reference: 'lg',
                                    value: lg,
                                },
                                { 
                                    type: 'select',
                                    label: 'Column Width - XL',
                                    options,
                                    reference: 'xl',
                                    value: xl,
                                },
                            ]}
                            onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        />
                        <div>
                        {save ? (   
                            <InnerBlocks.Content />
                        ) : (
                            <InnerBlocks
                                allowedBlocks={[`${namespace}/paragraph`, `${namespace}/headline`, `${namespace}/heading-one`, `${namespace}/heading-two`, `${namespace}/heading-three`, `${namespace}/heading-four`, `${namespace}/heading-five`, `${namespace}/heading-six`, `${namespace}/image`, `${namespace}/btn`, `${namespace}/caption`, `${namespace}/eyebrow`]}
                            />
                        )}
                    </div>
                </div>
            ];
        },
		save: ({ attributes }) => {
			return <InnerBlocks.Content />;
		},
	});
}