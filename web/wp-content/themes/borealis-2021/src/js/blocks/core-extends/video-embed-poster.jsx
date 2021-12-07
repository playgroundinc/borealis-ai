/**
 * Embed Wrapper.
 */

const { addFilter } = wp.hooks;
const { Fragment } = wp.element;

export default function extendCoreVideo() {
    const { __ } = wp.i18n;
    const { createHigherOrderComponent } = wp.compose;
    const { InspectorControls, MediaUpload } = wp.blockEditor;
    const { PanelBody, Button, TextControl } = wp.components;

    function customAttributes(props, name) {
        if ('core/video' !== name && 'core/embed' !== name && 'core-embed/youtube' !== name && 'core-embed/vimeo' !== name ) {
            return props;
        }
    
        const customAttributes = {
            image_id: {
                type: 'Number',
                default: 0,
            },
            image_url: {
                type: 'String',
                default: '',
            },
            image_alt: {
                type: 'String',
                default: '',
            },
            caption: {
                type: 'String',
                default: '',
            }
        }

        const attributes = {
            ...props.attributes,
            ...customAttributes,
        };

        const description = `${props.description}`;

        return {
            ...props,
            attributes,
            description,
        };
    }

    const getImageButton = (openEvent, label) => {
        return (
            <div className="button-container">
                <Button 
                    onClick={ openEvent }
                    className='button button-large'
                >
                {label}
                </Button>
            </div>
        );
    };

    const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
        return (props) => {

            if ( 'core/video' !== props.name && 'core/embed' !== props.name && 'core-embed/youtube' !== props.name && 'core-embed/vimeo' !== props.name ) {
                return <BlockEdit {...props} />;
            }

            const { attributes, setAttributes } = props;
            const { image_id, image_alt, image_url, caption } = attributes;
            const label = image_url !== '' ? 'Update Placeholder Image' : 'Add Placeholder Image';  
            function updateAttributeValue(attribute, value) {
                setAttributes({ [attribute]: value });
            }
            return [
                <Fragment>
                    <InspectorControls>
                        <PanelBody title={__('Embed Video Settings')}>
                            {
                                image_url !== '' ? 
                                <div>
                                    <p>Current Placeholder Image:</p>
                                    <img  src={image_url}  /> 
                                    <div className="button-container"> 
                                        <Button 
                                            onClick={ function() { setAttributes({ 'image_alt': '', 'image_url': '', 'image_id': ''}) } }
                                        >
                                            Remove Image
                                        </Button>
                                    </div>
                                </div>
                                
                                : 
                                <p className="copy--italic">Please add a placeholder image.</p>
                            }
                            <MediaUpload
                                onSelect={ media => { setAttributes({'image_alt': media.alt, 'image_url': media.url, 'image_id': media.id.toString() }); } }
                                type="image"
                                value={ image_id }
                                render={ ({ open }) => getImageButton(open, label ) }
                            />
                            <TextControl 
                                value={caption}
                                onChange={(value) => { updateAttributeValue('caption', value) }}
                                label="Caption (Optional):"
                            />
                        </PanelBody>
                    </InspectorControls>
                    <BlockEdit {...props} />
                </Fragment>,
                null
            ];
        };
    }, 'withInspectorControl');



    // Add attribute to core block
    addFilter(
        'blocks.registerBlockType',
        'pg/core-embed',
        customAttributes
    );

    // Add inspector controls for attribute
    addFilter(
        'editor.BlockEdit',
        'pg/core-embed',
        withInspectorControls
    );
}