function tabbedContent(tabContainer) {
    const tabs = tabContainer.querySelectorAll('[role=tab]');
    const tabList = tabContainer.querySelector('[role=tablist]');
    const isSearchNav = tabContainer.id === 'search-nav';

    const classToggle = (el, classToRemove, classToAdd) => {
        el.classList.remove(classToRemove);
        el.classList.add(classToAdd);
    }

    for (i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', showTabPanel);
    }

    function showTabPanel(el) { 
        for (i = 0; i < tabs.length; i++) {
            tabs[i].setAttribute('aria-selected', 'false');
            if(isSearchNav) {
                classToggle(tabs[i], 'border-b-4', 'border-b-0');
            } else {
                classToggle(tabs[i], 'font-bold', 'font-normal');
            }
        } 

        el.target.setAttribute('aria-selected', 'true');
        if(isSearchNav) {
            classToggle(el.target, 'border-b-0', 'border-b-4');
        } else {
            classToggle(el.target, 'font-normal', 'font-bold');
        }
        
        const tabPanelToOpen = el.target.getAttribute('aria-controls');
        const tabPanels = tabContainer.querySelectorAll('[role=tabpanel]');

        for (i = 0; i < tabPanels.length; i++) {
            classToggle(tabPanels[i], 'block', 'hidden');
        }      
        classToggle(tabContainer.querySelector(`#${tabPanelToOpen}`), 'hidden', 'block');
    }

    tabList.addEventListener('keydown', e => {        
        if (e.keyCode === 37 || e.keyCode === 38) {
            if(e.target.previousElementSibling !== null) {
                e.target.previousElementSibling.focus();
                e.preventDefault();
            }
        }

        if (e.keyCode === 39 || e.keyCode === 40) {
            if(e.target.nextElementSibling !== null) {
                e.target.nextElementSibling.focus();
                e.preventDefault();
            }
        }
    });
}

const tabContainers = document.querySelectorAll('.tab-container');
tabContainers.forEach(tabContainer => tabbedContent(tabContainer))