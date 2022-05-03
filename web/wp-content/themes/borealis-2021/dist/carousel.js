/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/scripts/classes/class-slider.js":
/*!************************************************!*\
  !*** ./src/js/scripts/classes/class-slider.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/constants */ "./utils/constants.js");

class Slider {
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
    this.slideCounts = type === 'testimonial' ? {
      sm: 1,
      md: 1,
      tb: 1,
      lg: 1,
      xl: 1
    } : {
      sm: 2,
      md: 2,
      tb: 4,
      lg: 4,
      xl: 4
    };
    this.breakpoints = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.breakpoints;
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
    this.slides.forEach(slide => {
      slide.addEventListener('mousedown', this.handleDrag);
      slide.addEventListener('touchstart', this.handleDrag);
    });
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
      }

      if (this.slides.length > 1) {
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
    const heights = this.slides.map(slide => {
      const content = slide.querySelector('.container');
      return Number(content.offsetHeight) > 0 ? Number(content.offsetHeight) : 450;
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
      this.getCount();
      this.setTotal();
      this.addListeners();

      if (this.type === 'testimonial') {
        this.getSlideHeights();
      }

      return;
    } // this.hideCarousel();

  }

}

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/***/ (function(module) {

// BREAKPOINTS
// Defines the project's breakpoints
// Doesn't use units as I need the bare values for fluid type.
module.exports.breakpoints = {
	sm: 375,
	md: 768,
	tb: 1000,
	lg: 1440,
	xl: 1920,
};

// SPACING
// Genereates a spacing object from a base value up to a max
const generateSpacing = (base = 4, max = 200) => {
	const spacing = {};
	spacing["1/12"] = "calc(100% / 12)";
	spacing["featured-image-sm"] = "268px";
	spacing["featured-image"] = "360px";
	spacing["featured-image-md"] = "450px";
	spacing["full"] = "100%";
	spacing["gallery"] = "600px";
	spacing["team-member"] = "310px";
	spacing["gallery-offset"] = "calc((100vw - 1440px) / 2)";
	spacing["card"] = "calc((100% - 64px) / 3)";
	spacing["video-lg"] = "30%";
	spacing["video-md"] = "34.59%";
	spacing["video"] = "70.17%";
	spacing["2/7"] = "calc((100% / 7) * 2)";
	spacing["3/7"] = "calc((100% / 7) * 3)";

	spacing["fellowship"] = "calc((100% - 28px) / 2)";

	spacing["col-6"] = "calc((100% - 20px) / 2)";
	spacing["col-4"] = "calc((100% - 40px) / 3)";
	spacing["col-3"] = "calc((100% - 60px) / 4)";
	spacing["full-bleed"] = "calc(((1440px / 12) * 4) + ((100vw - 1440px) / 2))";
	for (let i = 0; i <= max; i = i + 1) {
		spacing[i] = `${i * base}px`;
	}

	return spacing;
};

module.exports.spacing = generateSpacing();

// Duration
// Generates duration values from 0.1 to 1 second

const generateDuration = (max = 9) => {
	const duration = {};
	for (let i = 1; i <= max; i = i + 1) {
		duration[i] = `0.${i}s`;
	}
	return duration;
};

module.exports.duration = generateDuration();

const generateDelay = (max = 10, base = 0.2) => {
	const delays = {};
	for (let i = 1; i <= max; i = i + 1) {
		delays[i] = `${Number(i * base)}s`;
	}
	return delays;
};

module.exports.delay = generateDelay();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************************!*\
  !*** ./src/js/scripts/carousel.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_class_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/class-slider */ "./src/js/scripts/classes/class-slider.js");

const carousels = [...document.querySelectorAll('.slider')];

if (carousels.length) {
  carousels.forEach(carousel => {
    const CarouselClass = new _classes_class_slider__WEBPACK_IMPORTED_MODULE_0__["default"](carousel);
    CarouselClass.init();
  });
}

const testimonialSliders = [...document.querySelectorAll('.testimonial-slider')];

if (testimonialSliders.length) {
  testimonialSliders.forEach(carousel => {
    const CarouselClass = new _classes_class_slider__WEBPACK_IMPORTED_MODULE_0__["default"](carousel, 'testimonial');
    CarouselClass.init();
  });
}
}();
/******/ })()
;
//# sourceMappingURL=carousel.js.map