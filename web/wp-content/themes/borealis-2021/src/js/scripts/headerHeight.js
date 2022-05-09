function headerHeight() {
    const headerHeight = document.getElementsByClassName("nav-height-resize")[0];

    if (headerHeight) {
        const totalNavHeight = document.getElementById("main-navigation").offsetHeight + document.getElementsByClassName("current_page_item")[0].children[1].offsetHeight;
        headerHeight.style.height = `${totalNavHeight + 20}px`;

        const resizeHeader = () => {
            const totalNavHeightResize = document.getElementById("main-navigation").offsetHeight + document.getElementsByClassName("current_page_item")[0].children[1].offsetHeight;
            headerHeight.style.height = `${totalNavHeightResize + 20}px`;
        };

        window.addEventListener("resize", resizeHeader);
    }
}

headerHeight();