export default class QueryParams {
    constructor(param) {
        this.param = param;
        this.UrlParams = new URLSearchParams(window.location.search);
    }
    setParam(value) {
       this.UrlParams.set(this.param, value);
       history.replaceState({}, 'Borealis AI', `${location.pathname}?${this.UrlParams.toString()}`);
       location.reload();
    }
}