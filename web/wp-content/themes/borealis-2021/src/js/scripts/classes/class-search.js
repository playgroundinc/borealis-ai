import QueryParams from "./class-query-params";

export default class SearchBar {
    constructor(form) {
        this.form = form;
        this.input = null;
        this.error = false;
        this.errorElement = null;
        this.helperTextElement = null;
        this.searchTerm = '';
        this.QueryParams = new QueryParams('q');
        this.addEvents = this.addEvents.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkForError = this.checkForError.bind(this);
        this.setValue = this.setValue.bind(this);
    }
    setValue(name, value) {
        this[name] = value;
    }
    getInput() {
        const input = this.form.querySelector('input');
        this.setValue('input', input);
    }
    getErrorElement() {
        const errorElement = this.form.querySelector('#error-state')
        this.setValue('errorElement', errorElement);
    }
    getHelperTextElement() {
        const helperTextElement = this.form.querySelector('#helper-text');
        this.setValue('helperTextElement', helperTextElement);
    }
    getElements() {
        this.getInput();
        this.getHelperTextElement();
        this.getErrorElement();
    }
    addEvents() {
        this.form.addEventListener('submit', this.handleSubmit)
        this.input.addEventListener('keyup', this.handleChange);
    }
    checkForError() {
        if (this.searchTerm !== '') {
            return false; 
        }
        this.setValue('error', true);
        this.helperTextElement.classList.add('hidden');
        this.errorElement.classList.remove('hidden');
        return true;
    }
    handleSubmit(e) {
        e.preventDefault();
        const error = this.checkForError();
        if (!error) {
            this.QueryParams.setParam(this.searchTerm);
        }
    }
    handleChange(e) {
        if (e.keyCode === 13) {
            return;
        }
        this.setValue('searchTerm', e.target.value);
        if (!this.error) {
            return;
        }
        this.setValue('error', false);
        this.helperTextElement.classList.remove('hidden');
        this.errorElement.classList.add('hidden');
    }
    
    init() {
        this.getElements();
        this.addEvents();
    }
}
