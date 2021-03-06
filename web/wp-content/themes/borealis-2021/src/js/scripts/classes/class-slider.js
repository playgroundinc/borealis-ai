import { breakpoints } from "../../../../utils/constants";


export default class Slider {
    constructor(slider, type = 'news') {
        this.slider = slider;
        this.type = type;
        this.slides = [];
        this.container = null;
        this.activeSlide = 1;
        this.prev = null;
        this.next = null;
        this.count = 0;
        this.left = 0;
        this.right = 0;
        this.slideCount = 1;
        this.slideCounts = type === 'testimonial' ? { sm: 1, md: 1, tb: 1, lg: 1, xl: 1 } : { sm: 2, md: 2, tb: 4, lg: 4, xl: 4, };
        this.breakpoints = breakpoints;
        this.breakpoint = null;
        this.current = null;
        this.pageXStart = null;
        this.pageXEnd = null;
        this.button = null;
        this.getSlides = this.getSlides.bind(this);
        this.getBreakpoint = this.getBreakpoint.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.getSlideHeights = this.getSlideHeights.bind(this);
    }
    setState(name, value) {
        this[name] = value;
    }
    setAriaLabel() {
        const count = this.slides.length;
        this.slides.forEach((slide, index) => {
            const current = Number(index) + 1;
            slide.setAttribute('aria-label', `${current} of ${count}`);
        });
    }
    getButtons() {
        const nextBtn = this.slider.querySelector('.slider-block__next');
        this.setState('next', nextBtn);
        const prevBtn = this.slider.querySelector('.slider-block__prev');
        this.setState('prev', prevBtn);
    }
    getContainer() {
        const container = this.slider.querySelector('.slider-block');
        this.setState('container', container);
    }
    getCounters() {
        const total = this.slider.querySelector('.slider-block__count__total');
        const current = this.slider.querySelector('.slider-block__count__current');
        this.setState('total', total);
        this.setState('current', current);
    }

    getElements() {
        this.getButtons();
        this.getContainer();
        this.getCounters();
    }
    getBreakpoint() {
        if (window.innerWidth < this.breakpoints.sm) {
            this.setState('breakpoint', false);
            return;
        }
        for (let breakpoint in this.breakpoints) {
            if (window.innerWidth >= this.breakpoints[breakpoint]) {
                this.setState('breakpoint', breakpoint);
            }
        }
    }
    getCount() {
        if (this.breakpoint && this.slideCounts[this.breakpoint]) {
            this.setState('slideCount', this.slideCounts[this.breakpoint]);
            return;
        }
        this.setState('slideCount', 1);
    }
    setTotal() {
        const totalSlides = Math.ceil(this.slides.length / this.slideCount);
        if (totalSlides > 1) {
            this.total.innerText = totalSlides;
            return;
        }
        this.total.innerText = '1';
        this.next.setAttribute('disabled', true);
        this.prev.setAttribute('disabled', true);
    }
    setCounter() {
        this.current.innerText = this.activeSlide;
    }
    getSlides() {
        const slides = [...this.slider.querySelectorAll('.slide')];
        this.setState('slides', slides);
    }
    hideCarousel() {
        this.slider.classList.add('hide-xs');
    }
    conditionalEvents() {
        if (this.current) {
            this.setCount();
        }
    }
    setSliderPosition() {
        this.container.style.left = `${this.left}%`;
        this.container.style.right = `${this.right}%`;
    }
    handleNext(e) {
        if (e) {
            e.preventDefault();
        }
        const nextPage = Number(this.slideCount) * Number(this.activeSlide + 1);
        const currentPage = Number(this.activeSlide * this.slideCount);
        let offset = 100;
        if (nextPage - this.slides.length > this.slideCount) {
            return;
        }
        if (nextPage >= this.slides.length) {
            const strays = Number(this.slides.length - currentPage);
            offset = Number(offset / this.slideCount) * strays;
            this.next.setAttribute('disabled', true);
        } 
        this.prev.removeAttribute('disabled');
        this.setState('left', Number(this.left - offset));
        this.setState('right', Number(this.right + offset));
        this.setState('activeSlide', this.activeSlide + 1);
        this.setCounter();
        this.setSliderPosition();
    } 
    handlePrev(e) {
        if (e) {
            e.preventDefault();
        }
        const prevPage = Number(this.activeSlide - 1);
        let offset = 100;
        if (prevPage === 0) {
            return;
        }
        if (prevPage <= 1) {
            this.setState('left', 0);
            this.setState('right', 0);
            this.prev.setAttribute('disabled', true);
            this.next.removeAttribute('disabled');
            this.setState('activeSlide', this.activeSlide - 1);
            this.setSliderPosition();
            this.setCounter();
            return;
        } 
        this.next.removeAttribute('disabled');
        this.setState('left', Number(this.left + offset));
        this.setState('right', Number(this.right - offset));
        this.setState('activeSlide', this.activeSlide - 1);
        this.setSliderPosition();
        this.setCounter();
    }

