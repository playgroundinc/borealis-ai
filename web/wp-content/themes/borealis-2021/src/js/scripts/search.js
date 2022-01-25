import SearchBarClass from "./classes/class-search";
import QueryParams from "./classes/class-query-params";
import checkboxSearchForm from "./checkbox-searchform";

export default function search() {
  const searchForm = [...document.querySelectorAll(".search-form")];

  if (searchForm && searchForm.length > 0) {
    searchForm.forEach((form) => {
      const SearchBar = new SearchBarClass(form);
      SearchBar.init();
    });
  }
};