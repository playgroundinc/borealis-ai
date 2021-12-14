import { namespace } from "../helper-functions/constants";

import CustomRichText from '../reusable/custom-richtext-component.jsx';

export default function jobBlock() {
    const { registerBlockType } = wp.blocks;
    const { i18n } = wp;

    const blockSlug = "job-block";
	const blockTitle = "Create job block";
	const blockDescription = "Component to create job block";
	const blockCategory = "common";
    const blockIcon = "email"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        title: {
            type: 'String',
            default: '',
        },
        emptyState: {
            type: 'String',
            default: '',
        },
    }

    registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
		attributes,
        supports: {
            multiple: false,
        },
        parent: [`${namespace}/form-builder`],
		edit: (props, editor = false, save = false) => {
			const { attributes } = props;
			const { title, emptyState } = attributes;

            // const apiCall = async (url) => {
            //     try {
            //         const resp = await fetch(url, { method: 'GET', redirect: 'follow', referrer: 'no-referrer', });
            //         const data = await resp.json();
            //         const locations = data.features;
            //         if (locations && locations.length && locations[0].geometry && locations[0].geometry.coordinates) {
            //             setLatLng(locations[0].geometry.coordinates);
            //         }
            //     } catch(err) {
            //         updateAttributeValue('error', 'Something went wrong');
            //     }
            // };

            // const buildUrl = (address) => {
            //     const encodedAddress = encodeURI(address);
            //     const country = location_country ? location_country : 'CA';
            //     if (ajaxInfo.apiKey) {
            //         const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?country=${country}&access_token=${ajaxInfo.apiKey}`;
            //         apiCall(url);
            //     }
            // }

			return [
                <div class="custom-job__block">
                    <p className="block-title">Update job in block settings</p>
                    <CustomRichText 
                        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                        components={[
                            {
                                value: title,
                                reference: "label", 
                                tagName: "p",
                                placeholder: "Please provide a title"
                            },
                        ]}
                    />
                    <div>
                        <CustomRichText 
                            onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
                            components={[
                                {
                                    value: emptyState,
                                    reference: "option",
                                    tagName: "p",
                                    placeholder: "Please provide an option"
                                }
                            ]}
                        />
                    </div>    
                </div>,
			];
		},
		save: ({ attributes }) => {
            
			const { label, required, options, option } = attributes;
		},
	});
}