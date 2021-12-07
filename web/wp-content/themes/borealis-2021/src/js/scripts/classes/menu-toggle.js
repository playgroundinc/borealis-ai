import { slideToggle }  from "./slide-toggle";

export default class MenuToggle {
    constructor(button, id) {
        this.button = button;
        this.breakpoint = 1440;
        this.id = id;
        this.active = false;
        this.elements = [];
        this.header = null;
        this.focusable = null;
        this.mobile = true;
        this.firstElement = null;
        this.lastElement = null;
        this.headerTop = null;
        this.handleEsc = this.handleEsc.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleBodyClick = this.handleBodyClick.bind(this);
        this.handleFirstElement = this.handleFirstElement.bind(this);
        this.handleLastElement = this.handleLastElement.bind(this);
    }

    setState(name, value) {
        this[name] = value;
    }

    getElements() {
        const elements = [...document.querySelectorAll(`.toggle-${this.id}`)];
        this.setState('elements', elements);
        return;
    }

    clearActive() {
        const active = document.querySelector('.submenu--active');
        if (active) {
            slideToggle(active);
            const trigger = active.parentElement.querySelector('.menu-item__link');
            if (trigger) {
                trigger.setAttribute('aria-expanded', false);
            }
            active.classList.remove('submenu--active');
        }
    }

    toggleBodyClass() {
        if (this.active) {
            this.body.classList.add('noscroll');
            return;
        }
        this.body.classList.remove('noscroll');
    }


    toggleMenu() {
        if (this.active) {
            this.header.classList.add('menu--active');
            return;
        }
        this.header.classList.remove('menu--active')
    }

    toggleActive() {
        const status = !this.active;
        this.button.setAttribute('aria-expanded', `${status}`);
        this.setState('active', status);
        this.toggleBodyClass();
        this.toggleMenu();
    }

    handleClick() {
        this.getElements();
        if (this.elements && this.elements.length) {
            this.toggleActive();
        }
    }

    setMobile() {
        const width = window.innerWidth;
        let mobile = true;
        if (width >= this.breakpoint) {
            mobile = false;
        } 
        this.setState('mobile', mobile);
    }

    handleResize() {
        this.setMobile();
        if (!this.mobile) {
            if (this.active) {
                this.toggleActive();
            }
        }
    }

    getFirstElement() {
        const logo = this.header.querySelector('.show-xs .custom-logo-link');
        if (logo) {
            this.setState('firstElement', logo);
            return;
        }
        this.setState('firstElement', this.button);
    }


    getLastElement() {
        const allBtns = [...this.header.querySelectorAll('.btn')];
        const lastBtn = allBtns[allBtns.length - 1];
        this.setState('lastElement', lastBtn);
    }

    getKeyCombination(keyCode, shiftKey) {
        if (keyCode !== 9) {
            return null;
        }
        if (shiftKey) {
            return false;
        }
        return true;
    }

    handleLastElement(e) {
        if (!this.mobile) {
            return;
        }
        const forwards = this.getKeyCombination(e.keyCode, e.shiftKey);
        if (forwards) {
            e.preventDefault();
            this.firstElement.focus();
        }
    }

    handleFirstElement(e) {
        if (!this.active || !this.mobile) {
            return;
        }
        const forwards = this.getKeyCombination(e.keyCode, e.shiftKey);
        if (forwards === false) {
            e.preventDefault();
            this.lastElement.focus();
        }

    }

    trapFocus() {
        this.getFirstElement();
        this.getLastElement();
        this.lastElement.addEventListener('keydown', this.handleLastElement);
        this.firstElement.addEventListener('keydonw', this.handleFirstElement);
    }

    getTargets() {
        const body = document.body;
        this.setState('body', body);
        const header = document.querySelector('.header .header__container');
        this.setState('header', header);
    }

    handleEsc(e) {
        if (this.active && this.mobile && e.keyCode === 27) {
            this.handleClick();
        }
    }

    handleBodyClick(e) {
        if (!e.target.closest('.header')) {
            this.clearActive();
        }
    }

    init() {
        this.getTargets();
        this.setMobile();
        this.trapFocus();
        document.addEventListener('click', this.handleBodyClick);
        this.header.addEventListener('keydown', this.handleEsc);
        this.button.addEventListener('click', this.handleClick);
        window.addEventListener('resize', this.handleResize);
    }
}