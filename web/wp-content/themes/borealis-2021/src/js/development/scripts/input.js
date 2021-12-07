class Input {
    constructor(namespace, breakpoint, fields) {
        this.breakpoint = breakpoint;
        this.elements = null;
        this.inputs = null;
        this.namespace = namespace;
        this.fields = fields
    }
    setState(name, value) {
        this[name] = value;
    }

    setWidth(styles, width) {
        const currentWidth = Number(styles.width.replace(/[^-\d\.]/g, ''));
        const widthPercentage = Math.round(Number(currentWidth / width) * 100);
        const widthValue = {
            value: widthPercentage,
            unit: "%",
        }
        this.setState('width', widthValue);
    }
    setValue(field, styles) {
        const value = Number(styles[field].replace(/[^-\d\.]/g, ''));
        const unit = this.getUnit(styles[field]);
        const style = {
            value,
            unit,
        }
        this.setState(field, style);
    }

    setStyles(width) {
        if (this.elements && this.elements.length) {
            const styles = getComputedStyle(this.elements[0]);
            this.fields.forEach((field) => {
                if (field === 'width') {
                    this.setWidth(styles, width);
                } else {
                    this.setValue(field, styles);
                }
            })
        }
    }

    setValues() {
        this.fields.forEach((field) => {
            if (this.inputs[field] && this[field]) {
                this.inputs[field].value = this[field].value;
            }
        });
    }
    getFields() {
        return this.fields;
    }
    getUnit(value) {
        const unit = value.replace(/[-\d\.]/g, '');
        return unit;
    }
    getInputs() {
        const inputs = {};
        this.fields.forEach((field) => {
            const input = document.getElementById(`${this.namespace}_${field}`);
            if (input) {
                inputs[field] = input;
            }
        });
        this.setState('inputs', inputs);
        this.setValues();
    }
    getElements(width) {
        const elements = document.querySelectorAll(`.${this.namespace}`);
        if (elements && elements.length) {
            this.setState('elements', elements);
            this.setStyles(width);
        }
        this.getInputs();
        return elements;
    }

    updateElements() {
        if (this.elements && this.elements.length) {
            this.elements.forEach((element) => {
                this.fields.forEach((field) => {
                    if (this[field]) {
                        element.style[field] = `${this[field].value}${this[field].unit}`;
                    }
                })
            });
        }
    }

    handleChange(value, unit, field) {
        if (this[field]) {
            this.setState(field, { value, unit });
            this.updateElements();
        }
    } 
}

module.exports = Input;