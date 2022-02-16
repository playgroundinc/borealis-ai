/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

import MenuToggle from "./classes/menu-toggle";
import NavScroll from "./classes/class-nav-scroll";

export default function navigation() {

    const addToggle = () => {
        const button = document.querySelector('.menu-toggle');
        const id = button.dataset.toggle;
        const Toggle = new MenuToggle(button, id);
        Toggle.init();
    }

    const addNavHandlers = () => {
        const nav = getNav();
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
        // addMenuHandlers();
        addToggle();
        // addNavHandlers();
    }

    init();
};
