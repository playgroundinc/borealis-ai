{/* 

ABOUT
RichText component is a component to easily add a RichText WordPress component to any existing block. 

WARNING
Currently the Alignment Toolbar can only be added to the entire Block, not the individual RichText component, so if you enable the Alignment on more than one custom RichText element within a specific block it will show two alignment toolbars side-by-side. 

PROPS 
  Components
    An array of objects. Each object is a single RichText component with the following fields. Can create multiple RichText components.
      - tagName : The name of the HTML tag to be applied to this RichText component
      - reference : The name of the attribute it controls
      - value : The value of the attribute
      - placeholder (optional) : Pass a string for the RichText placeholder. 
      - classes (optional) : Pass an array of classes to be applied to the component for styling.
      - settings (optional): Pass an array of formatting settings to be enabled. Need to be namespaced (e.g. 'core/bold', 'core/italic', or 'core/link'). Will remove all settings if passed an empty array. Current custom options include: 
      - align (optional): An object to enable/disable the alignment toolbar and pass it settings. It has the following values. 
        -- value : A reference to the attribute in the parent block that controls alignment (only required if enabled is set to true)
        -- reference : Name of the attribute in the parent block that controls alignment (only required if enabled is set to true)
    
      ** Any optional revert to a default if nothing is passed. 

  onChange
    A function to update the attribute on the parent on changes in the child. 
    Feel free to use the example below, as long as updateAttributeValue is defined on the parent.  
      
      onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }

EXAMPLE

  <CustomRichText 
    onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
    components={[
      {
        value: title,
        reference: "title",
        classes: ['custom-class'],
        tagName: "h2",
        settings: ['core/bold', 'core/link'],
        align: {
          value: alignment,
          reference: 'alignment'
        },
      },
      {
        value: subtitle,
        reference: "subtitle",
        tagName: "h3",
      }
    ]}
  />

*/}

import customError from '../helper-functions/custom-error';

export default function CustomRichText(props) {
  const {
    RichText,
    AlignmentToolbar,
    BlockControls,
  } = wp.blockEditor;
  
  const checkFields = (values, fields) => {
    customError(values, fields);
  }

  const checkRequiredComponentFields = (values) => {
    const requiredFields = [ 'value', 'tagName'];
    values.type = 'RichText';
    checkFields(values, requiredFields);
  }

  const checkRequiredProps = (props) => {
    const requiredFields = [ 'onChange', 'components'];
    const values = props;
    values.type = 'RichText';
    checkFields(values, requiredFields);
  }

  const checkAlignment = (align) => {
    const alignmentRequiredFields = ['value', 'reference'];
    align.type = 'RichText alignment';
    checkFields(align, alignmentRequiredFields);
  }

  checkRequiredProps(props)

  const { components, onChange } = props;

  return (
    <div>
      {
        components.map((component) => {
          checkRequiredComponentFields(component);
          if (component.align) {
            checkAlignment(component.align);
          }
          return (
            <div>
            {
              component.align ? 
                <BlockControls>
                  <AlignmentToolbar
                    value={ component.align.value }
                    onChange={ (change) => { 
                      onChange(component.align.reference, change)
                    } }
                  />
                </BlockControls> : null
            }
            <RichText
              className={component.classes && component.classes.length > 0 ? `components-text-control__input ${component.classes.join(' ')}` : 'components-text-control__input'}
              tagName={component.tagName}
              style={ component.align ? { textAlign: component.align.value } : {} }
              placeholder={component.placeholder ? component.placeholder : "Start writing..."}
              keepPlaceholderOnFocus={true}
              allowedFormats={ component.settings && Array.isArray(component.settings) ? component.settings : [ 'core/bold', 'core/underline', 'core/link' ] }
              value={component.value}
              onChange={(changes) => {
                onChange(component.reference, changes);
              }}
            />
            </div>
          )
        })
      }
    </div>
  )
}