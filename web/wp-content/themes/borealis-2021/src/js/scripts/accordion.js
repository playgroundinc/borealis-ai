import Accordion from './classes/class-accordion';

export default function accordion() {

    const getTriggers = (block) => {
        const triggers = [...block.querySelectorAll('.accordion-row__header')];
        if (triggers && triggers.length) {
            triggers.forEach((trigger, index) => {
                const AccordionControl = new Accordion(block, trigger, triggers, index);
                AccordionControl.addTriggerClickHandlers();
            });
        }
    }
    const accordionBlocks = [...document.querySelectorAll('.accordion-block')];
    if (accordionBlocks && accordionBlocks.length) {
        accordionBlocks.forEach((block) => {
            getTriggers(block);
        });
    }
}