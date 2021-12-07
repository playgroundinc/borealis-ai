export default class Slider {
    constructor(slider) {
        this.slider = slider;
        this.slides = [];
        this.activeSlide = null;
        this.caption = null;
        this.prev = null;
        this.next = null;
        this.count = null;
        this.percentage = 0;
        this.current = null;
        this.pageXStart = null;
        this.pageXEnd = null;
        this.button = null;
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleSingleNext = this.handleSingleNext.bind(this);
        this.handleSinglePrev = this.handleSinglePrev.bind(this);
        this.singlePrev = this.singlePrev.bind(this);
        this.singleNext = this.singleNext.bind(this);
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
    setPrevSlide() {
        const previousSlide = this.slider.querySelector('.slide--prev');
        if (previousSlide) {
            previousSlide.classList.remove('slide--prev');
        }
        if (Number(this.activeSlide) > 0) {
            this.slides[this.activeSlide - 1].classList.add('slide--prev');
            return;
        } 
        this.slides[this.slides.length - 1].classList.add('slide--prev');
    }

    setNextSlide() {
        const nextSlide = this.slider.querySelector('.slide--next');
        if (nextSlide) {
            nextSlide.classList.remove('slide--next');
        }
        if (Number(this.activeSlide) === Number(this.slides.length - 1)) {
            this.slides[0].classList.add('slide--next');
            return;
        } 
        const nextIndex = Number(this.activeSlide + 1);
        this.slides[nextIndex].classList.add('slide--next');
    }
    setActiveSlide() {
        if (this.slides.length > 2) {
            this.setNextSlide();
            this.setPrevSlide();
        }
        this.slides[this.activeSlide].classList.add('slide--active');
    }
    getButtons() {
        const nextBtn = this.slider.querySelector('.slider-block__next');
        this.setState('next', nextBtn);
        const prevBtn = this.slider.querySelector('.slider-block__prev');
        this.setState('prev', prevBtn);
    }
    getCounters() {
        const total = this.slider.querySelector('.slider-block__count__total');
        const current = this.slider.querySelector('.slider-block__count__current');
        const percentage = this.slider.querySelector('.slider-block__count__percentage--active');
        this.setState('total', total);
        this.setState('current', current);
        this.setState('percentage', percentage);
    }
    getCaption() {
        const caption = this.slider.querySelector('.slider-block__caption');
        this.setState('caption', caption);
    }

    getElements() {
        this.getButtons();
        this.getCounters();
        this.getCaption();
    }
    setTotal() {
        this.total.innerText = this.slides.length < 10 ? '0' + `${this.slides.length}` : this.slides.length;
    }
    setCount() {
        this.current.innerText = Number(this.activeSlide + 1) < 10 ? '0' + `${Number(this.activeSlide + 1)}` : Number(this.activeSlide);
        const currentPercentage =  100 *((Number(this.activeSlide) + 1) / Number(this.slides.length));
        this.percentage.style.width = `${currentPercentage}%`;
    }
    setCaption() {
        if (this.slides[this.activeSlide].dataset.caption) {
            this.caption.innerText = this.slides[this.activeSlide].dataset.caption;
            return;
        }
        this.caption.innerText = '';
    }
    setActive() {
        this.setState('activeSlide', 0);
        this.setActiveSlide();
        this.setAriaLabel();
        if (this.caption) {
            this.setCaption();
        }
        if (this.total) {
            this.setTotal();
        }
        if (this.current) {
            this.setCount();
        }
    }
    getSlides() {
        const slides = [...this.slider.querySelectorAll('.slide')];
        this.setState('slides', slides);
    }
    hideCarousel() {
        this.slider.classList.add('hide-xs');
    }
    conditionalEvents() {
        if (this.caption) {
            this.setCaption();
        }
        if (this.current) {
            this.setCount();
        }
    }
    handleNext(e) {
        if (e) {
            e.preventDefault();
        }
        this.handleVideo();
        this.slides[this.activeSlide].classList.remove('slide--active');
        const nextSlide = Number(this.activeSlide) !== Number(this.slides.length - 1) ? Number(this.activeSlide + 1) : 0;
        this.setState('activeSlide', nextSlide);
        this.setActiveSlide();
        this.conditionalEvents();
    } 
    handlePrev(e) {
        if (e) {
            e.preventDefault();
        }
        this.handleVideo();
        this.slides[this.activeSlide].classList.remove('slide--active');
        const activeSlide = Number(this.activeSlide) > 0 ? Number(this.activeSlide - 1) : Number(this.slides.length - 1);
        this.setState('activeSlide', activeSlide);
        this.setActiveSlide();
        this.conditionalEvents();
    }
    singlePrev() {
        this.slides[this.activeSlide].classList.add('slide--active');
        this.slides[this.activeSlide].classList.remove('slide--prev');
        this.setCount();
    }
    singleNext() {
        this.slides[this.activeSlide].classList.add('slide--active');
        this.slides[this.activeSlide].classList.remove('slide--next');
        this.setCount();
    }
    setSingleNextSlide() {
        if (this.slides[this.activeSlide].classList.contains('slide--prev')) {
            this.slides[this.activeSlide].classList.remove('slide--prev');
        }
        this.slides[this.activeSlide].classList.add('slide--next');
        setTimeout(this.singleNext, 300);
        this.conditionalEvents();
        return;
    }
    setSinglePrevSlide() {
        if (this.slides[this.activeSlide].classList.contains('slide--next')) {
            this.slides[this.activeSlide].classList.remove('slide--next');
        }
        this.slides[this.activeSlide].classList.add('slide--prev');
        setTimeout(this.singlePrev, 300);
        this.conditionalEvents();
        return;
    }
    handleVideo() {
        const video = this.slides[this.activeSlide].querySelector('video');
        if (video) {
            video.pause();
        }
    }
    handleSingleNext(e) {
        if (e) {
            e.preventDefault();
        }
        this.handleVideo();
        this.slides[this.activeSlide].classList.remove('slide--active');
        this.slides[this.activeSlide].classList.add('slide--prev');
        if (this.activeSlide === 0) {
            this.setState('activeSlide', 1);
            this.setSingleNextSlide();
            return;
        }
        this.setState('activeSlide', 0);
        this.setSingleNextSlide();
    }

    handleSinglePrev(e) {
        if (e) {
            e.preventDefault();
        }
        this.handleVideo();
        this.slides[this.activeSlide].classList.remove('slide--active');
        this.slides[this.activeSlide].classList.add('slide--next');
        if (this.activeSlide === 0) {
            this.setState('activeSlide', 1);
            this.setSinglePrevSlide();
            return;
        }
        this.setState('activeSlide', 0);
        this.setSinglePrevSlide();
    }
    addListeners() {
        this.slides.forEach((slide) => {
            slide.addEventListener('mousedown', this.handleDrag);
            slide.addEventListener('touchstart', this.handleDrag);
        })
        if (this.slides.length > 2) {
            this.next.addEventListener('click', this.handleNext);
            this.prev.addEventListener('click', this.handlePrev);
            return;
        } 
        if (this.slides.length > 1) {
            this.next.addEventListener('click', this.handleSingleNext);
            this.prev.addEventListener('click', this.handleSinglePrev);
            return;
        } 
        this.prev.setAttribute('disabled', true);
        this.next.setAttribute('disabled', true);
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
    init() {
        this.getSlides();
        if (this.slides.length) {
            this.getElements();
            this.setActive();
            this.addListeners();
            return;
        }
        this.hideCarousel();
    }
}