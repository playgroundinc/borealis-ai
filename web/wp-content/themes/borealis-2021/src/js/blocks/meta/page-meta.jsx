import { namespace } from '../helper-functions/constants';

import defaultAttrs from '../helper-functions/default-attrs';

import CustomVideoUpload from "../reusable/custom-video-upload.jsx";

export default function pageMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl, TextareaControl, RadioControl, SelectControl, ToggleControl, Button  } = wp.components;
    const {
        Inserter
    } = wp.blockEditor;

    const meta_fields = [
        'hero_style',
        'hero_background_color',
        'headline',
        'hero_cta_one_link',
        'hero_cta_one_text',
        'hero_cta_two_link',
        'hero_cta_two_text',
        'hero_video_id',
        'hero_video_url',
        'hero_video_alt',
        'gradient_background'
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');
    attributes['hero_style']['default'] = 'square';
    attributes['hero_background_color']['default'] = 'grey';
    attributes['gradient_background']['default'] = 'false';

	registerBlockType(`${namespace}/page-meta-block`, {
		title: 'Page Meta',
		icon: 'align-full-width',
        category: 'common',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {

            const className = `${props.className} meta-block`;
			const { setAttributes, attributes } = props;
			const { 
                gradient_background, 
                hero_style, 
                hero_background_color, 
                headline, 
                hero_cta_one_link, 
                hero_cta_one_text, 
                hero_cta_two_link, 
                hero_cta_two_text, 
                hero_video_url, 
                hero_video_id, 
                hero_video_alt 
            } = attributes;
			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }
            function getImageButton(openEvent, label) {
                {
                    return (
                        <div className="components-base-control">
                            <Button 
                                onClick={ openEvent }
                                className='button button-large'
                            >
                                {label}
                            </Button>
                        </div>
                    );
                }
                
            };
			return ([
				null,
				<div className={className}>
                    <div className="page-settings__controls">
                        <h4>Header Settings</h4>
                        { hero_style === 'slanted' ? 
                            <p class="paragraph--core copy--italic">Image needs to be added as "Featured Image" in sidebar.</p>
                        :
                            null
                        }
                        <p class="paragraph--core copy--italic mb-xs-3">An excerpt can be added in the sidebar (optional).</p>
                        <RadioControl 
                            value={hero_style}
                            onChange={(value) => { updateAttributeValue('hero_style', value) }}
                            label="Header Style:"
                            selected={hero_style ? hero_style : 'square'}
                            options={[
                                { label: "Square", value: "square" },
                                { label: "Slanted", value: "slanted" },
                                { label: "Video", value: "video" }
                            ]}
                        />
                        <div className="mt-xs-3">
                            <SelectControl 
                                value={hero_background_color }
                                onChange={(value) => { updateAttributeValue('hero_background_color', value) }}
                                label="Background Color:"
                                options={[
                                    { label: 'Grey', value: 'grey' },
                                    { label: 'Red', value: 'red' },
                                    { label: 'Black', value: 'black' },
                                ]}
                            /> 
                        </div>
                        {
                            hero_style === 'video' ? 
                                <div className="mt-xs-3">
                                    <CustomVideoUpload 
                                        components={[
                                            {
                                                value: hero_video_url,
                                                reference: 'hero_video_url',
                                                altValue: hero_video_alt,
                                                altReference: 'hero_video_alt',
                                                idValue: hero_video_id,
                                                idReference: 'hero_video_id',
                                                buttonText: 'Add a video',
                                            },
                                        ]}
                                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                                    />
                                </div>
                            : 
                            null
                        }
                        <div className="mv-xs-2">
                            <ToggleControl
                                label="Add gradient grey background to page?"
                                checked={ gradient_background === 'true' }
                                onChange={(change) => updateAttributeValue( 'gradient_background', `${change === true}`)}
                            />
                        </div>
                        <TextareaControl
                            value={headline}
                            onChange={(value) => { updateAttributeValue('headline', value) }}
                            label="Headline:"
                        />
                        
                        <TextControl
                            value={hero_cta_one_text}
                            onChange={(value) => { updateAttributeValue('hero_cta_one_text', value) }}
                            label="First Button Text (optional):"
                        />
                        <TextControl
                            value={hero_cta_one_link}
                            onChange={(value) => { updateAttributeValue('hero_cta_one_link', value) }}
                            label="First Button Link (optional):"
                        />
                        <TextControl
                            value={hero_cta_two_text}
                            onChange={(value) => { updateAttributeValue('hero_cta_two_text', value) }}
                            label="Second Button Text (optional):"
                        />
                        <TextControl
                            value={hero_cta_two_link}
                            onChange={(value) => { updateAttributeValue('hero_cta_two_link', value) }}
                            label="Second Button Link (optional):"
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

