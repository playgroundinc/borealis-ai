export default class Loader {
    constructor(trigger, list) {
        this.trigger = trigger;
        this.list = list;
        this.page = this.list.dataset?.page ? Number(this.list.dataset.page) + 1 : 2;
        this.total = this.list.dataset?.total ? this.list.dataset.total : 2;
        this.query = this.list.dataset?.query ? this.list.dataset.query : false;
        this.data = new FormData();
        this.url = ajaxInfo.ajaxUrl;
        this.nonce = ajaxInfo.securityLoadMore;
    }
    generateMarkup = (markup) => {
        markup.shift();
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
            console.log(json)
            if (json.status === 'success') {
                this.generateMarkup(JSON.parse(json.markup));
            }
        } catch(err) {
            console.log(err);
        }
    }
    handleClick = async (e) => {
        e.preventDefault();
        const results = await this.makeRequest();
    }
    addListeners = () => {
        this.trigger.addEventListener('click', this.handleClick);
    }
    populateData = () => {
        this.data.append('action', 'load_more');
        this.data.append('load_more', this.nonce);
        this.data.append('page', this.page);
        this.data.append('query', this.query);
    }
    init = () => {
        this.populateData();
        this.addListeners();
    }
}