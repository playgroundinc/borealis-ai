import QueryParams from "./class-query-params";

export default class RadioControlsClass {
    constructor(container) {
        this.id = container.id;
        this.inputs = container.querySelectorAll("input[type='radio']");
    }
    handleChange = (e) => {
        this.params.setParam(e.target.value);
    }
    addListeners = () => {
        if (this.inputs.length) {
            this.inputs.forEach(input => {
                input.addEventListener('change', this.handleChange);
            });
        }
    }
    init = () => {
        this.params = new QueryParams(this.id);
        const currentValue = this.params.getParam(this.id);
        if (!currentValue) {
            this.params.setParam('all');
        }
        this.addListeners();
    }
}