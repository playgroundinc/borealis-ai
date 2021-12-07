export default class NavScroll {
    constructor(nav, hero, alertBar) {
        this.nav = nav;
        this.hero = hero;
        this.alertBar = alertBar ? alertBar : false;
        this.heroHeight = this.hero.offsetHeight;
        this.scroll = pageYOffset;
        this.hidden = false;
        this.top = 0;
        this.defaultTop = window.innerWidth >= 1440 ? 30 : 0;
        this.children = [];
        this.handleScroll = this.handleScroll.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }
    setState(name, value) {
        this[name] = value;
    }

    setScroll(currentScroll) {
        this.setState('scroll', currentScroll);
    }

    getChildren() {
        const childLinks = [...this.nav.querySelectorAll('button, a')];
        if (childLinks.length) {
            this.setState('children', childLinks);
            return;
        }
    }

    setTop() {
        const top = this.alertBar && !this.alertBar.classList.contains('alert--hidden') ? this.alertBar.offsetHeight + this.defaultTop : this.defaultTop;
        this.setState('top', top);
    }

    setNavTop() {
        this.nav.style.top = `${this.top}px`;
    }

    showNav() {
        if (this.hidden) {
            this.setTop();
            this.setState('hidden', false);
            this.nav.classList.remove('scroll--hidden');
            this.setNavTop();
        }
    }

    hideNav() {
        this.setState('hidden', true);
        this.nav.classList.add('scroll--hidden');
        this.nav.style.top = `${-1 * this.nav.offsetHeight}px`;
    }

    handleFocus() {
        if (this.hidden) {
            this.showNav();
        }
    }
    handleChildren() {
        this.getChildren();
        if (this.children.length) {
            this.children.forEach((child) => {
                child.addEventListener('focus', this.handleFocus);
            })
        }
    }
    handleResize() {
        if (window.innerWidth >= 1440) {
            this.setState('defaultTop', 30);
            this.setTop();
            this.setNavTop();
            return;
        }        
        this.setState('defaultTop', 0);
        this.setTop();
        this.setNavTop();
    }

    handleScroll() {
        const currentScroll = pageYOffset;
        if (currentScroll < this.heroHeight || currentScroll < this.scroll) {
            this.setScroll(currentScroll);
            this.showNav();
            return;
        }
        if (!this.hidden) {
            const navStyles = window.getComputedStyle(this.nav);  
            this.setTop();
            this.hideNav();
            this.setScroll(currentScroll);
        }
        this.setScroll(currentScroll);
    }
}