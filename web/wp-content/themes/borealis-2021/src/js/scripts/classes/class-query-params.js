export default class QueryParams {
    constructor(param) {
        this.param = param;
        this.list = document.querySelector('.posts-listing');
        this.refresh = document.querySelector('.refresh-results');
        this.UrlParams = new URLSearchParams(window.location.search);
        this.setListData = this.setListData.bind(this);
        this.setParam = this.setParam.bind(this);
        this.getParam = this.getParam.bind(this);
        this.appendParam = this.appendParam.bind(this);
        this.deleteParams = this.deleteParams.bind(this);
    }
    setListData(action = 'populate') {
        if (action === 'clear') {
            this.UrlParams.forEach((value, key) => {
                this.list.setAttribute(`data-${key}`, ``);
            })
            return;
        }
        this.UrlParams.forEach((value, key) => {
            this.list.setAttribute(`data-${key}`, `${value}`);
        })
    }
    setParam(value) {
        this.UrlParams = new URLSearchParams(window.location.search);
        this.UrlParams.set(this.param, value);
        history.replaceState({}, 'Borealis AI', `${location.pathname}?${this.UrlParams.toString()}`);
        if (this.list) {
            this.setListData();
            if (this.refresh) {
                this.refresh.click();
            }
        }
    }
    getParam(value) {
        return this.UrlParams.get(value);
    }
    appendParam(param, value) {
        this.UrlParams.append(param, value);
        history.replaceState({}, 'Borealis AI', `${location.pathname}?${this.UrlParams.toString()}`);
    }
    deleteParams() {
        history.replaceState(null, null, window.location.pathname);
        if (this.list) {
            this.setListData('clear');
            if (this.refresh) {
                this.refresh.click();
            }
        }
    }
}