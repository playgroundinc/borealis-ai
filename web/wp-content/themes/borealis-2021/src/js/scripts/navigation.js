/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

import DropdownMenu from "./classes/dropdown-menu";
import MenuToggle from "./classes/menu-toggle";
import NavScroll from "./classes/class-nav-scroll";

export default function navigation() {

    const getMenus = () => {
        const menus = [...document.querySelectorAll('.dropdown-menu')];
        return menus;
    };
    
    const getParents = (menu) => {
        const parentItems = [...menu.querySelectorAll('.menu-item-has-children')];
        return parentItems;
    };

    const getNav = () => {
        const nav = document.querySelector('.header');
        if (nav) {
            return nav;
        }
        return false;
    }

    const getAlertBar = () => {
        const alertBar = document.querySelector('.alert-bar');
        if (alertBar) {
            return alertBar;
        }
        return false;
    }

    const getHero = () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            return hero;
        }
        return false;
    }

    const addDropdowns = (parents) => {
        parents.forEach((item) => {
            const Menu = new DropdownMenu(item);
            Menu.addDropdowns();
        });
    }  

    const addToggle = () => {
        const button = document.querySelector('.menu-toggle');
        const id = button.dataset.toggle;
        const Toggle = new MenuToggle(button, id);
        Toggle.init();
    }

    const addNavHandlers = () => {
        const nav = getNav();
        const hero = getHero();
        const alertBar = getAlertBar();
        if (hero && nav) {
            const NavScrollClass = new NavScroll(nav, hero, alertBar);
            NavScrollClass.handleChildren();
            window.addEventListener('scroll', NavScrollClass.handleScroll);
            window.addEventListener('resize', NavScrollClass.handleResize);
        }
    }

    const addMenuHandlers = () => {
        const menus = getMenus();
        if (menus.length) {
            menus.forEach((menu) => {
                const parents = getParents(menu);
                if (parents && parents.length) {
                    addDropdowns(parents);
                }
            });
        }
    }

    const init = () => {
        addMenuHandlers();
        addToggle();
        addNavHandlers();
    }

    init();
};
