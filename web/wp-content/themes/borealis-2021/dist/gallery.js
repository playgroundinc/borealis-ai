/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/scripts/classes/class-gallery.js":
/*!*************************************************!*\
  !*** ./src/js/scripts/classes/class-gallery.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GalleryClass; }
/* harmony export */ });
class GalleryClass {
  constructor(selector) {
    this.selector = selector;
    this.handleDrag = this.handleDrag.bind(this);
    this.dragged = false;
    this.setState = this.setState.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeListeners = this.removeListeners.bind(this);
  }

  setState(name, value) {
    this[name] = value;
  }

  setHeight() {
    const parent = this.selector.parentElement;
    const listItems = [...this.selector.querySelectorAll('li')];

    if (listItems.length > 0) {
      const heights = listItems.map(item => {
        if (Number(item.offsetHeight) < 150) {
          return 550;
        }

        return Number(item.offsetHeight) + 150;
      });
      const maxHeight = Math.max(...heights);
      parent.style.paddingTop = `${maxHeight}px`;
    }
  }

  removeListeners(e) {
    this.setState('pageXStart', null);
    this.setState('pageXEnd', null);
    this.setState('dragged', false);
    this.selector.removeEventListener('mousemove', this.handleMouseMove);
    this.selector.removeEventListener('mouseup', this.handleMouseUp);
    this.selector.removeEventListener('touchmove', this.handleMouseMove);
    this.selector.removeEventListener('touchend', this.handleMouseUp);
  }

  addListeners() {
    this.pageXStart = null;
    this.pageXEnd = null;
    this.selector.addEventListener('mousedown', this.handleDrag);
    window.addEventListener('mouseup', this.removeListeners);
    const links = [...this.selector.querySelectorAll('a')];

    if (links.length > 0) {
      links.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
        });
        link.addEventListener('mousedown', this.handleDrag);
      });
    }
  }

  calculateDrag() {
    const drag = this.pageXEnd - this.pageXStart;
    return drag;
  }

  handleMouseMove(e) {
    const end = e.touches && e.touches[0].clientX ? e.touches[0].clientX : e.pageX;

    if (end) {
      this.setState('pageXEnd', end);
    } else {
      this.setState('pageXEnd', this.pageXStart);
    }

    const drag = this.calculateDrag();

    if (drag > 5 || drag < -5) {
      this.setState('dragged', true);
    }

    this.selector.scrollLeft = Number(this.selector.scrollLeft) - Number(drag * 0.2);
  }

  handleClick(e) {
    let link = null;

    if (e.target.tagName === 'A') {
      link = e.target;
    }

    if (e.target.parentElement.tagName === 'A') {
      link = e.target.parentElement;
    }

    if (link) {
      const href = link.getAttribute('href');

      if (href) {
        window.location = href;
      }
    }
  }

  handleMouseUp(e) {
    e.preventDefault();
    console.log('mouse up');

    if (!this.pageXEnd) {
      this.setState('pageXEnd', this.pageXStart);
    }

    const drag = this.calculateDrag();

    if (drag < 6 && !this.dragged) {
      this.handleClick(e);
    }

    this.removeListeners();
  }

  handleDrag(e) {
    e.preventDefault();
    const start = e.touches && e.touches[0].clientX ? e.touches[0].clientX : e.pageX;
    this.setState('pageXStart', start);
    this.selector.addEventListener('touchmove', this.handleMouseMove);
    this.selector.addEventListener('touchend', this.handleMouseUp);
    this.selector.addEventListener('mousemove', this.handleMouseMove);
    this.selector.addEventListener('mouseup', this.handleMouseUp);
  }

  init() {
    this.addListeners();
    this.setHeight();
  }

}

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************************!*\
  !*** ./src/js/scripts/gallery.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_class_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/class-gallery */ "./src/js/scripts/classes/class-gallery.js");


function galleries() {
  const galleries = [...document.querySelectorAll('.custom-gallery')];

  if (galleries.length > 0) {
    galleries.forEach(gallery => {
      const Gallery = new _classes_class_gallery__WEBPACK_IMPORTED_MODULE_0__["default"](gallery);
      Gallery.init();
    });
  }
}

galleries();
}();
/******/ })()
;
//# sourceMappingURL=gallery.js.map