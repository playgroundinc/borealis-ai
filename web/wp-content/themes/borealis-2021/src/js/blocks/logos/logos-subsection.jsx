import { namespace } from '../helper-functions/constants';

import CustomRichText from '../reusable/custom-richtext-component.jsx';
import BlockSettings from "../reusable/block-custom-settings.jsx";

export default function pgLogoSubsectionBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "logos-subsection";
	const blockTitle = "Logo Parade Subsection";
	const blockDescription = "Creates a subsection for logos parade.";
	const blockCategory = "containers";
    const blockIcon = "awards"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        title: {
            type: 'String',
            default: '',
        }
    }

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes,
        parent: [`${namespace}/logos-container`],
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;
        const { title } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className="custom-child">
                    <p className="block-title">Logo Parade Subsection</p>
                    <CustomRichText 
                        components={[
                            {
                                reference: 'title',
                                value: title,
                                tagName: 'h3',
                                settings: [],
                                classes: ['paragraph'],
                                placeholder: 'Logo parade subsection title here (optional)',
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    <div className="col--4">
                        {save ? (
                            <InnerBlocks.Content />
                        ) : (
                            <InnerBlocks
                                allowedBlocks={[`${namespace}/logo`]}
                                template={[[`${namespace}/logo`]]}
                            />
                        )}
                    </div>
                </div>, 
            ];
		},
		save: () => {
			return <InnerBlocks.Content />;
		},
	});
}