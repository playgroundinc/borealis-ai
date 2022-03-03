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

    const getNav = () => {
        const nav = document.querySelector('#main-navigation');
        return nav;
    }

    const addNavHandlers = () => {
        const nav = getNav();
        if (nav) {
            const NavScrollClass = new NavScroll(nav);
            window.addEventListener('scroll', NavScrollClass.handleScroll);
        }
    }

    const init = () => {
        addNavHandlers();
        addToggle();
    }

    init();
};