    handleResize() {
        this.setState('left', 0);
        this.setState('right', 0);
        this.setState('activeSlide', 1);
        this.setSliderPosition();
        this.getBreakpoint();
        this.getCount();
        this.setTotal();
        this.setCounter();
        if (this.slides.length > this.slideCount) {
            this.next.removeAttribute('disabled');
        }
        this.prev.setAttribute('disabled', true);
        if (this.type === 'testimonial') {
            this.getSlideHeights();
        }
    }


    addListeners() {
        this.slides.forEach((slide) => {
            slide.addEventListener('mousedown', this.handleDrag);
            slide.addEventListener('touchstart', this.handleDrag);
        })
        window.addEventListener('resize', this.handleResize);
        this.next.addEventListener('click', this.handleNext);
        this.prev.addEventListener('click', this.handlePrev); 
    }

    handleMouseMove(e) {
        const end = e.touches && e.touches[0].clientX ? e.touches[0].clientX : e.pageX;
        if (end) {
            this.setState('pageXEnd', end);
        }
    }

    triggerClick() {
        if (this.button) {
            this.button.click();
        }
    }

    calculateDrag() {
        const drag = this.pageXEnd - this.pageXStart;
        if (drag > 50) {
            if (this.slides.length > 2) {
                this.handlePrev();
                return;
            } 
            if (this.slides.length > 1) {
                this.handleSinglePrev();
            }
            return;
        }
        if (drag <= -50) {
            if (this.slides.length > 2) {
                this.handleNext();
                return;
            } if (this.slides.length > 1) {
                this.handleSingleNext();
            }
            return;
        }
        this.getButton();
        this.triggerClick();
    }

    getButton() {
        const button = this.slides[this.activeSlide].querySelector('button, a');
        this.setState('button', button);
    }

    handleMouseUp(e) {
        e.preventDefault();
        if (this.pageXStart && this.pageXEnd) {
            this.calculateDrag();
        } else {
            this.getButton();
            this.triggerClick();
        }
        this.setState('pageXStart', null);
        this.setState('pageXEnd', null);
        this.slider.removeEventListener('mousemove', this.handleMouseMove);
        this.slider.removeEventListener('mouseup', this.handleMouseUp);
        this.slider.removeEventListener('touchmove', this.handleMouseMove);
        this.slider.removeEventListener('touchend', this.handleMouseUp);
    }

    handleDrag(e) {
        if (this.slider.classList.contains('slider--links')) {
            return;
        }
        e.preventDefault();
        const start = e.touches && e.touches[0].clientX ? e.touches[0].clientX : e.pageX;
        this.setState('pageXStart', start);
        this.slider.addEventListener('touchmove', this.handleMouseMove);
        this.slider.addEventListener('touchend', this.handleMouseUp);            
        this.slider.addEventListener('mousemove', this.handleMouseMove);
        this.slider.addEventListener('mouseup', this.handleMouseUp);
    }

    getSlideHeights() {
        const parent = this.container.parentElement;
        parent.style.paddingTop = '';
        const heights = this.slides.map((slide) => { 
            const content = slide.querySelector('.container');
            return Number(content.offsetHeight) > 0 ? Number(content.offsetHeight) :  450 
        });
        const maxHeight = Math.max(...heights);
        if (window.innerWidth <= 768) {
            parent.style.paddingTop = parent.dataset?.style === 'dark' ? `${Number(maxHeight + window.innerWidth)}px` : `${Number(maxHeight)}px`;
            return;
        }
        parent.style.paddingTop = `${maxHeight}px`;
    }
    init() {
        this.getSlides();
        if (this.slides.length) {
            this.getElements();
            this.getBreakpoint();
            this.getCount()
            this.setTotal();
            this.addListeners();
            if (this.type === 'testimonial') {
                this.getSlideHeights();
            } 
            return;
        }
        // this.hideCarousel();
    }
}