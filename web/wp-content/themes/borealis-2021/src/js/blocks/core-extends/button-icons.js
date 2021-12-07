/**
 * Customize Core Buttons
 */

const { addFilter } = wp.hooks;
const { Fragment } = wp.element;

export default function extendCoreButton() {
    const { __ } = wp.i18n;
    const { createHigherOrderComponent } = wp.compose;
    const { InspectorControls } = wp.blockEditor;
    const { PanelBody, SelectControl } = wp.components;

    function customAttributes(props, name) {
        if ('core/button' !== name) {
            return props;
        }

        const example = {
            ...props.example
        };

        // Remove the `vivid-green-cyan` preview color
        delete example.attributes.backgroundColor;

        const attributes = {
            ...props.attributes,
            icon: {
                type: 'string',
                default: '',
            },
        };

        const description = `${props.description}\n\nNOTE: Be sure to include a link or the buttons will not display on the page. Buttons groups should include a maximum of 2 buttons.`;

        return {
            ...props,
            attributes,
            example,
            description,
        };
    }

    const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
        return (props) => {

            if ('core/button' !== props.name) {
                return <BlockEdit {...props} />;
            }

            const { attributes, setAttributes } = props;
            const { icon } = attributes;

        return [
                <Fragment>
                    <InspectorControls>
                        <PanelBody title={__('Icon Settings')}>
                            <SelectControl
                                label="Button Icon:"
                                value={icon}
                                options={[
                                    { value: '', label: 'None' },
                                    { value: 'arrow', label: 'Arrow' },
                                ]}
                                onChange={(change) => setAttributes({ icon: change })}
                            />
                        </PanelBody>
                    </InspectorControls>
                    <BlockEdit {...props} />
                </Fragment>,
                null
            ];
        };
    }, 'withInspectorControl');

    const withIconWrapper = createHigherOrderComponent((BlockListBlock) => {
        return (props) => {

            if ('core/button' !== props.name) {
                return <BlockListBlock {...props} />;
            }

            const { attributes } = props;
            const { icon } = attributes;

            if (!!icon) {
                return <BlockListBlock {...props} className={`btn btn--icon`} />;
            } else {
                return <BlockListBlock {...props} />;
            }
        }
    }, 'withIconWrapper');

    function saveCustomClasses(props, block, attributes) {

        const { icon } = attributes;

        if ('core/button' !== block.name) {
            return props;
        }

        if (!!icon) {
            return {
                ...props,
                className: `${props.className} btn btn--icon`,
            };
        } else {
            return {
                ...props,
                className: `${props.className} btn trmc-btn`,
            };
        }

    }

    // Add attribute to core block
    addFilter(
        'blocks.registerBlockType',
        'pg/core-button',
        customAttributes
    );

    // Add inspector controls for attribute
    addFilter(
        'editor.BlockEdit',
        'pg/core-button',
        withInspectorControls
    );

    // Update the class on the editor block when attribute changes
    addFilter(
        'editor.BlockListBlock',
        'pg/core-button',
        withIconWrapper
    );

    // Save classes on output HTML
    addFilter(
        'blocks.getSaveContent.extraProps',
        'pg/core-button',
        saveCustomClasses
    );
}

