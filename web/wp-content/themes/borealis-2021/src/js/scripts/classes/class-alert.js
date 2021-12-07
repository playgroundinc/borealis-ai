export default class Alert {
    constructor(element, nav = null) {
        this.element = element;
        this.nav = nav;
        this.navHeight = this.nav ? nav.offsetHeight : null;
        this.hidden = false;
        this.tempHidden = false;
        this.dismiss = null;
        this.cookie = null;
        this.maxAge = null;
        this.defaultDesktopTop = 30;
        this.desktopGap = 30;
        this.desktopBreakpoint = 1440;
        this.hideAlert = this.hideAlert.bind(this);
        this.handleDismiss = this.handleDismiss.bind(this);
        this.setNavTop = this.setNavTop.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleMobileMenu = this.handleMobileMenu.bind(this);
    }

    setState(name, value) {
        this[name] = value;
    }

    setCookie() {
        const cookie = `STYXKEY-${this.cookie}=true;max-age=${this.maxAge};SameSite=Lax;path=/`;
        document.cookie = cookie;
    }

    handleDismiss(e) {
        e.preventDefault();
        this.setState('hidden', true);
        this.hideAlert();
        this.setCookie();
    }

    hideAlert(e) {
        this.element.classList.add('alert--hidden');
        this.element.classList.remove('alert--active');
        if (this.nav) {
            this.setNavTop();
            this.setHeroPadding();
        }
    }

    addDismissHandler() {
        this.dismiss.addEventListener('click', this.handleDismiss);
    }
    getCookieSettings() {
        const { duration, cookie } = this.dismiss.dataset;
        if (duration) {
            this.setState('duration', duration);
        }
        if (cookie) {
            this.setState('cookie', cookie);
        }
    }
    getDismiss() {
        const dismiss = this.element.querySelector('.dismiss-button');
        if (dismiss) {
            this.setState('dismiss', dismiss);
        }
    }
    setHeroPadding() {
        const hero = document.querySelector('.hero');
        const alertBarHeight = this.element.offsetHeight;
        if (window.innerWidth >= 768) {
            if (!this.hidden) {
                hero.style.paddingTop = `${alertBarHeight}px`;
                return;
            }
            hero.style.paddingTop = '0px';
            return;
        }
        if (!this.hidden && !this.tempHidden) {
            hero.style.paddingTop = `${Number(this.navHeight + alertBarHeight)}px`;
            return;
        }
        hero.style.paddingTop = `${this.navHeight}px`;
        

    }
    setMobileNavTop() {
        if (!this.hidden && !this.tempHidden) {
            const alertBarHeight = this.element.offsetHeight;
            this.nav.style.top = `${alertBarHeight}px`;
            return;
        }
        this.nav.style.top = '0px';
    }
    
    setDesktopNavTop() {
        if (!this.hidden && !this.tempHidden) {
            const alertBarHeight = this.element.offsetHeight;
            const newTop = Number(alertBarHeight + this.desktopGap);
            this.nav.style.top = `${newTop}px`;
            return;
        }
    
        this.nav.style.top = `${this.defaultDesktopTop}px`;
    }
    setNavTop() {
        if (window.innerWidth >= this.desktopBreakpoint) {
            this.setDesktopNavTop();
            return;
        }
        this.setMobileNavTop();
    }

    showAlert() {
        if (!this.hidden && !this.tempHidden) {
            this.element.classList.add('alert--active');
            this.element.classList.remove('alert--hidden');
            if (this.nav) {
                this.setNavTop();
                this.setHeroPadding();
            }
        }
    }

    handleMobileMenu(e) {
        if (!this.hidden) {
            const open = e.currentTarget.getAttribute('aria-expanded');
            if (open === 'false' || !open) {
                this.setState('tempHidden', true);
                this.hideAlert();
                return;
            }
            this.setState('tempHidden', false);
            this.showAlert();
        }
    }

    addMobileMenuHandler() {
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', this.handleMobileMenu);
        } 
    }

    handleResize() {
        if (window.innerWidth >= this.desktopBreakpoint  && this.tempHidden) {
            this.setState('tempHidden', false);
            this.showAlert();
        }
        if (this.nav) {
            this.setNavTop();
            this.setHeroPadding();
        }
    }

    init() {
        this.showAlert();
        this.getDismiss();
        this.addMobileMenuHandler();
        if (this.dismiss) {
            this.getCookieSettings();
            this.addDismissHandler()
        }
        if (this.nav) {
            this.setNavTop();
            this.setHeroPadding();
        }
        window.addEventListener('resize', this.handleResize);
    }
}