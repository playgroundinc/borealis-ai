import { slideToggle }  from "./slide-toggle";

export default class MenuToggle {
    constructor(button, id) {
        this.button = button;
        this.breakpoint = 768;
        this.id = id;
        this.active = false;
        this.header = null;
        this.focusable = null;
        this.mobile = true;
        this.firstElement = null;
        this.lastElement = null;
        this.headerTop = null;
        this.handleEsc = this.handleEsc.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleFirstElement = this.handleFirstElement.bind(this);
        this.handleLastElement = this.handleLastElement.bind(this);
        this.getElements = this.getElements.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
    }

    setState(name, value) {
        this[name] = value;
    }

    toggleBodyClass() {
        if (this.active) {
            this.body.classList.add('overflow-hidden');
            return;
        }
        this.body.classList.remove('overflow-hidden');
    }


    toggleMenu() {
        if (this.active) {
            this.header.classList.remove('-left-full');
            this.header.classList.add('left-0');
            this.header.classList.remove('opacity-0');
            this.header.classList.add('opacity-100');
            const firstMenuItem = this.header.querySelector('a');
            firstMenuItem.focus();
            return;
        }
        this.header.classList.add('-left-full');
        this.header.classList.remove('left-0')
        this.header.classList.add('opacity-0');
        this.header.classList.remove('opacity-100');

    }

    toggleActive() {
        const status = !this.active;
        this.button.setAttribute('aria-expanded', `${status}`);
        this.setState('active', status);
        this.toggleBodyClass();
        this.toggleMenu();
    }

    handleClick(e) {
        e.preventDefault()
        this.toggleActive();
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
        const closeBtn = this.header.querySelector('button');
        if (closeBtn) {
            this.setState('firstElement', closeBtn);
            this.firstElement.addEventListener('click', this.handleClick);
            return;
        }
        this.setState('firstElement', this.button);
    }

    getElements() {
        const elements = [...this.header.querySelectorAll('a')];
        elements.forEach((element) => {
            element.addEventListener('click', this.toggleActive);
        })
    }


    getLastElement() {
        const allBtns = [...this.header.querySelectorAll('a')];
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
        this.firstElement.addEventListener('keydown', this.handleFirstElement);
    }

    getTargets() {
        const body = document.body;
        this.setState('body', body);
        const header = document.querySelector(`#${this.id}`);
        this.setState('header', header);
    }

    handleEsc(e) {
        if (this.active && this.mobile && e.keyCode === 27) {
            this.toggleActive();
        }
    }

    init() {
        this.getTargets();
        this.setMobile();
        this.trapFocus();
        this.getElements();
        this.header.addEventListener('keydown', this.handleEsc);
        this.button.addEventListener('click', this.handleClick);
        window.addEventListener('resize', this.handleResize);
    }
}