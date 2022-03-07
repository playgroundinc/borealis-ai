function tabbedContent(tabContainer) {
    const jobNav = tabContainer.classList.contains("jobs");
    const tabs = tabContainer.querySelectorAll("[role=tab]");
    const tabList = tabContainer.querySelector("[role=tablist]");
    const isSearchNav = tabContainer.id === "search-nav";

    const classToggle = (el, classToRemove, classToAdd) => {
        if (classToAdd) {
            el.classList.add(classToAdd);
        }
        if (classToRemove) {
            el.classList.remove(classToRemove);
        }
    };

    for (i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", showTabPanel);
    }

    function showTabPanel(el) {
        el.preventDefault();
        for (i = 0; i < tabs.length; i++) {
            tabs[i].setAttribute("aria-selected", "false");
            if (isSearchNav) {
                classToggle(tabs[i], "border-b-4", "border-b-0");
            } else if (jobNav) {
                classToggle(tabs[i], "pill-active", null);
            } else {
                classToggle(tabs[i], "pill-secondary-active", null);
            }
        }

        el.target.setAttribute("aria-selected", "true");
        if (isSearchNav) {
            classToggle(el.target, "border-b-0", "border-b-4");
        } else if (jobNav) {
            classToggle(el.target, null, "pill-active");
        } else {
            classToggle(el.target, null, "pill-secondary-active");
        }

        const tabPanelToOpen = el.target.getAttribute("aria-controls");
        const tabPanels = tabContainer.querySelectorAll("[role=tabpanel]");

        for (i = 0; i < tabPanels.length; i++) {
            classToggle(tabPanels[i], "flex", "hidden");
        }

        classToggle(
            tabContainer.querySelector(`[id='${tabPanelToOpen}']`),
            "hidden",
            "flex"
        );
    }

    tabList.addEventListener("keydown", (e) => {
        if (e.keyCode === 37 || e.keyCode === 38) {
            if (e.target.previousElementSibling !== null) {
                e.target.previousElementSibling.focus();
                e.preventDefault();
            }
        }

        if (e.keyCode === 39 || e.keyCode === 40) {
            if (e.target.nextElementSibling !== null) {
                e.target.nextElementSibling.focus();
                e.preventDefault();
            }
        }
    });
}

const tabContainers = document.querySelectorAll(".tab-container");
tabContainers.forEach((tabContainer) => tabbedContent(tabContainer));