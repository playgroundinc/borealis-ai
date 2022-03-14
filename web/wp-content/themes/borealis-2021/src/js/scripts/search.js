import SearchBarClass from "./classes/class-search";
import RadioControlsClass from "./classes/class-radio-controls";
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
  const isJobs = checkboxContainers[0]?.classList.contains("job-checkboxes");
  let count = 0;
  const setCount = (action) => {
    switch (action) {
      case "check":
        count = count + 1;
        return count;
      case "uncheck":
        count = count - 1;
        return count;
      case "clear":
        count = 0;
        return count;
      default:
        return count;
    }
  };
  checkboxContainers.forEach((checkboxContainer) => {
    checkboxSearchForm(checkboxContainer, setCount, isJobs);
  });

  const radioForms = [...document.querySelectorAll(".radio-form")];
  if (radioForms.length > 0) {
    radioForms.forEach((form) => {
      const RadioControls = new RadioControlsClass(form);
      RadioControls.init();
    });
  }
}
