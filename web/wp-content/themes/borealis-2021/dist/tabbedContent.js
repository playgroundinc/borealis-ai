/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/scripts/tabbed-content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/scripts/tabbed-content.js":
/*!******************************************!*\
  !*** ./src/js/scripts/tabbed-content.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabbedContent() {
  const tabs = document.querySelectorAll('[role=tab]');
  const tabList = document.querySelectorAll('[role=tablist]')[0];

  for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", showTabPanel);
  }

  function showTabPanel(el) {
    const tabs2 = document.querySelectorAll('[role=tab]');

    for (i = 0; i < tabs2.length; i++) {
      tabs2[i].setAttribute('aria-selected', 'false');
      tabs2[i].setAttribute('style', 'font-weight:normal');
    }

    el.target.setAttribute('aria-selected', 'true');
    el.target.setAttribute('style', 'font-weight:bold');
    const tabPanelToOpen = el.target.getAttribute('aria-controls');
    const tabPanels = document.querySelectorAll('[role=tabpanel]');

    for (i = 0; i < tabPanels.length; i++) {
      tabPanels[i].style.display = "none";
    }

    document.getElementById(tabPanelToOpen).style.display = "block";
  }

  tabList.addEventListener("keydown", e => {
    const ariaSelected = document.querySelectorAll('[aria-selected=true]')[0];

    if (e.keyCode == 37 || e.keyCode == 38) {
      if (ariaSelected.previousElementSibling !== null) {
        ariaSelected.previousElementSibling.focus();
        e.preventDefault();
      }
    }

    if (e.keyCode == 39 || e.keyCode == 40) {
      if (ariaSelected.nextElementSibling !== null) {
        ariaSelected.nextElementSibling.focus();
        e.preventDefault();
      }
    }
  });
}

tabbedContent();

/***/ })

/******/ });
//# sourceMappingURL=tabbedContent.js.map