export default class Filters {
    constructor(filters, elements, empty) {
        this.filters = filters;
        this.elements = elements;
        this.filtered = elements;
        this.empty = empty;
        this.values = {};
        this.handleChange = this.handleChange.bind(this);
    }
    setState(name, value) {
        this[name] = value;
    }

    getState(name) {
        return this[name];
    }

    handleChange(e) {
        e.preventDefault();
        const { value, name } = e.target;
        const tmp_value = this.getState('values');
        tmp_value[name] = value;
        this.setState('values', tmp_value);
        this.filter();
    }

    hideAll() {
        this.elements.forEach((element) => {
            const { index } = element.dataset;
            if (this.filteredElements.some(filteredElement => filteredElement.dataset.index === index)) {
                element.classList.remove('map-block__listing--hidden');
                const marker = document.getElementById(`marker-${index}`);
                if (marker) {
                    marker.classList.remove('marker--hidden');
                }
                return;
            }
            element.classList.add('map-block__listing--hidden');
            const marker = document.getElementById(`marker-${index}`);
            if (marker) {
                marker.classList.add('marker--hidden');
            }
        });
    }

    handleEmptyState() {
        if (this.filteredElements.length > 0) {
            this.empty.forEach((empty) => {
                empty.classList.remove('map-block__empty--active');
            })
            return;
        }
        this.empty.forEach((empty) => {
            empty.classList.add('map-block__empty--active');
        })
    }

    filter() {
        const allElements = this.getState('elements');
        const filteredElements = allElements.filter((element) => {
            let match = true;
            for (let value in this.values) {
                if (this.values[value] !== '') {
                    if (value === 'services') {
                        const elementServices = element.dataset.services.split(',');
                        if (elementServices.length && elementServices.indexOf(this.values[value]) !== -1) {
                            match = true;
                        } else {
                            return false; 
                        }
                    } else if (element.dataset[value] === this.values[value]) {
                        match = true;
                    } else {
                        return false;
                    }
                }
            }
            return match;
        })
        this.setState('filteredElements', filteredElements);
        this.handleEmptyState();
        this.hideAll();
    }

    init() {
        const values = {};
        this.filters.forEach(filter => {
            const name = filter.getAttribute('name');
            values[name] = '';
            filter.addEventListener('change', this.handleChange);
        });
        this.setState('value', values);
    }
}