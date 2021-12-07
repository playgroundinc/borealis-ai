import customErrors from '../helper-functions/custom-error.js';

export default function NumberControl(controlObject) {
  const { TextControl } = wp.components;
  const { controls, onChange } = controlObject;

  return (
    <div>
    { controls.map((control) => {
        const requiredFields = ['label', 'value', 'reference'];
        customErrors(control, requiredFields);
        return (
          <TextControl 
            value={control.value}
            type="number"
            onChange={(change) => { 
              onChange(control.reference, change) }
            }
            label={ control.label }
          />
        )
    })}
    </div>
  )

}