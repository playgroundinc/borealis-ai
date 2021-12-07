/**
 *  This is a set of JS files to control the inputs defined in the development blocks controls. 
 * 
 *  Included in the 
 */ 
const DevBlockControls = require('./scripts/dev-block-controls');

    // This object defines the numeric inputs in the development controls. 
    const inputs = {
        container: [
            'maxWidth',
            'width',
        ],
        custom_component: [
        
        ],
    };

    // Pulls the required fields for each input.
    const getInputFields = (controls, namespace) => {
        const fields = controls.getInputFields(namespace);
        return fields;
    }

    // Adds change listeners to number inputs and unit selects.
    const handleInput = (controls, namespace) => {
        const fields = getInputFields(controls, namespace);
        if (fields && fields.length) {
        fields.forEach((field) => {
            const element = document.getElementById(`${namespace}_${field}`);
            const units = document.getElementById(`${namespace}_${field}_units`);
            if (element && controls) {
                element.addEventListener('change', function(e) {
                    controls.handleInputChange(namespace, e.target.value, units.value, field);
                });
            }
            if (units && controls) {
                units.addEventListener('change',function(e) {
                    controls.handleInputChange(namespace, element.value, e.target.value, field);
                })
            }
        });
    }
}


    // Pulls all fluid font elements.
    const getFluidFontElements = (controls) => {
    const elements = controls.getFluidFontElements();
    return elements;
    }

    // Pulls all fluid font fields.
    const getFluidFontFields = (controls) => {
    const fields = controls.getFluidFontFields();
    return fields;
    }

    // Adds change listeners to the maximum/minimum controls.
    const handleFluidFontsMaxMin = (controls, elements) => {
    const fields = getFluidFontFields(controls);
    for (let element in elements) {
    if (elements[element]) {
        fields.forEach((field) => {
            if (elements[element][field]) {
                elements[element][field].addEventListener('change', function() {
                    controls.handleFluidFontChange(element);
                });
            }
        })
    }
    }
    }

    // Adds change listener for the current value controls on fluid fonts. 
    const handleFluidFontsCurrent = (controls, elements) => {
    for (let element in elements) {
    if (elements[element] && elements[element]['current']) {
        elements[element]['current'].addEventListener('change', function(e) {
            controls.handleCurrentFluidFontChange(element, e.target.value);
        });
    }
    }
    }

    // Calls the individual handlers. 
    const handleFluidFonts = (controls) => {
    const elements = getFluidFontElements(controls);
    handleFluidFontsMaxMin(controls, elements);
    handleFluidFontsCurrent(controls, elements);
    }

    // Gets this party started.
    const init = () => {
    // Initiates the Dev Block Controls.
    const controls = new DevBlockControls();

    // Sets up and controls fluid fonts.
    controls.setElements();
    handleFluidFonts(controls);

    // Iterates over the inputs object above and initializes them.
    for (let input in inputs) {
    controls.setInputElements(input, inputs[input])
    // Adds change listeners to each related input. 
    handleInput(controls, input);
    }

    // Adds resize listener to window. 
    window.addEventListener('resize', function() {
    controls.handleResize();
    });
    }

    init();