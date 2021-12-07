{/* 

ABOUT
Custom Image Upload is a custom component that extends the built in MediaUpload component for easier customization across the site. 

PROPS 
    components
        An array of objects. Each object is a single Media Upload component with associated button with the following fields:
        - buttonText : The text to be displayed on the upload Button
        - value : The imageUrl for the specific image.
        - reference : The name of the image url attribute on the parent component.
        - altValue : A reference to the image url attribute on the parent component.
        - reference : The name of the alt value attribute on the parent component.
        - idValue : A reference to the image id attribute on the parent.
        - reference : The name of the image id attribute on the parent component.
        - imageClasses (optional) : An array of classes to be passed to the div containing the image. 
        - buttonClasses (optional) : An array of classes to be passed to the upload image button.

    onChange
        A function to update the attribute on the parent on changes in the child. 
        Feel free to use the example below, as long as updateAttributeValue is defined on the parent.  
    
        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }

EXAMPLE

    <CustomImageUpload
        components={[
            {
                value: imageUrl,
                reference: 'imageUrl',
                altValue: imageAlt,
                altReference: 'imageAlt',
                idValue: imageId,
                idReference: 'imageId',
                buttonText: 'Add an Icon',
            },
        ]}
        onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
    />

*/}

import customErrors from '../helper-functions/custom-error';

export default function CustomImageUpload(props) {
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
        values.type = 'Custom Image'
        customErrors(values, requiredFields);
    }
    const checkRequiredImageAttributes = (props) => {
        const requiredFields = ['reference', 'value', 'altValue', 'altReference', 'idReference', 'idValue', 'buttonText']
        const values = props;
        values.type = 'Custom Image';
        customErrors(values, requiredFields);
    }
    checkRequiredValues(props);
    const { components, onChange } = props;

    const clearImage = () => {
    
}

    const getImageButton = (openEvent, component) => {
        if( component.value ) {
            return (
                <div>
                    <div className={component.imageClasses && Array.isArray(component.imageClasses) ? component.imageClasses.join(' ') : 'image' } >
                        <img 
                            src={ component.value }
                            onClick={ openEvent }
                            alt={component.altValue ? component.altValue : ''}
                        />
                    </div>
                    <div className="button-container">
                        <Button 
                            onClick={ function() { onChange(component.altReference, ''); onChange(component.reference, ''); onChange(component.idReference, '');} }
                            className={component.buttonClasses && Array.isArray(component.buttonClasses) ? component.buttonClasses.join(' ') : 'button button-large' }
                        >
                            { i18n.__('Remove Image') }
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
                    checkRequiredImageAttributes(component);
                    return (
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ media => { onChange(component.altReference, media.alt); onChange(component.reference, media.url); onChange(component.idReference, Number(media.id)); } }
                                type="image"
                                value={ component.value }
                                render={ ({ open }) => getImageButton(open, component) }
                            />
                        </MediaUploadCheck>
                    )
                })
            }
        </Fragment>
    )
}