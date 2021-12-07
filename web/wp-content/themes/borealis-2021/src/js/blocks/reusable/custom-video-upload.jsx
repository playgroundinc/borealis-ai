{/* 

ABOUT
Custom Video Upload is a custom component that extends the built in MediaUpload component for easier customization across the site. 

PROPS 
    components
        An array of objects. Each object is a single Media Upload component with associated button with the following fields:
        - buttonText : The text to be displayed on the upload Button
        - value : The videoUrl for the specific video.
        - reference : The name of the video url attribute on the parent component.
        - altValue : A reference to the video url attribute on the parent component.
        - reference : The name of the alt value attribute on the parent component.
        - idValue : A reference to the video id attribute on the parent.
        - reference : The name of the video id attribute on the parent component.
        - videoClasses (optional) : An array of classes to be passed to the div containing the video. 
        - buttonClasses (optional) : An array of classes to be passed to the upload video button.

    onChange
        A function to update the attribute on the parent on changes in the child. 
        Feel free to use the example below, as long as updateAttributeValue is defined on the parent.  
    
        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }

EXAMPLE

    <CustomVideoUpload
        components={[
            {
                value: videoUrl,
                reference: 'videoUrl',
                altValue: videoAlt,
                altReference: 'videoAlt',
                idValue: videoId,
                idReference: 'videoId',
                buttonText: 'Add an Icon',
            },
        ]}
        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
    />

*/}

import customErrors from '../helper-functions/custom-error';

export default function CustomVideoUpload(props) {
    const {
        MediaUpload,
        MediaUploadCheck
    } = wp.blockEditor;
    const {
        Button
    } = wp.components;
    const {
        Fragment
    } = wp.element;
    const { i18n } = wp;
    const checkRequiredValues = (props) => {
        const requiredFields = ['components', 'onChange'];
        const values =  props;
        values.type = 'Custom Video'
        customErrors(values, requiredFields);
    }
    const checkRequiredVideoAttributes = (props) => {
        const requiredFields = ['reference', 'value', 'altValue', 'altReference', 'idReference', 'idValue', 'buttonText']
        const values = props;
        values.type = 'Custom Video';
        customErrors(values, requiredFields);
    }
    checkRequiredValues(props);
    const { components, onChange } = props;

    const clearVideo = () => {
    
}

    const getVideoButton = (openEvent, component) => {
        if( component.value ) {
            return (
                <div>
                    <div className={component.videoClasses && Array.isArray(component.videoClasses) ? component.videoClasses.join(' ') : 'video' } >
                        <video
                            onClick={ openEvent }
                            alt={component.altValue ? component.altValue : ''}
                        >
                            <source src={ component.value } />
                        </video>
                            
                            
                
                    </div>
                    <div className="button-container">
                        <Button 
                            onClick={ function() { onChange(component.altReference, ''); onChange(component.reference, ''); onChange(component.idReference, 0);} }
                            className={component.buttonClasses && Array.isArray(component.buttonClasses) ? component.buttonClasses.join(' ') : 'button button-large' }
                        >
                            { i18n.__('Remove Video') }
                        </Button>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="button-container">
                    <Button 
                        onClick={ openEvent }
                        className={component.buttonClasses && Array.isArray(component.buttonClasses) ? component.buttonClasses.join(' ') : 'button button-large' }
                    >
                        { i18n.__(component.buttonText) }
                    </Button>
                </div>
            );
        }
    };

    return (
        <Fragment>
            {
                components.map((component) => {
                    checkRequiredVideoAttributes(component);
                    return (
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ media => { onChange(component.altReference, media.alt); onChange(component.reference, media.url); onChange(component.idReference, Number(media.id)); } }
                                type="video"
                                value={ component.value }
                                render={ ({ open }) => getVideoButton(open, component) }
                            />
                        </MediaUploadCheck>
                    )
                })
            }
        </Fragment>
    )
}