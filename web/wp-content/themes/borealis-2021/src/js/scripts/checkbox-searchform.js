import QueryParams from "./classes/class-query-params";

export default function checkboxSearchForm(container) {
  let selections = {};
  // Checkbox elements
  const checkboxEls = container.querySelectorAll("input[type='checkbox']");
  // Params and current values
  const params = new QueryParams(container.id);
  const currentValues = params.getParam(container.id);
  // Clear all button
  const clearAll = document.querySelector(".clear-checkboxes");
  // Topics increment/decrement vars
  const topics = document.querySelector(".topics");
  let topicsNum = parseInt(topics.innerHTML);


  // Handles clear all button functionality
  clearAll.addEventListener("click", clearAllCheckboxes);
  function clearAllCheckboxes() {
    // Uncheck all checkboxes
    checkboxEls.forEach((checkbox) => {
      checkbox.checked = false;
    });
    // Clear all params
    params.deleteParams();
    // Set selections to empty object
    selections = {};
    // Update topics number
    topicsNum = 0;
    topics.innerHTML = topicsNum;
  }

  // Handles checking of checkboxes and updating of params
  if (currentValues) {
    checkboxEls.forEach((checkbox) => {
      if (currentValues.split(",").includes(checkbox.value)) {
        // Increment topics number
        topicsNum += 1;
        // Set checkbox to checked
        checkbox.checked = true;
        // Add to selections object
        selections[checkbox.value] = {
          name: checkbox.value,
          value: checkbox.value,
        };
      }
    });
  }
  // Set topics number
  topics.innerHTML = topicsNum;

  // Add event listener to checkboxes to updateUrl with term id's
  for (let i = 0; i < checkboxEls.length; i++) {
    checkboxEls[i].addEventListener("click", updateUrl);
  }
  function updateUrl(e) {
    if (e.target.checked) {
      // Increment topics number
      topicsNum += 1;
      topics.innerHTML = topicsNum;
      // Add to selections object
      selections[e.target.id] = {
        name: e.target.name,
        value: e.target.value,
      };
    } else {
      // Decrement topics number
      topicsNum -= 1;
      topics.innerHTML = topicsNum;
      // Remove from selections object AND params
      params.setParam("");
      delete selections[e.target.id];
    }

    const results = [];

    for (let key in selections) {
      results.push(selections[key].value);
    }
    // Update params
    console.log(params)
    // params.UrlParams = new URLSearchParams(window.location.search);
    params.setParam(results.join(","));
  }
}

//   Add checkbox functionality to all taxonomy search forms
const checkboxContainers = document.querySelectorAll(".checkbox-form");
checkboxContainers.forEach((checkboxContainer) => {
  checkboxSearchForm(checkboxContainer);
});
