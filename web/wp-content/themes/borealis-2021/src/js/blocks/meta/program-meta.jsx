import { namespace } from '../helper-functions/constants';
import defaultAttrs from '../helper-functions/default-attrs';
import CustomVideoUpload from '../reusable/custom-video-upload.jsx';

export default function programMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl, ToggleControl } = wp.components;

    const meta_fields = [
        'applications_open',
        'video_id',
        'applications_closed_copy',
        'hero_video_id',
        'hero_video_url',
        'hero_video_alt',
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');
    attributes['applications_open']['type'] = 'Boolean';
    attributes['applications_open']['default'] = false;

	registerBlockType(`${namespace}/program-meta-block`, {
		title: 'Program Meta',
		icon: 'align-full-width',
        category: 'meta',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {
			const { setAttributes, attributes } = props;
			const { applications_open, applications_closed_copy, hero_video_id, hero_video_url, hero_video_alt } = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

			return ([
				null,
				<div className="custom-component">
                    <p className="block-title">Program Meta</p>
                    <div className="page-settings__controls">
                        <div className="mt-xs-3">
                            <div>
                                <p>Video for header</p>
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
                            <p>Are applications open?</p>
                            <ToggleControl
                                checked={applications_open}
                                onChange={(value) => { console.log(value); updateAttributeValue('applications_open', value) }}
                                label="Yes or No?"
                            />
                            { 
                                !applications_open && 
                                <div style={{ marginTop: '16px'}}>
                                    <TextControl
                                        value={ applications_closed_copy }
                                        onChange={(value) => { updateAttributeValue('applications_closed_copy', value) }}
                                        label="Applications Closed Copy:"
                                    />
                                </div>
                            }
                            
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