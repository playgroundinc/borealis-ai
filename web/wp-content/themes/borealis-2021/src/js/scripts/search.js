import SearchBarClass from "./classes/class-search";
import checkboxSearchForm from "./checkbox-searchform";

export default function search() {
  const searchForm = [...document.querySelectorAll(".search-form")];

  if (searchForm && searchForm.length > 0) {
    searchForm.forEach((form) => {
      const SearchBar = new SearchBarClass(form);
      SearchBar.init();
    });
  }
  //   Add checkbox functionality to all taxonomy search forms
  const checkboxContainers = document.querySelectorAll(".checkbox-form");
  let count = 0;
  const setCount = (action) => {
    switch(action) {
      case 'check':
        count = count + 1;
        return count;
      case 'uncheck':
        count = count - 1;
        return count;
      case 'clear':
        count = 0;  
        return count;
      default: 
        return count;
    }
  }
  checkboxContainers.forEach((checkboxContainer) => {
    checkboxSearchForm(checkboxContainer, setCount);
  });
};

