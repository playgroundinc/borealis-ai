import { namespace } from '../helper-functions/constants';

import CustomImageUpload from '../reusable/custom-image-upload.jsx';
import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function trmcMilestoneBlock() {
	const { registerBlockType } = wp.blocks;
	const {
		InnerBlocks,
    } = wp.blockEditor;
    const { i18n } = wp;

	const blockSlug = "milestone";
	const blockTitle = "Milestone";
	const blockDescription = "Creates a single milestone.";
	const blockCategory = "common";
    const blockIcon = "admin-post"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

	registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
        attributes: {
            year: {
                type: 'String',
                default: '',
            },
            image_id: {
                type: 'Number',
                default: 0,
            },
            image_alt: {
                type: 'String',
                default: ''
            },
            image_url: {
                type: 'String',
                default: ''
            }
        },
        parent: [`${namespace}/timeline-container`],
		edit: (props, editor = false, save = false ) => {
        const { setAttributes, attributes } = props;
        const { image_id, image_alt, image_url, year } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
			}

			return [
                <div className={`custom-child` }>
                    <p className="block-title">Milestone</p>
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
                    <p style={{ fontSize: '1.4rem', fontStyle: 'italic'}}>NOTE: Images will be cropped to a square and centered.</p>
                    <CustomRichText 
                        components={[
                            {
                                reference: 'year',
                                value: year,
                                tagName: 'h2',
                                classes: ['heading_two'],
                                placeholder: 'Add the year for this milestone',
                            },
                        ]}
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                    />
                    {save ? (
                        <InnerBlocks.Content />
                    ) : (
                        <InnerBlocks
                            allowedBlocks={[`${namespace}/paragraph-no-alignment`]}
                        />
                    )}
                </div>, 
            ];
		},
		save: () => {
			return <InnerBlocks.Content />;
		},
	});
}