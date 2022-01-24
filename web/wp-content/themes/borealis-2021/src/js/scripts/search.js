import SearchBarClass from "./classes/class-search";
import QueryParams from "./classes/class-query-params";

export default function search() {
  const searchForm = [...document.querySelectorAll(".search-form")];

  if (searchForm && searchForm.length > 0) {
    searchForm.forEach((form) => {
      const SearchBar = new SearchBarClass(form);
      SearchBar.init();
    });
  }

  const checkboxSearchForm = (container) => {
    let selections = {};
    const checkboxEls = document.querySelectorAll("input[type='checkbox']");
    const params = new QueryParams(container.id);
    const currentValues = params.getParam(container.id);
    const clearAll = document.querySelector(".clear-checkboxes");
    const topics = document.querySelector(".topics");
    let topicsNum = parseInt(topics.innerHTML);

    clearAll.addEventListener("click", clearAllCheckboxes);

    if (currentValues) {
      checkboxEls.forEach((checkbox) => {
        if (currentValues.split(",").includes(checkbox.value)) {
          topicsNum += 1;
          checkbox.checked = true;
        }
      });
    }
    topics.innerHTML = topicsNum;

    function clearAllCheckboxes() {
      checkboxEls.forEach((checkbox) => {
        checkbox.checked = false;
      });
      params.setParam("", "");
      selections = {};
      topicsNum = 0;
      topics.innerHTML = topicsNum;
    }

    for (let i = 0; i < checkboxEls.length; i++) {
      checkboxEls[i].addEventListener("click", updateUrl);
    }

    function updateUrl(e) {
      if (e.target.checked) {
        topicsNum += 1;
        topics.innerHTML = topicsNum;
        selections[e.target.id] = {
          name: e.target.name,
          value: e.target.value,
        };
      } else {
        topicsNum -= 1;
        topics.innerHTML = topicsNum;
        params.setParam("");
        delete selections[e.target.id];
        const leftovers = [];
        checkboxEls.forEach((checkbox) => {
          checkbox.checked === true ? leftovers.push(checkbox.value) : "";
        });
        params.setParam(leftovers.join(","));
      }

      const results = [];

      for (let key in selections) {
        results.push(selections[key].value);
      }

      let uniqArr = [...new Set(results)];

      if(currentValues !== "") {
        //   console.log('aadsadass')
        //   console.log(current)
      }

      if (uniqArr.length > 0) {
        params.setParam(uniqArr.join(","));
      }
    }
  };

  const checkboxContainers = document.querySelectorAll(".checkbox-form");
  checkboxContainers.forEach((checkboxContainer) =>
    checkboxSearchForm(checkboxContainer)
  );
}
