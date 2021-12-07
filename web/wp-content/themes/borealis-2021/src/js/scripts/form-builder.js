class CustomForm {
    constructor(element) {
        this.form = element;
        this.requiredFields = [];
        this.errors = [];
        this.url = ajaxInfo.ajaxUrl;
        this.nonce = ajaxInfo.emailSecurity;
        this.destination = this.form.dataset.destination;
        this.action = 'send_email';
        this.checkbox = null;
        this.success = null;
        this.failure = null;
        this.toggleSuccessVisibility = this.toggleSuccessVisibility.bind(this);
        this.toggleFailureVisibility = this.toggleFailureVisibility.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.handleDestinationChange = this.handleDestinationChange.bind(this);
    }
    setState(name, value) {
        this[name] = value;
    }

    getRequiredFields() {
        const allElements = [... this.form.elements];
        const required = allElements.filter((el) => el.required);
        if (required.length) {
            this.requiredFields = required;
            return required;
        }
        return [];
    }  
    checkRequiredFields() {
        this.requiredFields.forEach((field) => {
            if (!field.value || field.value === '' || field.value === null) {
                this.errors.push(field.name);
                field.setAttribute('aria-invalid', true);
            }
        });
    }

    handleFocus(field) {
        const name = field.name;
        const index = this.errors.indexOf(name);
        if (index > -1) {
            this.errors.splice(index, 1);
            field.setAttribute('aria-invalid', false);
        }
    }
    async submitForm(data) {
        try {
            let response = await window.fetch( this.url, {
                method: 'POST',
                credentials: 'same-origin',
                body: data,
            });
            response = await response.json();
            if (response.success) {
                this.toggleSuccessVisibility();
                return;
            }
            this.toggleFailureVisibility();
        } catch(e) {
            this.toggleFailureVisibility();
        }
    }

    toggleFailureVisibility() {
        if (this.failure.classList.contains('custom-form__failure--active')) {
            this.failure.style.maxHeight = '0';
            this.failure.style.overflow = 'hidden';
            this.failure.classList.remove('custom-form__failure--active');
            return;
        }
        this.failure.style.maxHeight = 'unset';
        const height = this.failure.offsetHeight;
        this.failure.style.maxHeight = `${height}px`;
        this.failure.style.overflow = 'visible';
        this.failure.classList.add('custom-form__failure--active');
    }

    toggleSuccessVisibility() {
        if (this.success.classList.contains('custom-form__success--active')) {
            this.success.style.maxHeight = '0';
            this.success.style.overflow = 'hidden';
            this.success.classList.remove('custom-form__success--active');
            return;
        }
        this.success.style.maxHeight = 'unset';
        const height = this.success.offsetHeight;
        this.success.style.maxHeight = `${height}px`;
        this.success.style.overflow = 'visible';
        this.success.classList.add('custom-form__success--active');
    }

    getDataFields(data) {
        const dataFields = ['destination', 'site', 'title'];
        dataFields.forEach((field) => {
            const value = this.form.dataset[field];
            data.append(field, value);
        });
        return data;
    }

    getFields(data) {
        const fields = ['action', 'nonce'];
        fields.forEach((field) => {
            if (this[field]) {
                data.append(field, this[field]);
            }
        });
        return data;

    }
    getData() {
        let data = new FormData(this.form);
        data = this.getDataFields(data);
        data = this.getFields(data);
        this.submitForm(data);
    }

    getSuccessState() {
        const index = this.form.id;
        const successState = document.getElementById(`${index}-success`);
        if (successState) {
            this.setState('success', successState);
            this.addSuccessDismissHandler();
            window.addEventListener('resize', this.handleWindowResize);
        }
    }

    getFailureState() {
        const index = this.form.id;
        const failureState = document.getElementById(`${index}-failure`);
        if (failureState) {
            this.setState('failure', failureState);
            this.addFailureDismissHandler();
        }
    }

    handleSubmit() {
        this.getRequiredFields();
        this.checkRequiredFields();
        if (this.errors.length > 0) {
            return;
        }
        this.getData();
    }

    handleWindowResize() {
        if (this.success.classList.contains('custom-form__success--active')) {
            this.success.style.maxHeight = 'unset';
            const height = this.success.offsetHeight;
            this.success.style.maxHeight = `${height}px`;
        }
        if (this.failure.classList.contains('custom-form__failure--active')) {
            this.failure.style.maxHeight = 'unset';
            const height = this.failure.offsetHeight;
            this.failure.style.maxHeight = `${height}px`;
        }
    }

    handleChange(elements, e) {
        const element = e.target;
        const type = e.target.getAttribute('type');
        if (type === 'radio') {
            elements.forEach((element) => {
                const checked = element.checked;
                element.setAttribute('aria-checked', checked);
            });
            return;
        } 
        const checked = element.checked;
        element.setAttribute('aria-checked', checked);
    }

    addSuccessDismissHandler() {
        const dismiss = this.success.querySelector('.dismiss-button');
        dismiss.addEventListener('click', this.toggleSuccessVisibility);
    }
    
    addFailureDismissHandler() {
        const dismiss = this.failure.querySelector('.dismiss-button');
        dismiss.addEventListener('click', this.toggleFailureVisibility);
    }

    addChangeListener(elements) {
        if (elements && elements.length) {
            elements.forEach((element) => {
                element.addEventListener('change', this.handleChange.bind(this, elements));
            })
        }
    }

    changeListener() {
        const checkboxes = [...this.form.querySelectorAll('input[type=checkbox]')];
        const radioButtons = [...this.form.querySelectorAll('input[type=radio]')];
        this.addChangeListener(checkboxes);
        this.addChangeListener(radioButtons);
    }

    handleDestinationChange(e) {
        if (e.target.value && e.target.value !== '') {
            this.form.dataset.destination = e.target.value;
            return;
        }
        this.form.dataset.destination = this.destination;
    }

    destinationHandler() {
        const destination = this.form.querySelector('.custom-form__destination select');
        if (destination) {
            destination.addEventListener('change', this.handleDestinationChange);
        }
    }

    init() {
        this.changeListener();
        this.destinationHandler();
        this.getSuccessState();
        this.getFailureState();
    }
}

const allForms = document.querySelectorAll('.custom-form');

const addFocusListeners = (Form) => {
    const requiredFields = Form.getRequiredFields();
    if (requiredFields.length) {
        requiredFields.forEach((field) => {
            field.addEventListener('focus', function() {
                Form.handleFocus(field);
            });
        });
    }
}

const addSubmitListener = (formEl, Form) => {
    formEl.addEventListener('submit', function(e) {
        e.preventDefault();
        Form.handleSubmit();
    }, false);
}

if (allForms.length) {
    allForms.forEach((form) => {
        const Form = new CustomForm(form);
        Form.init();
        addSubmitListener(form, Form);
        addFocusListeners(Form);
    });
}