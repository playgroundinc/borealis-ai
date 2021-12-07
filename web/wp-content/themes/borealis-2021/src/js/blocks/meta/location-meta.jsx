import { namespace } from '../helper-functions/constants';

import defaultAttrs from '../helper-functions/default-attrs';

import LocationsClass from '../helper-functions/Locations';

export default function locationMetaBlock() {

    const { registerBlockType } = wp.blocks;
	const { TextControl, TextareaControl, RadioControl, SelectControl, Button  } = wp.components;
    
    const meta_fields = [
        'location_country',
        'location_address',
        'location_city',
        'location_code',
        'location_province',
        'location_lat',
        'location_lng',
        'location_phone',
        'location_fax',
        'location_hours',
    ];
    const attributes = defaultAttrs(meta_fields, 'meta');
    attributes['error'] = {
        type: 'String',
        default: '',
    };

    const Location = new LocationsClass();
    const provinces = Location.getProvinces();
    provinces.unshift({label: 'Select province', value: ''});
    const states = Location.getStates();
    states.unshift({label: 'Select state', value: ''});
    
	registerBlockType(`${namespace}/location-meta-block`, {
		title: 'Location Meta',
		icon: 'align-full-width',
        category: 'common',
        supports: {
            multiple: false,
        },
        attributes,
        edit: (props) => {
			const { setAttributes, attributes } = props;
			const { location_country, location_address, location_city, location_province, location_code, location_lat, location_lng, location_phone, location_fax, location_hours, error} = attributes;

			function updateAttributeValue(attribute, value) {
				setAttributes({ [attribute]: value });
            }

            const setLatLng = (coordinates) => {
                if (coordinates.length > 1) {
                    updateAttributeValue('location_lng', `${coordinates[0]}`);
                    updateAttributeValue('location_lat', `${coordinates[1]}`);
                } 
            }

            const apiCall = async (url) => {
                try {
                    const resp = await fetch(url, { method: 'GET', redirect: 'follow', referrer: 'no-referrer', });
                    const data = await resp.json();
                    const locations = data.features;
                    if (locations && locations.length && locations[0].geometry && locations[0].geometry.coordinates) {
                        setLatLng(locations[0].geometry.coordinates);
                    }
                } catch(err) {
                    updateAttributeValue('error', 'Something went wrong');
                }
            };

            const buildUrl = (address) => {
                const encodedAddress = encodeURI(address);
                const country = location_country ? location_country : 'CA';
                if (ajaxInfo.apiKey) {
                    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?country=${country}&access_token=${ajaxInfo.apiKey}`;
                    apiCall(url);
                }
            }

            const verifyAddress = () => {
                if  ('' === location_address || '' === location_city || '' === location_province || '' === location_code) {
                    updateAttributeValue('error', 'Please provide address, city, province/state, and postal/zip code');
                    return false;
                }
                updateAttributeValue('error', '');
                return `${location_address} ${location_city} ${location_province} ${location_code}`;
            }

            const fetchLatLng = async () => {

                const address = verifyAddress();
                if (!address) {
                    return;
                }
                buildUrl(address);
            };

			return ([
				null,
				<div className="custom-component">
                    <p className="block-title">Location Metadata</p>
                    <div className="page-settings__controls">
                        <RadioControl 
                            value={location_country}
                            onChange={(value) => { updateAttributeValue('location_province', ''); updateAttributeValue('location_country', value) }}
                            label="Country:"
                            selected={location_country ? location_country : 'CA'}
                            options={[
                                { label: "Canada", value: "CA" },
                                { label: "United States", value: "US" }
                            ]}
                        />
                        <div className="mt-xs-3">
                            <TextControl
                                value={location_address}
                                onChange={(value) => { updateAttributeValue('location_address', value) }}
                                label="Street Address:"
                            />
                            <TextControl
                                value={location_city}
                                onChange={(value) => { updateAttributeValue('location_city', value) }}
                                label="City:"
                            />
                            <SelectControl 
                                value={location_province }
                                onChange={(value) => { updateAttributeValue('location_province', value) }}
                                label={ location_country !== 'US' ? "Province/Territory:" : "State" }
                                options={ location_country !== 'US' ? provinces : states }
                            /> 
                            <TextControl
                                value={location_code}
                                onChange={(value) => { updateAttributeValue('location_code', value) }}
                                label={ location_country !== 'US' ? 'Postal Code:' : 'Zip Code'}
                            />
                            <TextControl
                                value={location_phone}
                                onChange={(value) => { updateAttributeValue('location_phone', value) }}
                                label="Phone:"
                            />
                            <TextControl
                                value={location_fax}
                                onChange={(value) => { updateAttributeValue('location_fax', value) }}
                                label="Fax:"
                            />
                            <TextareaControl
                                value={location_hours}
                                onChange={(value) => { updateAttributeValue('location_hours', value) }}
                                label="Hours:"
                            />
                            <p style={{ fontSize: '14px', paddingTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>Longitude and Latitude are generated by the MapBox Geocode API. Please ensure the MapBox API Key is set in the theme settings.</p>
                            <p style={{ fontSize: '14px', paddingTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>If you'd prefer to limit the number of calls to the MapBox API you can manually find Latitude and Longitude using <a href="https://www.latlong.net/">this tool</a> and add them manually.</p>
                            <div className="button-container copy--center">
                                <Button
                                    className="button button-large"
                                    onClick={fetchLatLng}
                                >
                                    { '' !== location_lat && '' !== location_lng ? 'Update Longitude and Latitude' : 'Generate Longitude and Latitude' }
                                </Button>
                            </div>
                            { error !== '' ? <p class="copy--center">{ error }</p> : null }
                            
                            <TextControl
                                value={location_lat}
                                onChange={(value) => { updateAttributeValue('location_lat', value) }}
                                label="Latitude"
                            />
                            <TextControl
                                value={location_lng}
                                onChange={(value) => { updateAttributeValue('location_lng', value) }}
                                label="Longitude"
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

