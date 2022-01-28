export default class Loader {
    constructor(trigger, list, params) {
        this.resetTrigger = document.querySelector('.refresh-results');
        this.trigger = trigger;
        this.list = list;
        this.page = this.list.dataset?.page ? Number(this.list.dataset.page) + 1 : 2;
        this.total = this.list.dataset?.total ? this.list.dataset.total : 2;
        this.postType = this.list.dataset?.posttype ? this.list.dataset.posttype : 'page';
        this.params = params;
        this.queryParams = {};
        this.data = new FormData();
        this.url = ajaxInfo.ajaxUrl;
        this.nonce = ajaxInfo.securityLoadMore;
    }
    generateMarkup = (markup) => {
        markup.forEach((inner) => {
            const listItem = document.createElement('li');
            listItem.classList = 'border-shade-grey-500 border-b';
            listItem.innerHTML = inner;
            this.list.append(listItem);
        });
    }
    makeRequest = async() => {
        try {
            console.log(this.data);
            const resp = await window.fetch(this.url, {
                method: 'POST',
                credentials: 'same-origin',
                body: this.data,
            })
            const json = await resp.json();
            console.log(json);
            if (json.status === 'success') {
                this.total = json.total;
                const markup = JSON.parse(json.markup)
                if (markup && markup.length >0) {
                    this.generateMarkup(markup);
                }
                if (this.page + 1 > json.total ) {
                    this.trigger.classList.add('hidden');
                } else {
                    this.trigger.classList.remove('hidden');
                }
                this.data.set('page', this.page + 1);
                this.page = this.page + 1;
            }
        } catch(err) {
            console.log(err);
        }
    }
    handleClick = async (e) => {
        e.preventDefault();
        this.updateData();
        const results = await this.makeRequest();
    }
    handleRefresh = (e) => {
        e.preventDefault();
        this.trigger.classList.add('hidden');
        while (this.list.lastElementChild) {
            this.list.removeChild(this.list.lastElementChild);
        }
        this.page = 1;
        this.updateData();
        this.makeRequest();
    }
    addListeners = () => {
        if (this.trigger) {
            this.trigger.addEventListener('click', this.handleClick);
        }
        this.resetTrigger.addEventListener('click', this.handleRefresh);
    }
    updateData = () => {
        this.queryParams = {};
        if (this.params && this.params.length > 0) {
            this.params.forEach((param) => {
                if (this.list.getAttribute(`data-${param}`)) {
                    let terms = this.list.getAttribute(`data-${param}`).split(',');
                    terms = terms.map((term) => Number(term));
                    this.queryParams[param] = terms;
                    console.log(this.queryParams);
                }
            })
            this.data.set('params', JSON.stringify(this.queryParams));
        }   
        this.query = this.list.dataset.q;
        if (this.query) {
            this.data.set('query', this.query);
        }
        this.data.set('page', this.page);
    }
    populateData = () => {
        this.data.set('action', 'load_more');
        this.data.set('load_more', this.nonce);
        this.data.set('page', this.page);    
        this.data.set('post_type', this.postType);
    }
    init = () => {
        this.populateData();
        this.addListeners();
    }
}