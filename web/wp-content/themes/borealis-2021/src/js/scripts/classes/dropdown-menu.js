import { slideToggle }  from "./slide-toggle";

export default class DropdownMenu {
    constructor(menuItem) {
        this.menuItem = menuItem;
        this.link = null;
        this.submenu = null;
    }

    setState(name, value) {
        this[name] = value;
    }

    getLink() {
        const link = this.menuItem.querySelector('.menu-item__parent');
        if (link) {
            this.setState('link', link);
        }
    }

    getSubmenu() {
        const submenu = this.menuItem.querySelector('.submenu');
        if (submenu) {
            this.setState('submenu', submenu);
        }
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

    toggleActive() {
        if (this.submenu.classList.contains('submenu--active')) {
            this.submenu.classList.remove('submenu--active');
            this.link.setAttribute('aria-expanded', false);
            return;
        }
        this.clearActive();
        this.submenu.classList.add('submenu--active');
        this.link.setAttribute('aria-expanded', true);
    }

    handleClick(e) {
        e.preventDefault();
        this.toggleActive();
        slideToggle(this.submenu);
    }

    clearChildren() {
        const fields = ['link', 'submenu'];
        fields.forEach((field) => {
            this.setState(field, null);
        });
        return;
    }

    addListeners() {
        this.clearChildren();
        this.getLink();
        this.getSubmenu();
        if (this.link && this.submenu) {
            this.link.addEventListener('click',  this.handleClick.bind(this) );
        }
    }

    addDropdowns() {
        if (this.menuItem) {
            this.addListeners();
        }
    };
}