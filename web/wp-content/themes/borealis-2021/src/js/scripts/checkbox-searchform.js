import QueryParams from "./classes/class-query-params";

export default function checkboxSearchForm(container, setCount, isJobs = false) {
    let selections = {};
    // Checkbox elements
    const checkboxEls = container.querySelectorAll("input[type='checkbox']");
    const checkboxElsLabels = container.querySelectorAll("label");

    // Params and current values
    const params = new QueryParams(container.id);
    const currentValues = params.getParam(container.id);
    // Clear all button
    const clearAll = document.querySelector(".clear-checkboxes");
    // Topics increment/decrement vars
    const topics = document.querySelector(".topics");
    let topicsNum = parseInt(topics.innerHTML);
    let count = setCount(topicsNum);

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
        count = setCount("clear");
        topics.innerHTML = count;
    }

    // Handles checking of checkboxes and updating of params
    if (currentValues) {
        checkboxEls.forEach((checkbox) => {
            if (currentValues.split(",").includes(checkbox.value)) {
                // Increment topics number
                count = setCount("check");
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
    topics.innerHTML = count;
    topics.classList.add("opacity-100");

    // Add event listener to checkboxes to updateUrl with term id's
    for (let i = 0; i < checkboxEls.length; i++) {
        checkboxEls[i].addEventListener("click", updateUrl);
        checkboxElsLabels[i].addEventListener("keydown", updateUrl);
    }

    function updateUrl(e) {
        // i
        // console.log(e.keyCode === 32);
        if (isJobs) {
            checkboxEls.forEach((item) => {
                if (item !== e.target) item.checked = false;
            });
        } else {
            if (e.target.checked) {
                // Increment topics number
                count = setCount("check");
                topics.innerHTML = count;
                // Add to selections object
                selections[e.target.id] = {
                    name: e.target.name,
                    value: e.target.value,
                };
            } else {
                // Decrement topics number
                count = setCount("uncheck");
                topics.innerHTML = count;
                // Remove from selections object AND params
                delete selections[e.target.id];
            }
            const results = [];
            for (let key in selections) {
                results.push(selections[key].value);
            }
            params.setParam(results.join(","));
        }
    }
}