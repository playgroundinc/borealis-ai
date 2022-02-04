import { slideToggle }  from "./slide-toggle";

export default class Accordion {
    constructor(accordion, trigger, elements, index) {
        this.accordion = accordion;
        this.trigger = trigger;
        this.elements = elements;
        this.chevron = this.trigger.querySelector('.icon-chevron');
        this.index = index;
        this.first = null;
        this.last = null;
        this.active = false;
        this.panel = null;
        this.handleTriggerClick = this.handleTriggerClick.bind(this)
        this.handleArrowControls = this.handleArrowControls.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    setState(name, value) {
        this[name] = value;
    }

    moveFocus($parent) {
        $header = $parent.find('.accordion-row__header');
        $header.focus();
    }
    
    handleUpKey() {
        const prevIndex = this.index - 1;
        if (this.elements[prevIndex]) {
            this.elements[prevIndex].focus();
            return;
        }
        this.last.focus();
    }
    
    handleEndKey() {
        this.last.focus();
    }
    
    handleHomeKey() {
        this.first.focus();
    }
    
    handleDownKey() {
        const nextIndex = this.index + 1;
        if (this.elements[nextIndex]) {
            this.elements[nextIndex].focus();
            return;
        }
        this.first.focus();
    }

    
    handleArrowControls(e) {
        // 38 is up
        if (e.keyCode === 38) {
            e.preventDefault();
            this.handleUpKey();
        }
        // 40 is down
        if (e.keyCode === 40) {
            e.preventDefault();
            this.handleDownKey();
        }
        // 35 is end key
        if (e.keyCode === 35) {
            e.preventDefault();
            this.handleEndKey();
        }
        // 36 is home key
        if (e.keyCode === 36) {
            e.preventDefault();
            this.handleHomeKey();
        }

    }

    clearActiveElement(element) {
        this.getPanel(element);
        slideToggle(this.panel);
        element.classList.remove('accordion-row--active');
        element.setAttribute('aria-expanded', false);
        this.getPanel(this.trigger);
    }

    handleWindowResize() {
        if (this.panel.classList.contains('slide-toggle--active')) {
            this.panel.style.maxHeight = 'unset';
            const height = this.panel.offsetHeight;
            this.panel.style.maxHeight = `${height}px`;
        }
    }
    handleActiveElements() {
        const activeElements = [...this.accordion.querySelectorAll('.accordion-row--active')];
        if (activeElements && activeElements.length) {
            activeElements.forEach((element) => {
                this.clearActiveElement(element);
            })
        }
    }


    handleTriggerClick(e) {
        slideToggle(this.panel);
        if (this.trigger.classList.contains('accordion-row--active')) {
            if (this.chevron) {
                this.chevron.classList.add('rotate-0');
                this.chevron.classList.remove('rotate-180');
            }
            this.trigger.classList.remove('accordion-row--active');
            this.trigger.setAttribute('aria-expanded', false);
            return;
        }
        this.handleActiveElements();
        if (this.chevron) {
            this.chevron.classList.add('rotate-180');
            this.chevron.classList.remove('rotate-0');
        }
        this.trigger.setAttribute('aria-expanded', true);
        this.trigger.classList.add('accordion-row--active');
    }

    getPanel(element) {
        const panelId = element.getAttribute('aria-controls');
        const panel = document.getElementById(`${panelId}`);
        this.setState('panel', panel);
    }

    getFirst() {
        const first = this.elements[0];
        this.setState('first', first);
    }

    getLast() {
        const index = this.elements.length - 1;
        const last = this.elements[index];
        this.setState('last', last);
    }
    getRelatedElements() {
        this.getPanel(this.trigger);
        this.getFirst();
        this.getLast();
    }

    addTriggerClickHandlers() {
        this.getRelatedElements();
        this.trigger.addEventListener('click', this.handleTriggerClick);
        this.trigger.addEventListener('keydown', this.handleArrowControls);
        window.addEventListener('resize', this.handleWindowResize);
    }
}