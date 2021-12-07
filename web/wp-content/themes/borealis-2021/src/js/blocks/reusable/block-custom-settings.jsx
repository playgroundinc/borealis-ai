{/* 

ABOUT
Block Settings is a custom simple component to easily add a side panel with settings to any custom Gutenberg Block

PROPS 
    title 
        The title for the panel in the sidebar.

    controls
        An array of objects. Each object is a single setting with the following fields. 
        - type : Can be 'radio', 'select', or 'text'
        - label : The label for the controls (will be passed through an i18n function)
        - options : An array of objects, each with a "label" and "value" field (only for selects and radios).
        - reference : The name of the attribute it controls
        - value : The value of the attribute

    onChange
        A function to update the attribute on the parent on changes in the child. Feel free to use the example below, as long as updateAttributeValue is defined on the parent.  
    
        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }

    EXAMPLE 
    Needs to be imported before top of export function. 

    <BlockSettings
        title="Block Settings"
        controls={[
            { 
                type: 'radio',
                label: 'Number of Columns',
                options: [
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                    { value: '4', label: '4' },
                ],
                reference: 'columns',
                value: columns,
            },
            { 
                type: 'radio',
                label: 'Column Style',
                options: [
                    { value: 'icon', label: 'With icon' },
                    { value: 'no-icon', label: 'Without icon' },
                ],
                reference: 'columnStyle',
                value: columnStyle,
            }
        ]}
        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
    />
    
*/}

// Created a custom errors function allow for clearer feedback.
import customErrors from '../helper-functions/custom-error.js';

export default function BlockSettings(props) {
    const {
        InspectorControls,
        MediaUpload
    } = wp.blockEditor;
    const {
        PanelBody,
        PanelRow,
        RadioControl,
        RangeControl,
        SelectControl,
        TextControl,
        ToggleControl,
        CheckboxControl,
        Button
    } = wp.components;
    const { i18n } = wp;
    const { title, controls, onChange } = props;


    const getImageButton = (openEvent, label) => {
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
    };
    let requiredFields;
    return (
        <div>
            <InspectorControls>
                <PanelBody
                    title = {i18n.__(title)} 
                >
                    <PanelRow>
                        {controls.map((control) => {
                            switch(control.type) {
                                case 'radio': 
                                    requiredFields = ['label', 'value', 'options', 'reference'];
                                    customErrors(control, requiredFields);
                                    return (
                                        <RadioControl
                                            label={ i18n.__( `${control.label}` ) }
                                            selected={control.value}
                                            options={ control.options } 
                                            onChange={(change) => onChange( control.reference, change)}
                                        />
                                    )
                                case 'range':
                                    requiredFields = ['label', 'value', 'reference', 'min', 'max'];
                                    customErrors(control, requiredFields);
                                    return (
                                        <RangeControl
                                            label={control.label}
                                            value={control.value}
                                            onChange={(change) => onChange(control.reference, change)}
                                            min={control.min}
                                            max={control.max}
                                            initalPosition={control.min}
                                        />
                                    )
                                case 'select':
                                    requiredFields = ['label', 'value', 'options', 'reference'];
                                    customErrors(control, requiredFields);
                                    return (
                                        <SelectControl
                                            label={ i18n.__( `${control.label}` ) }
                                            value={control.value}
                                            options={ control.options } 
                                            onChange={(change) => onChange( control.reference, change)}
                                        />
                                    )
                                case 'text': 
                                    requiredFields = ['label', 'value', 'reference'];
                                    customErrors(control, requiredFields);
                                    return (
                                        <TextControl
                                            label={ i18n.__( `${control.label}` ) }
                                            value={ control.value }
                                            onChange={(change) => onChange( control.reference, change)}
                                        />   
                                    )
                                case 'toggle': 
                                    requiredFields = ['label', 'value', 'reference'];
                                    customErrors(control, requiredFields);
                                    return (
                                        <ToggleControl
                                        label={ i18n.__( `${control.label}` ) }
                                        checked={control.value}
                                        onChange={(change) => onChange( control.reference, change)}
                                        />
                                    )
                                case 'image': 
                                    requiredFields = ['label', 'image_id', 'id_reference', 'image_url', 'url_reference', 'image_alt', 'alt_reference' ];
                                    customErrors(control, requiredFields);
                                    return (
                                        <MediaUpload
                                            onSelect={ media => { onChange(control.alt_reference, media.alt); onChange(control.id_reference, media.id.toString()); onChange(control.url_reference, media.url); } }
                                            type="image"
                                            value={ control.image_id }
                                            render={ ({ open }) => getImageButton(open, control.label ) }
                                        />
                                    )
        
                                case 'file': 
                                    requiredFields = ['label', 'id_value', 'id_reference', 'url_value', 'url_reference', 'name_value', 'name_reference' ];
                                    customErrors(control, requiredFields);
                                    return (
                                        <MediaUpload
                                            onSelect={ file => { onChange(control.url_reference, file.url); onChange(control.id_reference, file.id); onChange(control.name_reference, file.filename); } }
                                            type="image"
                                            value={ control.file_id }
                                            render={ ({ open }) => getImageButton(open, control.label ) }
                                        />

                                        )
                                case 'checkbox':
                                    requiredFields = ['label', 'value', 'reference' ];
                                    customErrors(control, requiredFields);
                                    return (
                                    <CheckboxControl
                                        label={ control.label }
                                        checked={ control.value }
                                        onChange={ (change) => onChange(control.reference, change ) }
                                    />
                                )
                                default: 
                                return `Control type either not set or invalid for ${control.label}`;
                            } 
                        })}
                    </PanelRow>
                </PanelBody>    
            </InspectorControls>
        </div>
    )
}