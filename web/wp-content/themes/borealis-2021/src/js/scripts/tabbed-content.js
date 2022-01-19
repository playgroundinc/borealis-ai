function tabbedContent() {
    const tabs = document.querySelectorAll('[role=tab]');

    for (i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", showTabPanel);
    }

    function showTabPanel(el) { 
        const tabs2 = document.querySelectorAll('[role=tab]'); 

        for (i = 0; i < tabs2.length; i++) {
            tabs2[i].setAttribute('aria-selected', 'false');
            tabs2[i].setAttribute('style', 'font-weight:normal');
        } 

        el.target.setAttribute('aria-selected', 'true');
        el.target.setAttribute('style', 'font-weight:bold');

        const tabPanelToOpen = el.target.getAttribute('aria-controls');
        const tabPanels = document.querySelectorAll('[role=tabpanel]');

        for (i = 0; i < tabPanels.length; i++) {
            tabPanels[i].style.display = "none";
        }

        document.getElementById(tabPanelToOpen).style.display = "block";
    }
    
    $('[role=tablist]').keydown(function(e) {
        if (e.keyCode == 37) {
            $("[aria-selected=true]").prev().click().focus();
            e.preventDefault();
        }
        if (e.keyCode == 38) {
            $("[aria-selected=true]").prev().click().focus();
            e.preventDefault();
        }
        if (e.keyCode == 39) {
            $("[aria-selected=true]").next().click().focus();
            e.preventDefault();
        }
        if (e.keyCode == 40) {
            $("[aria-selected=true]").next().click().focus();
            e.preventDefault();
        }
    });
}

tabbedContent();