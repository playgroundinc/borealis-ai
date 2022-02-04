import QueryParams from "./class-query-params";

export default class SearchBar {
    constructor(form) {
        this.form = form;
        this.input = null;
        this.searchTerm = '';
        this.QueryParams = new QueryParams('q');
        this.addEvents = this.addEvents.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setValue = this.setValue.bind(this);
    }
    setValue(name, value) {
        this[name] = value;
    }
    getInput() {
        const input = this.form.querySelector('input');
        this.setValue('input', input);
    }
    getElements() {
        this.getInput();
    }
    addEvents() {
        this.form.addEventListener('submit', this.handleSubmit)
        this.input.addEventListener('keyup', this.handleChange);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.QueryParams.setParam(this.searchTerm);
        location.reload();
    }
    handleChange(e) {
        if (e.keyCode === 13) {
            return;
        }
        this.setValue('searchTerm', e.target.value);
    }
    
    init() {
        this.getElements();
        this.addEvents();
    }
}
