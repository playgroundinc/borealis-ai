export default class Loader {
	constructor(container, trigger, list, params) {
		this.container = container;
		this.resetTrigger = container.querySelector(".refresh-results");
		this.trigger = trigger;
		this.list = list;
		this.page = this.list.dataset?.page
			? Number(this.list.dataset.page) + 1
			: 2;
		this.total = this.list.dataset?.total ? this.list.dataset.total : 2;
		this.postType = this.list.dataset?.posttype
			? this.list.dataset.posttype
			: "page";
		this.params = params;
		this.queryParams = {};
		this.data = new FormData();
		this.url = ajaxInfo.ajaxUrl;
		this.nonce = ajaxInfo.securityLoadMore;
	}
	generateMarkup = (markup) => {
		markup.forEach((inner) => {
			const listItem = document.createElement("li");
			listItem.classList = "border-gray-200 border-b";
			listItem.innerHTML = inner;
			this.list.append(listItem);
		});
	};
	toggleTrigger = (hide) => {
		if (hide) {
			this.trigger.classList.add("hidden");
			return;
		}
		this.trigger.classList.remove("hidden");
	};
	handleSuccess = (data) => {
		this.total = data.total;
		const markup = JSON.parse(data.markup);
		if (markup && markup.length > 0) {
			this.generateMarkup(markup);
		} else {
			const listItem = document.createElement("li");
			// Adding a class of hidden to this for now because not entirely sure we need this at all.
			// No results found message is already in the markup for all individual search bars.
			listItem.classList = "container paragraph py-7 hidden";
			listItem.innerText = "No results found";
			this.list.append(listItem);
		}
		this.toggleTrigger(this.page + 1 > data.total);
		this.data.set("page", this.page + 1);
		this.page = this.page + 1;
	};
	makeRequest = async () => {
		try {
			const resp = await window.fetch(this.url, {
				method: "POST",
				credentials: "same-origin",
				body: this.data,
			});
			const data = await resp.json();
			if (data.status === "success") {
				this.handleSuccess(data);
			}
		} catch (err) {
			console.log(err);
		}
	};
	handleClick = async (e) => {
		e.preventDefault();
		this.updateData();
		this.makeRequest();
	};
	handleRefresh = (e) => {
		e.preventDefault();
		this.toggleTrigger(true);
		while (this.list.lastElementChild) {
			this.list.removeChild(this.list.lastElementChild);
		}
		this.page = 1;
		this.updateData();
		this.makeRequest();
	};
	addListeners = () => {
		this.trigger.addEventListener("click", this.handleClick);
		this.resetTrigger.addEventListener("click", this.handleRefresh);
	};
	setQueryParams = () => {
		this.queryParams = {};
		if (this.params && this.params.length > 0) {
			this.params.forEach((param) => {
				if (this.list.getAttribute(`data-${param}`)) {
					let terms = this.list.getAttribute(`data-${param}`).split(",");
					terms = terms.map((term) => Number(term));
					this.queryParams[param] = terms;
				}
			});
			this.data.set("params", JSON.stringify(this.queryParams));
		}
	};
	setQuery = () => {
		this.query = this.list.dataset.q;
		if (this.query) {
			this.data.set("query", this.query);
		}
	};
	setPostType = () => {
		this.postType = this.list.dataset.posttype;
		if (this.postType) {
			this.data.set("post_type", this.postType);
		}
	};
	updateData = () => {
		this.setQueryParams();
		this.setQuery();
		this.setPostType();
		this.data.set("page", this.page);
	};
	populateData = () => {
		this.data.set("action", "load_more");
		this.data.set("load_more", this.nonce);
		this.data.set("page", this.page);
		this.data.set("post_type", this.postType);
	};
	init = () => {
		this.populateData();
		this.addListeners();
	};
}
