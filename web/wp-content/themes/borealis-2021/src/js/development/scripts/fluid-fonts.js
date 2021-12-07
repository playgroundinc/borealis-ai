const Defaults = require('./defaults');

class FluidFont {
    constructor(breakpoint, minWidth, maxWidth) {
        this.breakpoint = breakpoint;
        this.minWidth = minWidth;
        this.maxWidth = maxWidth;
        this.current = 0;
        this.min = 0,
        this.max = 0,
        this.defaults = {};
        this.elements = null;
        this.typography = [
            'eyebrow',
            'headline',
            'heading_one',
            'heading_two',
            'heading_three',
            'heading_four',
            'heading_five',
            'heading_six',
            'paragraph',  
            'caption',
            'btn',
        ];
        this.fields = [
            'min',
            'max',
        ];
    }
    // Setters.
    setState(name, value) {
        this[name] = value;
    }

    setDefaults() {
        const defaults = new Defaults();
        const fontDefaults = defaults.getDefaultFonts();
        this.setState('defaults', fontDefaults);
    }

    setCurrentValue(element, value) {
        if (this.elements[element] && this.elements[element]["current"] ) {
            this.elements[element]["current"].value = value;
        }
    }

    setFontSizes(element, value) {
        const allMatching = document.querySelectorAll(`.${element}`);
        if (allMatching.length) {
        allMatching.forEach((match) => {
            match.style.fontSize = `${value}px`
        });
        }
    }

    setBounds(element) {
        this.fields.forEach((field) => {
            if (this.elements[element][field]) {
                this[field] = this.elements[element][field].value;
            }
        });
    }

    setActive(element) {
        for (let field in this.elements[element]) {
            this.elements[element][field].dataset.active = true;
        }
    }


    // Getters
    getDefaultValues() {
        for (let element in this.elements) {
        this.fields.forEach((field) => {
            if (this.elements[element] && this.elements[element][field] && this.elements[element][field].dataset.active !== "true" && this.defaults[element]) {
                this.elements[element][field].value = this.defaults[element][this.breakpoint][field];
            }
        })
        }
    }

    getFields() {
        return this.fields;
    }

    getCurrentValues(width) {
        for (let selector in this.elements) {
            this.setBounds(selector);
            const value = this.calculateNewSize(width)
            this.setCurrentValue(selector, value);
            this.setFontSizes(selector, value);
        }
    }

    // Calculations.
    // Calculates the width-specific portion of the fluid type function.
    calculateVW(width) {
        const numerator = width - this.minWidth;
        const denominator = this.maxWidth - this.minWidth;
        let vw = numerator / denominator;
        if (vw > 1) {
            vw = 1;
        }
        if (vw < 0) {
            vw = 0;
        }
        return vw;
    }

    // Uses the fluid type function to calculate the current size.
    calculateNewSize(width) { 
        const vw = this.calculateVW(width);
        const range = Number(this.max) - Number(this.min);
        const newSize = Math.round(Number(this.min) + Number(range * vw));
        return newSize;
    }

    // Calculates the new Maximum value.
    // Assumes the minimum stays the same. 
    calculateNewMax(value, width) {
        if (width > this.maxWidth ) {
            this.setState('max', value);
            return value;
        }
        if (value < this.min) {
            this.setState('min', 14);
        }
        const vw = this.calculateVW(width);
        const numerator = Number(value - this.min) + Number(vw * this.min);
        const max = Math.round(numerator / vw);
        this.setState('max', max);
        return max;
    } 

    // Calculates new minimum. 
    // Will never return less than 14.
    calculateNewMin(value, width) {
        if (width > this.maxWidth || width < this.minWidth) {
            return this.min;
        }
        if (value < this.min) {
            this.setState('min', value);
            return value;
        }
        const vw = this.calculateVW(width);
        const numerator = Number(value - (this.max * vw));
        const denominator = Number(1 - vw);
        let min = Math.round(numerator / denominator);
        if (min < 14 ) {
            min = 14;
            this.setState('min', min);
            return min;
        }
        this.setState('min', min);
        return min;
    }

    // Handles changes to the maximum / minimum inputs.
    calculateNewValues(element, width) {
        this.setBounds(element);
        this.setActive(element);
        const value = this.calculateNewSize(width)
        this.setCurrentValue(element, value);
        this.setFontSizes(element, value);
    }

    // Handles changes to the current value input.
    calculateNewCurrent(element, value, width) {
        this.setBounds(element);
        this.setActive(element);
        const max = this.calculateNewMax(value, width);
        this.elements[element]['max'].value = max;
        const min = this.calculateNewMin(value, width);
        this.elements[element]['min'].value = min;
        this.setFontSizes(element, value);  
    }

    // Methods.

    getElements(width) {
        this.setDefaults();
        const elements = {};
        this.typography.forEach((type) => {
            elements[type] = {};
            elements[type]['current'] = document.getElementById(type);
            this.fields.forEach((field) => {
                elements[type][field] = document.getElementById(`${type}_${field}`);
                if (elements[type]['current'] && elements[type][field]) {
                    this.setState('elements', elements);
                }
            });
        });
        this.getDefaultValues();
        this.getCurrentValues(width);
        return elements;
    }

    handleResize(breakpoint, width) {
        this.setState('breakpoint', breakpoint);
        this.getDefaultValues();
        this.getCurrentValues(width);
    }
}

module.exports = FluidFont;