export default class NavScroll {
    constructor(nav) {
        this.nav = nav;
        this.hero = document.querySelector("#masthead");
        this.heroHeight = this.hero.offsetHeight;
        this.navContainer = this.nav.querySelector(".nav-container");
        this.scroll = scrollY;
        this.handleScroll = this.handleScroll.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }
    setState(name, value) {
        this[name] = value;
    }

    setScroll(currentScroll) {
        this.setState("scroll", currentScroll);
    }

    showNav() {
        this.nav.classList.remove("-top-full");
    }

    hideNav() {
        this.nav.classList.add("-top-full");
    }

    handleFocus() {
        this.showNav();
    }

    toggleNavigationClasses(belowFold) {
        if (belowFold) {
            this.navContainer.classList.add("bg-primary-navy-400");
            this.navContainer.classList.remove("bg-transparent");
            return;
        }
        this.navContainer.classList.add("bg-transparent");
        this.navContainer.classList.remove("bg-primary-navy-400");
    }

    handleHero() {
        if (scrollY > this.heroHeight) {
            this.toggleNavigationClasses(true);
            return;
        }
        this.toggleNavigationClasses(false);
    }

    handleScroll() {
        const currentScroll = scrollY;
        if (document.body.classList.contains("home")) {
            this.handleHero();
        }
        if (currentScroll < this.scroll || currentScroll <= 200) {
            this.showNav();
            this.setScroll(currentScroll);
            return;
        }

        this.hideNav();
        this.setScroll(currentScroll);
    }
}