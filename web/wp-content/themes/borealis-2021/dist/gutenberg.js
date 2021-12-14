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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/gutenberg.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blocks/accordion-row.jsx":
/*!*****************************************!*\
  !*** ./src/js/blocks/accordion-row.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcAccordionBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function trmcAccordionBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "accordion-row";
  var blockTitle = "Accordion Row";
  var blockDescription = "Creates a single expandable accordion item.";
  var blockCategory = "common";
  var blockIcon = "table-row-after"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttrs = ['title'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__["default"])(stringAttrs);
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/accordion")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child ".concat(editor ? "accordion-editory" : "accordion--fe")
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Accordion Row"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'p',
          settings: [],
          classes: ['heading-four'],
          placeholder: 'Accordion row title here'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph-no-alignment"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/document-row"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-four")]
      }))];
    },
    save: function save() {
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/accordion.jsx":
/*!*************************************!*\
  !*** ./src/js/blocks/accordion.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcAccordionBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function trmcAccordionBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "accordion";
  var blockTitle = "Accordion";
  var blockDescription = "Creates a set of expandable items.";
  var blockCategory = "containers";
  var blockIcon = "feedback"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttrs = ['anchor_id', 'description', 'title', 'bg_color'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__["default"])(stringAttrs);
  attributes['bg_color']['default'] = 'white';
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var anchor_id = attributes.anchor_id,
          bg_color = attributes.bg_color,
          description = attributes.description,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container block--".concat(bg_color, " }")
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Accordion"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        controls: [{
          type: 'select',
          label: 'Background color',
          reference: 'bg_color',
          value: bg_color,
          options: [{
            value: 'white',
            label: 'White'
          }, {
            value: 'grey',
            label: 'Grey'
          }]
        }, {
          type: 'text',
          label: 'Anchor',
          reference: 'anchor_id',
          value: anchor_id
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h2',
          classes: ['heading_two'],
          placeholder: 'Add title (optional)'
        }, {
          reference: 'description',
          value: description,
          tagName: 'p',
          classes: ['paragraph'],
          placeholder: 'Add description (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/accordion-row")]
      }))];
    },
    save: function save() {
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/body-copy-image.jsx":
/*!*******************************************!*\
  !*** ./src/js/blocks/body-copy-image.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcBodyCopyImageBlock; });
/* harmony import */ var _blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _blocks_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _blocks_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Helpers



function trmcBodyCopyImageBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "body-copy-image";
  var blockTitle = "News - Image";
  var blockDescription = "A single image upload.";
  var blockCategory = "media";
  var blockIcon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: blockTitle,
    description: blockDescription,
    category: blockCategory,
    icon: blockIcon,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/body-copy")],
    attributes: {
      caption: {
        type: 'String',
        default: ''
      },
      image_alt: {
        type: 'String',
        default: ''
      },
      image_url: {
        type: 'String',
        default: ''
      },
      image_id: {
        type: 'Number',
        default: 0
      }
    },
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var caption = attributes.caption,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "News - Image"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '14px',
          fontStyle: 'italic'
        }
      }, "Images should be at least 745px wide and 620px tall. Larger images will be cropped with a central focal point."), /*#__PURE__*/React.createElement(_blocks_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add an image'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_blocks_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: caption,
          reference: "caption",
          classes: ['caption'],
          tagName: "p",
          settings: [],
          placeholder: "Please provide a caption for your image"
        }]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var caption = attributes.caption,
          image_id = attributes.image_id,
          image_alt = attributes.image_alt,
          image_url = attributes.image_url;
      return null;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/body-copy.jsx":
/*!*************************************!*\
  !*** ./src/js/blocks/body-copy.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bodyCopyBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers

function bodyCopyBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "body-copy";
  var blockTitle = "Body Copy";
  var blockDescription = "Component to add copy to a page.";
  var blockCategory = "common";
  var blockIcon = "editor-bold"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: {},
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Body Copy"), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-two"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-three"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-four"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-five"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph"), 'core/list', "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/body-copy-carousel"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/body-copy-image")]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/callout-column.jsx":
/*!******************************************!*\
  !*** ./src/js/blocks/callout-column.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imageTextBlock; });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable



function imageTextBlock() {
  /**
   * GUTENBERG BLOCK - Custom Column
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "callout-column";
  var title = "Card";
  var description = "A single card.";
  var category = "common";
  var icon = "table-col-after"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    image_alt: {
      type: "String",
      default: ""
    },
    image_id: {
      type: "Number",
      default: 0
    },
    image_url: {
      type: "String",
      default: ""
    },
    link: {
      type: "String",
      default: ""
    },
    link_text: {
      type: "String",
      default: "read more"
    },
    title: {
      type: "String",
      default: ""
    }
  };
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    category: category,
    icon: icon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/callout-container")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          link = attributes.link,
          link_text = attributes.link_text,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Card"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add Image',
          imageClasses: ['image-text__image']
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: title,
          reference: 'title',
          tagName: 'h2',
          classes: ['heading-one'],
          placeholder: "Add a title for this card"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: []
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: link,
          reference: 'link',
          tagName: 'p',
          placeholder: "Add a link for this card",
          classes: []
        }, {
          value: link_text,
          reference: 'link_text',
          placeholder: "Add link text for this card",
          tagName: 'p',
          classes: []
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      })))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          reverse = attributes.reverse,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/callout-container.jsx":
/*!*********************************************!*\
  !*** ./src/js/blocks/callout-container.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcAccordionBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function trmcAccordionBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "callout-container";
  var blockTitle = "Cards - Image";
  var blockDescription = "Creates a container for single callout cards.";
  var blockCategory = "containers";
  var blockIcon = "layout"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttrs = ['alignment', 'columns', 'title'];
  var attributes = {
    columns: {
      type: 'String',
      default: '3'
    },
    description: {
      type: 'String',
      default: ''
    },
    title: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var description = attributes.description,
          columns = attributes.columns,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Cards - Image (set number of columns in block settings)"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        controls: [{
          type: 'select',
          label: '# of Columns',
          reference: 'columns',
          value: columns,
          options: [// Value is the 12 / number of columns.
          {
            label: "Four",
            value: "3"
          }, {
            label: "Three",
            value: "4"
          }, {
            label: "Two",
            value: "6"
          }]
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h2',
          classes: ['heading-two'],
          placeholder: 'Add title (optional)'
        }, {
          reference: 'description',
          value: description,
          tagName: 'p',
          classes: ['paragraph'],
          placeholder: 'Add description (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "col--".concat(columns)
      }, save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/callout-column")]
      })))];
    },
    save: function save() {
      var columns = attributes.columns,
          description = attributes.description,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/cognito-embed-block.jsx":
/*!***********************************************!*\
  !*** ./src/js/blocks/cognito-embed-block.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cognitoEmbedBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers


function cognitoEmbedBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "cognito-form";
  var blockTitle = "Cognito Form Embed";
  var blockDescription = "Component to embed a Cognito form.";
  var blockCategory = "forms";
  var blockIcon = "clipboard"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: {
      cognito_url: {
        type: String,
        default: ''
      },
      form_id: {
        type: String,
        default: ''
      }
    },
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var form_id = attributes.form_id,
          cognito_url = attributes.cognito_url;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-form"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Cognito Form Embed"), /*#__PURE__*/React.createElement("p", null, "Please provide the embed url and form id from Cognito forms in the block settings."), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Form Settings",
        controls: [{
          label: "Cognito Embed URL",
          type: 'text',
          value: cognito_url,
          reference: 'cognito_url'
        }, {
          label: "Form ID",
          type: 'text',
          value: form_id,
          reference: 'form_id'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var cognito_url = attributes.cognito_url,
          form_id = attributes.form_id;
      return null;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/content-cards/content-card-container.jsx":
/*!****************************************************************!*\
  !*** ./src/js/blocks/content-cards/content-card-container.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcContentContainerBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function trmcContentContainerBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "content-card-container";
  var blockTitle = "Content Block - Cards";
  var blockDescription = "Creates a container for content cards.";
  var blockCategory = "containers";
  var blockIcon = "layout"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    bg_color: {
      type: 'String',
      default: 'white'
    },
    description: {
      type: 'String',
      default: ''
    },
    icon: {
      type: 'Boolean',
      default: true
    },
    link: {
      type: 'String',
      default: ''
    },
    link_text: {
      type: 'String',
      default: 'Learn More'
    },
    title: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var bg_color = attributes.bg_color,
          description = attributes.description,
          icon = attributes.icon,
          link = attributes.link,
          link_text = attributes.link_text,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container block--".concat(bg_color)
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Content Block - Cards (set background color and whether or not to use icons in the settings)"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Block Settings",
        controls: [{
          type: 'select',
          label: 'Background Color',
          reference: 'bg_color',
          value: bg_color,
          options: [{
            value: 'white',
            label: 'White'
          }, {
            value: 'grey',
            label: 'Grey'
          }, {
            value: 'black',
            label: 'Black'
          }, {
            value: 'red',
            label: 'Dark Red'
          }]
        }, {
          type: 'toggle',
          label: 'Card Icons',
          reference: 'icon',
          value: icon
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h2',
          classes: ['heading-two'],
          placeholder: 'Add title (optional)'
        }, {
          reference: 'description',
          value: description,
          tagName: 'p',
          classes: ['paragraph'],
          placeholder: 'Add description (optional)'
        }, {
          reference: 'link',
          value: link,
          tagName: 'p',
          classes: ['paragraph'],
          placeholder: 'Add cta link (optional)'
        }, {
          reference: 'link_text',
          value: link_text,
          tagName: 'p',
          classes: ['paragraph'],
          placeholder: 'Add cta link text (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: icon ? "col--4" : "col--4 no-icon"
      }, save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/content-card")]
      })))];
    },
    save: function save() {
      var columns = attributes.columns,
          description = attributes.description,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/content-cards/content-card.jsx":
/*!******************************************************!*\
  !*** ./src/js/blocks/content-cards/content-card.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imageTextBlock; });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable



function imageTextBlock() {
  /**
   * GUTENBERG BLOCK - Custom Column
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "content-card";
  var title = "Card";
  var description = "A single content card.";
  var category = "common";
  var icon = "table-col-after"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    image_alt: {
      type: "String",
      default: ""
    },
    image_id: {
      type: "Number",
      default: 0
    },
    image_url: {
      type: "String",
      default: ""
    },
    link_text: {
      type: 'String',
      default: ''
    },
    link_href: {
      type: 'String',
      default: ''
    },
    title: {
      type: "String",
      default: ""
    }
  };
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    category: category,
    icon: icon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/content-card-container")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          title = attributes.title,
          link_text = attributes.link_text,
          link_href = attributes.link_href;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Card"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
        className: "icon-upload"
      }, /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add Icon',
          imageClasses: ['image-text__image']
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      })), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: title,
          reference: 'title',
          tagName: 'h2',
          classes: ['heading-one'],
          placeholder: "Add a title for this card"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph-no-alignment")]
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: link_text,
          reference: 'link_text',
          tagName: 'p',
          classes: ['link'],
          placeholder: "Add link text for a CTA (optional)"
        }, {
          value: link_href,
          reference: 'link_href',
          tagName: 'p',
          classes: ['link'],
          placeholder: "Add link for a CTA (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      })))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          reverse = attributes.reverse,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/core-extends/video-embed-poster.jsx":
/*!***********************************************************!*\
  !*** ./src/js/blocks/core-extends/video-embed-poster.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extendCoreVideo; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Embed Wrapper.
 */
var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
function extendCoreVideo() {
  var __ = wp.i18n.__;
  var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
  var _wp$blockEditor = wp.blockEditor,
      InspectorControls = _wp$blockEditor.InspectorControls,
      MediaUpload = _wp$blockEditor.MediaUpload;
  var _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      Button = _wp$components.Button,
      TextControl = _wp$components.TextControl;

  function customAttributes(props, name) {
    if ('core/video' !== name && 'core/embed' !== name && 'core-embed/youtube' !== name && 'core-embed/vimeo' !== name) {
      return props;
    }

    var customAttributes = {
      image_id: {
        type: 'Number',
        default: 0
      },
      image_url: {
        type: 'String',
        default: ''
      },
      image_alt: {
        type: 'String',
        default: ''
      },
      caption: {
        type: 'String',
        default: ''
      }
    };

    var attributes = _objectSpread(_objectSpread({}, props.attributes), customAttributes);

    var description = "".concat(props.description);
    return _objectSpread(_objectSpread({}, props), {}, {
      attributes: attributes,
      description: description
    });
  }

  var getImageButton = function getImageButton(openEvent, label) {
    return /*#__PURE__*/React.createElement("div", {
      className: "button-container"
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: openEvent,
      className: "button button-large"
    }, label));
  };

  var withInspectorControls = createHigherOrderComponent(function (BlockEdit) {
    return function (props) {
      if ('core/video' !== props.name && 'core/embed' !== props.name && 'core-embed/youtube' !== props.name && 'core-embed/vimeo' !== props.name) {
        return /*#__PURE__*/React.createElement(BlockEdit, props);
      }

      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var image_id = attributes.image_id,
          image_alt = attributes.image_alt,
          image_url = attributes.image_url,
          caption = attributes.caption;
      var label = image_url !== '' ? 'Update Placeholder Image' : 'Add Placeholder Image';

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
        title: __('Embed Video Settings')
      }, image_url !== '' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Current Placeholder Image:"), /*#__PURE__*/React.createElement("img", {
        src: image_url
      }), /*#__PURE__*/React.createElement("div", {
        className: "button-container"
      }, /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          setAttributes({
            'image_alt': '',
            'image_url': '',
            'image_id': ''
          });
        }
      }, "Remove Image"))) : /*#__PURE__*/React.createElement("p", {
        className: "copy--italic"
      }, "Please add a placeholder image."), /*#__PURE__*/React.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            'image_alt': media.alt,
            'image_url': media.url,
            'image_id': media.id.toString()
          });
        },
        type: "image",
        value: image_id,
        render: function render(_ref) {
          var open = _ref.open;
          return getImageButton(open, label);
        }
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: caption,
        onChange: function onChange(value) {
          updateAttributeValue('caption', value);
        },
        label: "Caption (Optional):"
      }))), /*#__PURE__*/React.createElement(BlockEdit, props)), null];
    };
  }, 'withInspectorControl'); // Add attribute to core block

  addFilter('blocks.registerBlockType', 'pg/core-embed', customAttributes); // Add inspector controls for attribute

  addFilter('editor.BlockEdit', 'pg/core-embed', withInspectorControls);
}

/***/ }),

/***/ "./src/js/blocks/document-row.jsx":
/*!****************************************!*\
  !*** ./src/js/blocks/document-row.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return documentContainerBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function documentContainerBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "document-row";
  var blockTitle = "Document Row";
  var blockDescription = "Row for downloadable file.";
  var blockCategory = "common";
  var blockIcon = "format-aside"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttributes = ['file_url', 'file_name', 'icon', 'link_text', 'name'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__["default"])(stringAttributes);
  attributes['link_text']['default'] = 'Download PDF';
  attributes['icon'] = {
    type: 'boolean',
    default: true
  };
  attributes['file_id'] = {
    type: "number",
    default: 0
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/accordion-row")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var file_url = attributes.file_url,
          file_id = attributes.file_id,
          file_name = attributes.file_name,
          icon = attributes.icon,
          link_text = attributes.link_text,
          name = attributes.name;
      var buttonClass = ['hyperlink'];

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Block Settings",
        controls: [{
          type: 'file',
          label: "File",
          id_value: file_id,
          id_reference: 'file_id',
          url_value: file_url,
          url_reference: 'file_url',
          name_value: file_name,
          name_reference: 'file_name'
        }, {
          type: 'toggle',
          label: 'Download Icon',
          value: icon,
          reference: 'icon'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "custom-container ".concat(editor ? "column-container--editor" : "column-container--fe")
      }, /*#__PURE__*/React.createElement("div", {
        className: "row middle-xs"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-lg-9 col-md-7"
      }, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: name,
          reference: "name",
          tagName: "p",
          placeholder: "Please provide a file name",
          settings: []
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-lg-3 col-md-5"
      }, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: link_text,
          reference: "link_text",
          tagName: "a",
          placeholder: "Please provide a link title",
          settings: [],
          classes: buttonClass
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))), file_name !== '' ? /*#__PURE__*/React.createElement("p", null, "Current File: ", file_name) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("em", null, "No file. Add file in sidebar.")), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: []
      })))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var details = attributes.details,
          name = attributes.name,
          file_url = attributes.file_url,
          file_id = attributes.file_id,
          file_name = attributes.file_name,
          icon = attributes.icon,
          link_text = attributes.link_text;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/feature-strip.jsx":
/*!*****************************************!*\
  !*** ./src/js/blocks/feature-strip.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return featureStripBlock; });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable



function featureStripBlock() {
  /**
   * GUTENBERG BLOCK - Feature Strip
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "feature-strip";
  var title = "Feature Callout";
  var description = "A feature strip with optional CTA.";
  var category = "page-strips";
  var icon = "align-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    image_id: {
      type: 'Number',
      default: 0
    },
    image_url: {
      type: 'String',
      default: ''
    },
    image_alt: {
      type: 'String',
      default: ''
    },
    title: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    category: category,
    icon: icon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Feature Callout"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add Image',
          imageClasses: ['image-text__image']
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: title,
          reference: 'title',
          tagName: 'h2',
          classes: ['heading_one']
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph-no-alignment"), 'core/buttons']
      })))))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/form-container.jsx":
/*!******************************************!*\
  !*** ./src/js/blocks/form-container.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formContainerBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers

 // Components



function formContainerBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "form-builder";
  var blockTitle = "Form Builder";
  var blockDescription = "Component to build a custom form.";
  var blockCategory = "forms";
  var blockIcon = "clipboard"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    alignment: {
      type: 'String',
      default: 'left'
    },
    bg_color: {
      type: 'String',
      default: 'white'
    },
    description: {
      type: 'String',
      default: ''
    },
    email: {
      type: 'String',
      default: ''
    },
    submit_text: {
      type: 'String',
      default: 'Submit'
    },
    success_message: {
      type: 'String',
      default: 'Your message has been successfully sent. We will contact you very soon!'
    },
    success_title: {
      type: 'String',
      default: 'Thank You!'
    },
    title: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var alignment = attributes.alignment,
          bg_color = attributes.bg_color,
          description = attributes.description,
          email = attributes.email,
          submit_text = attributes.submit_text,
          success_title = attributes.success_title,
          success_message = attributes.success_message,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-form"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Custom Form - Please make sure to add a destination email in the block settings"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Form Settings",
        controls: [{
          label: "Destination email",
          type: 'text',
          value: email,
          reference: 'email'
        }, {
          label: "Background Color",
          type: 'radio',
          value: bg_color,
          reference: 'bg_color',
          options: [{
            value: 'white',
            label: 'White'
          }, {
            value: 'grey',
            label: 'Grey'
          }]
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          classes: ['heading_two'],
          tagName: "h2",
          align: {
            value: alignment,
            reference: 'alignment'
          },
          settings: [],
          placeholder: "Please provide a title for your form"
        }, {
          value: description,
          classes: ['paragraph'],
          reference: "description",
          tagName: "p",
          placeholder: "Please provide a description for this form"
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-three"), 'core/paragraph', "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/text-input"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/input-row"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/select-input"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/date-input"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/number-input"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/textarea-input"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/select-destination-input")]
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: submit_text,
          classes: ['btn'],
          reference: "submit_text",
          tagName: "p",
          placeholder: "Please provide submit button text..."
        }, {
          value: success_title,
          reference: "success_title",
          classes: ['heading_two'],
          tagName: "h2",
          settings: [],
          placeholder: "Please provide a title for the success message"
        }, {
          value: success_message,
          classes: ['paragraph'],
          reference: "success_message",
          tagName: "p",
          placeholder: "Please provide a success message this form"
        }]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var alignment = attributes.alignment,
          description = attributes.description,
          email = attributes.email,
          submitText = attributes.submitText,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/forms/date-input-block.jsx":
/*!**************************************************!*\
  !*** ./src/js/blocks/forms/date-input-block.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dateBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function dateBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var CheckboxControl = wp.components.CheckboxControl;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "date-input";
  var blockTitle = "Date Input";
  var blockDescription = "Component to add a date picker to a custom form.";
  var blockCategory = "forms";
  var blockIcon = "calendar"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttributes = ['helper_text', 'label'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  attributes['required'] = {
    type: Boolean,
    default: false
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/form-builder")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var helper_text = attributes.helper_text,
          label = attributes.label,
          required = attributes.required;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-form__input"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Date Input"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: label,
          reference: "label",
          tagName: "p",
          placeholder: "Please provide the name for this input"
        }, {
          value: helper_text,
          reference: "helper_text",
          tagName: "p",
          placeholder: "Optional helper text"
        }]
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "This field is required.",
        checked: required,
        onChange: function onChange(change) {
          return updateAttributeValue('required', change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var helper_text = attributes.helper_text,
          label = attributes.label,
          required = attributes.required;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/forms/destination-select-block.jsx":
/*!**********************************************************!*\
  !*** ./src/js/blocks/forms/destination-select-block.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return selectDestinationBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function selectDestinationBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      CheckboxControl = _wp$components.CheckboxControl,
      Button = _wp$components.Button;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "select-destination-input";
  var blockTitle = "Select Destination";
  var blockDescription = "Component to select a destination for form.";
  var blockCategory = "forms";
  var blockIcon = "email"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    destination: {
      type: 'String',
      default: ''
    },
    label: {
      type: 'String',
      default: ''
    },
    options: {
      type: 'String',
      default: ''
    },
    option: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    supports: {
      multiple: false
    },
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/form-builder")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var destination = attributes.destination,
          label = attributes.label,
          option = attributes.option,
          options = attributes.options;

      function getAllOptions() {
        if (options !== '') {
          var optionsArray = [];

          var _allOptions = JSON.parse(options);

          for (var _option in _allOptions) {
            optionsArray.push({
              key: _option,
              value: _allOptions[_option]
            });
          }

          return optionsArray;
        }

        return [];
      }

      var allOptions = getAllOptions();

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      function clearValues() {
        updateAttributeValue('destination', '');
        updateAttributeValue('option', '');
      }

      function updateOptionsArray() {
        var updatedOptions = {};

        if (options !== '') {
          updatedOptions = JSON.parse(options);
        }

        updatedOptions[destination] = option;
        updateAttributeValue('options', JSON.stringify(updatedOptions));
        clearValues();
      }

      function removeOption(value) {
        var updatedOptions = JSON.parse(options);
        delete updatedOptions[value];
        updateAttributeValue('options', JSON.stringify(updatedOptions));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-form__input"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Select - Update input type in block settings"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: label,
          reference: "label",
          tagName: "p",
          placeholder: "Please provide the name for this input"
        }]
      }), allOptions.map(function (option) {
        return /*#__PURE__*/React.createElement("li", null, "".concat(option.key, " - ").concat(option.value), /*#__PURE__*/React.createElement(Button, {
          onClick: function onClick() {
            removeOption(option.key);
          }
        }, "Remove"));
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: option,
          reference: "option",
          tagName: "p",
          placeholder: "Please provide an option"
        }, {
          value: destination,
          reference: "destination",
          tagName: "p",
          placeholder: "Please provide the destination email for that option"
        }]
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        onClick: updateOptionsArray,
        className: 'button button-large'
      }, i18n.__('Add Option'))))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var label = attributes.label,
          required = attributes.required,
          options = attributes.options,
          option = attributes.option;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/forms/input-block.jsx":
/*!*********************************************!*\
  !*** ./src/js/blocks/forms/input-block.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inputBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function inputBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var CheckboxControl = wp.components.CheckboxControl;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "text-input";
  var blockTitle = "Text Input";
  var blockDescription = "Component to build a custom form.";
  var blockCategory = "forms";
  var blockIcon = "edit-large"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttributes = ['helper_text', 'label'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  attributes['required'] = {
    type: Boolean,
    default: false
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/form-builder")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var helper_text = attributes.helper_text,
          label = attributes.label,
          required = attributes.required;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-form__input"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Text Input"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: label,
          reference: "label",
          tagName: "p",
          placeholder: "Please provide the name for this input"
        }, {
          value: helper_text,
          reference: "helper_text",
          tagName: "p",
          placeholder: "Optional helper text"
        }]
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "This field is required.",
        checked: required,
        onChange: function onChange(change) {
          return updateAttributeValue('required', change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var helper_text = attributes.helper_text,
          label = attributes.label,
          required = attributes.required;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/forms/input-row.jsx":
/*!*******************************************!*\
  !*** ./src/js/blocks/forms/input-row.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inputRowBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function inputRowBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "input-row";
  var blockTitle = "Input Row";
  var blockDescription = "Component to add two inputs side by side on desktop.";
  var blockCategory = "forms";
  var blockIcon = "table-row-after"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttributes = ['split'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  attributes['split']['default'] = 'half';
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/form-builder")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var split = attributes.split;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-form__input-row"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Input Row - Update widths of inputs in block settings."), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Form Settings",
        controls: [{
          label: "Layout split",
          type: 'radio',
          value: split,
          reference: 'split',
          options: [{
            label: 'half / half',
            value: 'half'
          }, {
            label: 'two thirds / one third',
            value: 'two-thirds'
          }, {
            label: 'three quarters / one quarter',
            value: 'three-quarters'
          }]
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/text-input"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/select-input"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/date-input"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/number-input")]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/forms/number-input-block.jsx":
/*!****************************************************!*\
  !*** ./src/js/blocks/forms/number-input-block.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return numberInputBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function numberInputBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var CheckboxControl = wp.components.CheckboxControl;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "number-input";
  var blockTitle = "Number Input";
  var blockDescription = "Component to add a number input to a custom form.";
  var blockCategory = "forms";
  var blockIcon = "calculator"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttributes = ['label', 'helper_text'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  attributes['required'] = {
    type: Boolean,
    default: false
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/form-builder")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var label = attributes.label,
          helper_text = attributes.helper_text,
          required = attributes.required;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-form__input"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Number Input"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: label,
          reference: "label",
          tagName: "p",
          placeholder: "Please provide the name for this input"
        }, {
          value: helper_text,
          reference: "helper_text",
          tagName: "p",
          placeholder: "Please provide optional helper text"
        }]
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "This field is required.",
        checked: required,
        onChange: function onChange(change) {
          return updateAttributeValue('required', change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var label = attributes.label,
          required = attributes.required;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/forms/select-block.jsx":
/*!**********************************************!*\
  !*** ./src/js/blocks/forms/select-block.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return selectBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function selectBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      CheckboxControl = _wp$components.CheckboxControl,
      Button = _wp$components.Button;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "select-input";
  var blockTitle = "Dropdown";
  var blockDescription = "Component to a dropdown list to a form.";
  var blockCategory = "forms";
  var blockIcon = "arrow-down-alt"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var inputOptions = [{
    value: 'select',
    label: 'Dropdown'
  }, {
    value: 'checkbox',
    label: 'Checkbox'
  }, {
    label: 'Radio',
    value: 'radio'
  }];
  var stringAttributes = ['helper_text', 'label', 'option', 'options', 'type'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  attributes['required'] = {
    type: Boolean,
    default: false
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/form-builder")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var helper_text = attributes.helper_text,
          label = attributes.label,
          option = attributes.option,
          options = attributes.options,
          required = attributes.required,
          type = attributes.type;
      var allOptions = options !== '' ? options.split(',') : [];

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      function updateOptionsArray() {
        if (options !== '') {
          var updatedOptions = options.toString().split(',');
          updatedOptions.push(option);
          updateAttributeValue('options', updatedOptions.join(','));
          updateAttributeValue('option', '');
          return;
        }

        updateAttributeValue('options', option);
        updateAttributeValue('option', '');
      }

      function removeOption(value) {
        var splitOptions = options.split(',');

        if (splitOptions.length <= 1) {
          updateAttributeValue('options', '');
        }

        var index = splitOptions.indexOf(value);

        if (index > -1) {
          splitOptions.splice(index, 1);
          updateAttributeValue('options', splitOptions.join(','));
        }
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-form__input"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Select - Update input type in block settings"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Block Settings",
        controls: [{
          label: "Input type",
          type: 'radio',
          value: type,
          reference: 'type',
          options: inputOptions
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: label,
          reference: "label",
          tagName: "p",
          placeholder: "Please provide the name for this input"
        }]
      }), allOptions.map(function (option) {
        return /*#__PURE__*/React.createElement("li", null, "".concat(option), /*#__PURE__*/React.createElement(Button, {
          onClick: function onClick() {
            removeOption(option);
          }
        }, "Remove"));
      }), /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: option,
          reference: "option",
          tagName: "li",
          placeholder: "Please provide an option"
        }, {
          value: helper_text,
          reference: "helper_text",
          tagName: "p",
          placeholder: "Optional helper text"
        }]
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/React.createElement(Button, {
        onClick: updateOptionsArray,
        className: 'button button-large'
      }, i18n.__('Add Option')))), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "This field is required.",
        checked: required,
        onChange: function onChange(change) {
          return updateAttributeValue('required', change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var label = attributes.label,
          required = attributes.required,
          options = attributes.options,
          option = attributes.option;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/forms/textarea-block.jsx":
/*!************************************************!*\
  !*** ./src/js/blocks/forms/textarea-block.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return textareaBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function textareaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var CheckboxControl = wp.components.CheckboxControl;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "textarea-input";
  var blockTitle = "Text Area Input";
  var blockDescription = "Component to build a custom form.";
  var blockCategory = "forms";
  var blockIcon = "edit-large"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttributes = ['helper_text', 'label'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  attributes['required'] = {
    type: Boolean,
    default: false
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/form-builder")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var helper_text = attributes.helper_text,
          label = attributes.label,
          required = attributes.required;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-form__input"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Text Input"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: label,
          reference: "label",
          tagName: "p",
          placeholder: "Please provide the name for this input"
        }, {
          value: helper_text,
          reference: "helper_text",
          tagName: "p",
          placeholder: "Optional helper text"
        }]
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "This field is required.",
        checked: required,
        onChange: function onChange(change) {
          return updateAttributeValue('required', change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var helper_text = attributes.helper_text,
          label = attributes.label,
          required = attributes.required;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/formstack-embed-block.jsx":
/*!*************************************************!*\
  !*** ./src/js/blocks/formstack-embed-block.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formStackEmbedBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers


function formStackEmbedBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "formstack-form";
  var blockTitle = "Formstack Form Embed";
  var blockDescription = "Component to embed a FormStack form.";
  var blockCategory = "forms";
  var blockIcon = "clipboard"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: {
      formstack_url: {
        type: String,
        default: ''
      }
    },
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var formstack_url = attributes.formstack_url;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-form"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Formstack Form Embed"), /*#__PURE__*/React.createElement("p", null, "Please provide the form script url from FormStack in the block settings."), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Form Settings",
        controls: [{
          label: "Formstack URL",
          type: 'text',
          value: formstack_url,
          reference: 'formstack_url'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var formstack_url = attributes.formstack_url;
      return null;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/greenhouse/jobs-block.jsx":
/*!*************************************************!*\
  !*** ./src/js/blocks/greenhouse/jobs-block.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jobBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");


function jobBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "job-block";
  var blockTitle = "Create job block";
  var blockDescription = "Component to create job block";
  var blockCategory = "common";
  var blockIcon = "email"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    },
    emptyState: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    supports: {
      multiple: false
    },
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/form-builder")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes;
      var title = attributes.title,
          emptyState = attributes.emptyState; // const apiCall = async (url) => {
      //     try {
      //         const resp = await fetch(url, { method: 'GET', redirect: 'follow', referrer: 'no-referrer', });
      //         const data = await resp.json();
      //         const locations = data.features;
      //         if (locations && locations.length && locations[0].geometry && locations[0].geometry.coordinates) {
      //             setLatLng(locations[0].geometry.coordinates);
      //         }
      //     } catch(err) {
      //         updateAttributeValue('error', 'Something went wrong');
      //     }
      // };
      // const buildUrl = (address) => {
      //     const encodedAddress = encodeURI(address);
      //     const country = location_country ? location_country : 'CA';
      //     if (ajaxInfo.apiKey) {
      //         const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?country=${country}&access_token=${ajaxInfo.apiKey}`;
      //         apiCall(url);
      //     }
      // }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-job__block"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Update job in block settings"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "label",
          tagName: "p",
          placeholder: "Please provide a title"
        }]
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: emptyState,
          reference: "option",
          tagName: "p",
          placeholder: "Please provide an option"
        }]
      })))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var label = attributes.label,
          required = attributes.required,
          options = attributes.options,
          option = attributes.option;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/helper-functions/Locations.js":
/*!*****************************************************!*\
  !*** ./src/js/blocks/helper-functions/Locations.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var _us_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./us-states */ "./src/js/blocks/helper-functions/us-states.js");
/* harmony import */ var _provinces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provinces */ "./src/js/blocks/helper-functions/provinces.js");


class Location {
  constructor() {
    this.states = _us_states__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.provinces = _provinces__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  getProvinces() {
    const provinces = [];

    for (let province in this.provinces) {
      const option = {
        label: this.provinces[province],
        value: province
      };
      provinces.push(option);
    }

    return provinces;
  }

  getStates() {
    const states = [];

    for (let state in this.states) {
      const option = {
        label: this.states[state],
        value: state
      };
      states.push(option);
    }

    return states;
  }

}

/***/ }),

/***/ "./src/js/blocks/helper-functions/boolean-attrs.js":
/*!*********************************************************!*\
  !*** ./src/js/blocks/helper-functions/boolean-attrs.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return booleanAttrs; });
function booleanAttrs(attributes, fields) {
  if (Array.isArray(fields) && fields.length > 0) {
    fields.forEach(field => {
      attributes[`${field}`] = {
        type: 'boolean',
        default: false
      };
    });
    return attributes;
  }
}

/***/ }),

/***/ "./src/js/blocks/helper-functions/constants.js":
/*!*****************************************************!*\
  !*** ./src/js/blocks/helper-functions/constants.js ***!
  \*****************************************************/
/*! exports provided: namespace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
const namespace = 'pg';

/***/ }),

/***/ "./src/js/blocks/helper-functions/custom-error.js":
/*!********************************************************!*\
  !*** ./src/js/blocks/helper-functions/custom-error.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomErrors; });
function CustomErrors(fields, values) {
  const compileErrors = (fields, values) => {
    if (Object.keys(fields).length > 0 && fields.constructor === Object && values.length > 0) {
      const errorFields = values.filter(value => {
        return fields[`${value}`] === undefined;
      });
      return errorFields;
    }

    throw new Error(`${fields.type} control missing all required fields`);
  };

  const verifyInputs = (fields, values) => {
    const errorFields = compileErrors(fields, values);

    if (errorFields.length > 0) {
      throw new Error(`${fields.type} control is missing properties ${errorFields.join(', ')} `);
    }
  };

  verifyInputs(fields, values);
}

/***/ }),

/***/ "./src/js/blocks/helper-functions/default-attrs.js":
/*!*********************************************************!*\
  !*** ./src/js/blocks/helper-functions/default-attrs.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultAttrs; });
function DefaultAttrs(fields, source = null) {
  const attributes = {};

  if (Array.isArray(fields) && fields.length > 0) {
    fields.forEach(field => {
      attributes[`${field}`] = {
        type: 'string',
        default: ''
      };

      if (source) {
        attributes[`${field}`]['source'] = source;
        attributes[`${field}`]['meta'] = field;
      }
    });
    return attributes;
  }
}

/***/ }),

/***/ "./src/js/blocks/helper-functions/provinces.js":
/*!*****************************************************!*\
  !*** ./src/js/blocks/helper-functions/provinces.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  AB: "Alberta",
  BC: "British Columbia",
  MB: "Manitoba",
  NB: "New Brunswick",
  NL: "Newfoundland and Labrador",
  NT: "Northwest Territories",
  NS: "Nova Scotia",
  NU: "Nunavut",
  ON: "Ontario",
  PE: "Prince Edward Island",
  QC: "Quebec",
  SK: "Saskatchewan",
  YT: "Yukon Territory"
});

/***/ }),

/***/ "./src/js/blocks/helper-functions/us-states.js":
/*!*****************************************************!*\
  !*** ./src/js/blocks/helper-functions/us-states.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  AL: "Alabama",
  AK: "Alaska",
  AS: "American Samoa",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District Of Columbia",
  FM: "Federated States Of Micronesia",
  FL: "Florida",
  GA: "Georgia",
  GU: "Guam",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MH: "Marshall Islands",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  MP: "Northern Mariana Islands",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PW: "Palau",
  PA: "Pennsylvania",
  PR: "Puerto Rico",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VI: "Virgin Islands",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming"
});

/***/ }),

/***/ "./src/js/blocks/image-block.jsx":
/*!***************************************!*\
  !*** ./src/js/blocks/image-block.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return developmentBlock; });
/* harmony import */ var _blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _blocks_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _blocks_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Helpers



function developmentBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "custom-image";
  var blockTitle = "Media - Image";
  var blockDescription = "A single image upload.";
  var blockCategory = "media";
  var blockIcon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: blockTitle,
    description: blockDescription,
    category: blockCategory,
    icon: blockIcon,
    attributes: {
      caption: {
        type: 'String',
        default: ''
      },
      image_alt: {
        type: 'String',
        default: ''
      },
      image_url: {
        type: 'String',
        default: ''
      },
      image_id: {
        type: 'Number',
        default: 0
      }
    },
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var caption = attributes.caption,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Media - Image"), /*#__PURE__*/React.createElement(_blocks_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add an image'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_blocks_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: caption,
          reference: "caption",
          classes: ['caption'],
          tagName: "p",
          settings: [],
          placeholder: "Please provide a caption for your image"
        }]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var caption = attributes.caption,
          image_id = attributes.image_id,
          image_alt = attributes.image_alt,
          image_url = attributes.image_url;
      return null;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/image-list/image-list-block.jsx":
/*!*******************************************************!*\
  !*** ./src/js/blocks/image-list/image-list-block.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listImageBlock; });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable




function listImageBlock() {
  /**
   * GUTENBERG BLOCK - Image List Block
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "image-list";
  var title = "List";
  var description = "A single list.";
  var category = "common";
  var icon = "align-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    image_id: {
      type: 'Number',
      default: 0
    },
    image_alt: {
      type: 'String',
      default: ''
    },
    image_url: {
      type: 'String',
      default: ''
    },
    title: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    category: category,
    icon: icon,
    parent: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/image-list-container")],
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "List"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add Icon (optional)',
          imageClasses: ['image-text__image']
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: title,
          reference: 'title',
          tagName: 'h4',
          classes: ['heading_three'],
          placeholder: 'Add title'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ['core/list', "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph-no-alignment")]
      })))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          reverse = attributes.reverse,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/image-list/image-list-container.jsx":
/*!***********************************************************!*\
  !*** ./src/js/blocks/image-list/image-list-container.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listImageContainerBlock; });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable




function listImageContainerBlock() {
  /**
   * GUTENBERG BLOCK - Image List Container Block
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "image-list-container";
  var title = "Content Block - Square Image";
  var description = "Container with an image and lists.";
  var category = "containers";
  var icon = "align-pull-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    bg_color: {
      type: 'String',
      default: 'white'
    },
    image_id: {
      type: 'Number',
      default: 0
    },
    image_alt: {
      type: 'String',
      default: ''
    },
    image_url: {
      type: 'String',
      default: ''
    },
    reverse: {
      type: 'Boolean',
      default: false
    }
  };
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    category: category,
    icon: icon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var bg_color = attributes.bg_color,
          description = attributes.description,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          reverse = attributes.reverse,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Block Settings",
        controls: [{
          type: 'toggle',
          label: 'Reverse Layout',
          reference: 'reverse',
          value: reverse
        }, {
          type: 'select',
          label: 'Background Color',
          reference: 'bg_color',
          value: bg_color,
          options: [{
            value: 'white',
            label: 'White'
          }, {
            value: 'grey',
            label: 'Grey'
          }, {
            value: 'black',
            label: 'Black'
          }, {
            value: 'red',
            label: 'Dark Red'
          }]
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "custom-container block--".concat(bg_color)
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Content Block - Square Image"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
        className: reverse ? 'row reverse' : 'row'
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-xs-12 col-md-6 col-v-center"
      }, /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add Image',
          imageClasses: ['image-text__image']
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-xs-12 col-md-6 col-v-center"
      }, save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/image-list")],
        template: [["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/image-list")]]
      })))))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          reverse = attributes.reverse,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/image-text.jsx":
/*!**************************************!*\
  !*** ./src/js/blocks/image-text.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imageTextBlock; });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers

 // Reusable




function imageTextBlock() {
  /**
   * GUTENBERG BLOCK - Image Text Block
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "image-text";
  var title = "Content Block - Slanted Image";
  var description = "A reversible component with image one side and text on the other.";
  var category = "common";
  var icon = "align-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttributes = ['image_url', 'image_alt', 'title', 'bg_color'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  attributes['reverse'] = {
    type: 'boolean',
    default: false
  };
  attributes['image_id'] = {
    type: 'integer',
    default: 0
  };
  attributes['bg_color']['default'] = 'white';
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    category: category,
    icon: icon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var bg_color = attributes.bg_color,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          reverse = attributes.reverse,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "Block Settings",
        controls: [{
          type: 'select',
          label: 'Background color',
          reference: 'bg_color',
          value: bg_color,
          options: [{
            label: 'White',
            value: 'white'
          }, {
            label: 'Grey',
            value: 'grey'
          }]
        }, {
          type: 'toggle',
          label: 'Reverse Layout',
          reference: 'reverse',
          value: reverse
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "image-text__container custom-component block--".concat(bg_color)
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Content Block - Slanted Image"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
        className: reverse ? 'row reverse' : 'row'
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-xs-12 col-md-6 col-v-center"
      }, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: title,
          reference: 'title',
          tagName: 'h2',
          classes: ['heading-one']
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph-no-alignment"), 'core/list', 'core/buttons']
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-xs-12 col-md-6 col-v-center"
      }, /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add Image',
          imageClasses: ['image-text__image']
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      })))))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          reverse = attributes.reverse,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/logos/logo-container.jsx":
/*!************************************************!*\
  !*** ./src/js/blocks/logos/logo-container.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcLogoContainerBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function trmcLogoContainerBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "logos-container";
  var blockTitle = "Logo Parade";
  var blockDescription = "Creates a container for logos parade.";
  var blockCategory = "containers";
  var blockIcon = "awards"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    bg_color: {
      type: 'String',
      default: 'white'
    },
    description: {
      type: 'String',
      default: ''
    },
    title: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var bg_color = attributes.bg_color,
          description = attributes.description,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container block--".concat(bg_color, " }")
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Logo Parade"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        controls: [{
          type: 'select',
          label: 'Background Color',
          reference: 'bg_color',
          value: bg_color,
          options: [{
            value: 'white',
            label: 'White'
          }, {
            value: 'grey',
            label: 'Grey'
          }]
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h2',
          classes: ['heading_one'],
          placeholder: 'Logos title here'
        }, {
          reference: 'description',
          value: description,
          tagName: 'p',
          classes: ['paragraph'],
          placeholder: 'Add a description'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "col--4"
      }, save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/logo")],
        template: [["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/logo")]]
      })))];
    },
    save: function save() {
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/logos/logo.jsx":
/*!**************************************!*\
  !*** ./src/js/blocks/logos/logo.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logoBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Helpers



function logoBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "logo";
  var blockTitle = "Logo";
  var blockDescription = "A single logo.";
  var blockCategory = "common";
  var blockIcon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: blockTitle,
    description: blockDescription,
    category: blockCategory,
    icon: blockIcon,
    attributes: {
      image_alt: {
        type: 'String',
        default: ''
      },
      image_url: {
        type: 'String',
        default: ''
      },
      image_id: {
        type: 'Number',
        default: 0
      },
      link: {
        type: 'String',
        default: ''
      }
    },
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/logos-container")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          link = attributes.link;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Logo"), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add an image'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          reference: 'link',
          value: link,
          tagName: 'p',
          classes: ['paragraph'],
          placeholder: 'Add a link for this logo (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var image_id = attributes.image_id,
          image_alt = attributes.image_alt,
          image_url = attributes.image_url;
      return null;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/meta/location-meta.jsx":
/*!**********************************************!*\
  !*** ./src/js/blocks/meta/location-meta.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return locationMetaBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _helper_functions_Locations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-functions/Locations */ "./src/js/blocks/helper-functions/Locations.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function locationMetaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      TextControl = _wp$components.TextControl,
      TextareaControl = _wp$components.TextareaControl,
      RadioControl = _wp$components.RadioControl,
      SelectControl = _wp$components.SelectControl,
      Button = _wp$components.Button;
  var meta_fields = ['location_country', 'location_address', 'location_city', 'location_code', 'location_province', 'location_lat', 'location_lng', 'location_phone', 'location_fax', 'location_hours'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(meta_fields, 'meta');
  attributes['error'] = {
    type: 'String',
    default: ''
  };
  var Location = new _helper_functions_Locations__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var provinces = Location.getProvinces();
  provinces.unshift({
    label: 'Select province',
    value: ''
  });
  var states = Location.getStates();
  states.unshift({
    label: 'Select state',
    value: ''
  });
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/location-meta-block"), {
    title: 'Location Meta',
    icon: 'align-full-width',
    category: 'common',
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var location_country = attributes.location_country,
          location_address = attributes.location_address,
          location_city = attributes.location_city,
          location_province = attributes.location_province,
          location_code = attributes.location_code,
          location_lat = attributes.location_lat,
          location_lng = attributes.location_lng,
          location_phone = attributes.location_phone,
          location_fax = attributes.location_fax,
          location_hours = attributes.location_hours,
          error = attributes.error;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      var setLatLng = function setLatLng(coordinates) {
        if (coordinates.length > 1) {
          updateAttributeValue('location_lng', "".concat(coordinates[0]));
          updateAttributeValue('location_lat', "".concat(coordinates[1]));
        }
      };

      var apiCall = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
          var resp, data, locations;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return fetch(url, {
                    method: 'GET',
                    redirect: 'follow',
                    referrer: 'no-referrer'
                  });

                case 3:
                  resp = _context.sent;
                  _context.next = 6;
                  return resp.json();

                case 6:
                  data = _context.sent;
                  locations = data.features;

                  if (locations && locations.length && locations[0].geometry && locations[0].geometry.coordinates) {
                    setLatLng(locations[0].geometry.coordinates);
                  }

                  _context.next = 14;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](0);
                  updateAttributeValue('error', 'Something went wrong');

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 11]]);
        }));

        return function apiCall(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      var buildUrl = function buildUrl(address) {
        var encodedAddress = encodeURI(address);
        var country = location_country ? location_country : 'CA';

        if (ajaxInfo.apiKey) {
          var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(encodedAddress, ".json?country=").concat(country, "&access_token=").concat(ajaxInfo.apiKey);
          apiCall(url);
        }
      };

      var verifyAddress = function verifyAddress() {
        if ('' === location_address || '' === location_city || '' === location_province || '' === location_code) {
          updateAttributeValue('error', 'Please provide address, city, province/state, and postal/zip code');
          return false;
        }

        updateAttributeValue('error', '');
        return "".concat(location_address, " ").concat(location_city, " ").concat(location_province, " ").concat(location_code);
      };

      var fetchLatLng = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var address;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  address = verifyAddress();

                  if (address) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt("return");

                case 3:
                  buildUrl(address);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function fetchLatLng() {
          return _ref2.apply(this, arguments);
        };
      }();

      return [null, /*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Location Metadata"), /*#__PURE__*/React.createElement("div", {
        className: "page-settings__controls"
      }, /*#__PURE__*/React.createElement(RadioControl, {
        value: location_country,
        onChange: function onChange(value) {
          updateAttributeValue('location_province', '');
          updateAttributeValue('location_country', value);
        },
        label: "Country:",
        selected: location_country ? location_country : 'CA',
        options: [{
          label: "Canada",
          value: "CA"
        }, {
          label: "United States",
          value: "US"
        }]
      }), /*#__PURE__*/React.createElement("div", {
        className: "mt-xs-3"
      }, /*#__PURE__*/React.createElement(TextControl, {
        value: location_address,
        onChange: function onChange(value) {
          updateAttributeValue('location_address', value);
        },
        label: "Street Address:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: location_city,
        onChange: function onChange(value) {
          updateAttributeValue('location_city', value);
        },
        label: "City:"
      }), /*#__PURE__*/React.createElement(SelectControl, {
        value: location_province,
        onChange: function onChange(value) {
          updateAttributeValue('location_province', value);
        },
        label: location_country !== 'US' ? "Province/Territory:" : "State",
        options: location_country !== 'US' ? provinces : states
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: location_code,
        onChange: function onChange(value) {
          updateAttributeValue('location_code', value);
        },
        label: location_country !== 'US' ? 'Postal Code:' : 'Zip Code'
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: location_phone,
        onChange: function onChange(value) {
          updateAttributeValue('location_phone', value);
        },
        label: "Phone:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: location_fax,
        onChange: function onChange(value) {
          updateAttributeValue('location_fax', value);
        },
        label: "Fax:"
      }), /*#__PURE__*/React.createElement(TextareaControl, {
        value: location_hours,
        onChange: function onChange(value) {
          updateAttributeValue('location_hours', value);
        },
        label: "Hours:"
      }), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '14px',
          paddingTop: '10px',
          fontStyle: 'italic',
          textAlign: 'center'
        }
      }, "Longitude and Latitude are generated by the MapBox Geocode API. Please ensure the MapBox API Key is set in the theme settings."), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '14px',
          paddingTop: '10px',
          fontStyle: 'italic',
          textAlign: 'center'
        }
      }, "If you'd prefer to limit the number of calls to the MapBox API you can manually find Latitude and Longitude using ", /*#__PURE__*/React.createElement("a", {
        href: "https://www.latlong.net/"
      }, "this tool"), " and add them manually."), /*#__PURE__*/React.createElement("div", {
        className: "button-container copy--center"
      }, /*#__PURE__*/React.createElement(Button, {
        className: "button button-large",
        onClick: fetchLatLng
      }, '' !== location_lat && '' !== location_lng ? 'Update Longitude and Latitude' : 'Generate Longitude and Latitude')), error !== '' ? /*#__PURE__*/React.createElement("p", {
        class: "copy--center"
      }, error) : null, /*#__PURE__*/React.createElement(TextControl, {
        value: location_lat,
        onChange: function onChange(value) {
          updateAttributeValue('location_lat', value);
        },
        label: "Latitude"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: location_lng,
        onChange: function onChange(value) {
          updateAttributeValue('location_lng', value);
        },
        label: "Longitude"
      }))))];
    },
    // No information saved to the block
    // Data is saved to post meta via attributes
    save: function save() {
      return null;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/meta/news-releases-meta.jsx":
/*!***************************************************!*\
  !*** ./src/js/blocks/meta/news-releases-meta.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return locationMetaBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function locationMetaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var TextControl = wp.components.TextControl;
  var Inserter = wp.blockEditor.Inserter;
  var meta_fields = ['news_release_date'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(meta_fields, 'meta');
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/news-release-meta-block"), {
    title: 'News Release Meta',
    icon: 'align-full-width',
    category: 'common',
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var news_release_date = attributes.news_release_date;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [null, /*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "New Release Meta"), /*#__PURE__*/React.createElement("div", {
        className: "page-settings__controls"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mt-xs-3"
      }, /*#__PURE__*/React.createElement(TextControl, {
        value: news_release_date,
        onChange: function onChange(value) {
          updateAttributeValue('news_release_date', value);
        },
        label: "Release Date (YYYY/MM/DD):"
      }))))];
    },
    // No information saved to the block
    // Data is saved to post meta via attributes
    save: function save() {
      return null;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/meta/page-meta.jsx":
/*!******************************************!*\
  !*** ./src/js/blocks/meta/page-meta.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageMetaBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_custom_video_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-video-upload.jsx */ "./src/js/blocks/reusable/custom-video-upload.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function pageMetaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      TextControl = _wp$components.TextControl,
      TextareaControl = _wp$components.TextareaControl,
      RadioControl = _wp$components.RadioControl,
      SelectControl = _wp$components.SelectControl,
      ToggleControl = _wp$components.ToggleControl,
      Button = _wp$components.Button;
  var Inserter = wp.blockEditor.Inserter;
  var meta_fields = ['hero_style', 'hero_background_color', 'headline', 'hero_cta_one_link', 'hero_cta_one_text', 'hero_cta_two_link', 'hero_cta_two_text', 'hero_video_id', 'hero_video_url', 'hero_video_alt', 'gradient_background'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(meta_fields, 'meta');
  attributes['hero_style']['default'] = 'square';
  attributes['hero_background_color']['default'] = 'grey';
  attributes['gradient_background']['default'] = 'false';
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/page-meta-block"), {
    title: 'Page Meta',
    icon: 'align-full-width',
    category: 'common',
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var className = "".concat(props.className, " meta-block");
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var gradient_background = attributes.gradient_background,
          hero_style = attributes.hero_style,
          hero_background_color = attributes.hero_background_color,
          headline = attributes.headline,
          hero_cta_one_link = attributes.hero_cta_one_link,
          hero_cta_one_text = attributes.hero_cta_one_text,
          hero_cta_two_link = attributes.hero_cta_two_link,
          hero_cta_two_text = attributes.hero_cta_two_text,
          hero_video_url = attributes.hero_video_url,
          hero_video_id = attributes.hero_video_id,
          hero_video_alt = attributes.hero_video_alt;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      function getImageButton(openEvent, label) {
        {
          return /*#__PURE__*/React.createElement("div", {
            className: "components-base-control"
          }, /*#__PURE__*/React.createElement(Button, {
            onClick: openEvent,
            className: "button button-large"
          }, label));
        }
      }

      ;
      return [null, /*#__PURE__*/React.createElement("div", {
        className: className
      }, /*#__PURE__*/React.createElement("div", {
        className: "page-settings__controls"
      }, /*#__PURE__*/React.createElement("h4", null, "Header Settings"), hero_style === 'slanted' ? /*#__PURE__*/React.createElement("p", {
        class: "paragraph--core copy--italic"
      }, "Image needs to be added as \"Featured Image\" in sidebar.") : null, /*#__PURE__*/React.createElement("p", {
        class: "paragraph--core copy--italic mb-xs-3"
      }, "An excerpt can be added in the sidebar (optional)."), /*#__PURE__*/React.createElement(RadioControl, {
        value: hero_style,
        onChange: function onChange(value) {
          updateAttributeValue('hero_style', value);
        },
        label: "Header Style:",
        selected: hero_style ? hero_style : 'square',
        options: [{
          label: "Square",
          value: "square"
        }, {
          label: "Slanted",
          value: "slanted"
        }, {
          label: "Video",
          value: "video"
        }]
      }), /*#__PURE__*/React.createElement("div", {
        className: "mt-xs-3"
      }, /*#__PURE__*/React.createElement(SelectControl, {
        value: hero_background_color,
        onChange: function onChange(value) {
          updateAttributeValue('hero_background_color', value);
        },
        label: "Background Color:",
        options: [{
          label: 'Grey',
          value: 'grey'
        }, {
          label: 'Red',
          value: 'red'
        }, {
          label: 'Black',
          value: 'black'
        }]
      })), hero_style === 'video' ? /*#__PURE__*/React.createElement("div", {
        className: "mt-xs-3"
      }, /*#__PURE__*/React.createElement(_reusable_custom_video_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: hero_video_url,
          reference: 'hero_video_url',
          altValue: hero_video_alt,
          altReference: 'hero_video_alt',
          idValue: hero_video_id,
          idReference: 'hero_video_id',
          buttonText: 'Add a video'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      })) : null, /*#__PURE__*/React.createElement("div", {
        className: "mv-xs-2"
      }, /*#__PURE__*/React.createElement(ToggleControl, {
        label: "Add gradient grey background to page?",
        checked: gradient_background === 'true',
        onChange: function onChange(change) {
          return updateAttributeValue('gradient_background', "".concat(change === true));
        }
      })), /*#__PURE__*/React.createElement(TextareaControl, {
        value: headline,
        onChange: function onChange(value) {
          updateAttributeValue('headline', value);
        },
        label: "Headline:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: hero_cta_one_text,
        onChange: function onChange(value) {
          updateAttributeValue('hero_cta_one_text', value);
        },
        label: "First Button Text (optional):"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: hero_cta_one_link,
        onChange: function onChange(value) {
          updateAttributeValue('hero_cta_one_link', value);
        },
        label: "First Button Link (optional):"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: hero_cta_two_text,
        onChange: function onChange(value) {
          updateAttributeValue('hero_cta_two_text', value);
        },
        label: "Second Button Text (optional):"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: hero_cta_two_link,
        onChange: function onChange(value) {
          updateAttributeValue('hero_cta_two_link', value);
        },
        label: "Second Button Link (optional):"
      })))];
    },
    // No information saved to the block
    // Data is saved to post meta via attributes
    save: function save() {
      return null;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/page-strip-graphic.jsx":
/*!**********************************************!*\
  !*** ./src/js/blocks/page-strip-graphic.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcPageStripGraphicBlock; });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable



function trmcPageStripGraphicBlock() {
  /**
   * GUTENBERG BLOCK - Page Strip Graphic
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "page-strip-graphic";
  var title = "Page Strip - Image  BG";
  var description = "A page strip with a background image.";
  var category = "page-strips";
  var icon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    },
    image_id: {
      type: 'Number',
      default: 0
    },
    image_alt: {
      type: 'String',
      default: ''
    },
    image_url: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    category: category,
    icon: icon,
    attributes: attributes,
    transforms: {
      to: [{
        type: "block",
        blocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/page-strip")],
        transform: function transform(attributes, innerBlocks) {
          return wp.blocks.createBlock("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/page-strip"), attributes, innerBlocks);
        }
      }]
    },
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var title = attributes.title,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          image_url = attributes.image_url;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Block Settings",
        controls: [{
          type: 'image',
          label: 'Background Image',
          image_id: image_id,
          image_alt: image_alt,
          image_url: image_url,
          id_reference: 'image_id',
          url_reference: 'image_url',
          alt_reference: 'image_alt'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", {
        class: "custom-component block--black",
        style: {
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(".concat(image_url, ")"),
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Page Strip - Image BG"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "copy--center"
      }, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: title,
          reference: 'title',
          tagName: 'h2',
          classes: ['heading_one'],
          placeholder: 'Please provide a title for this block'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph-no-alignment"), 'core/buttons']
      })))))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/page-strip.jsx":
/*!**************************************!*\
  !*** ./src/js/blocks/page-strip.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageStripBlock; });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers

 // Reusable



function pageStripBlock() {
  /**
   * GUTENBERG BLOCK - Page Strip
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "page-strip";
  var title = "Page Strip";
  var description = "A page strip with optional CTA.";
  var category = "page-strips";
  var icon = "align-center"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttributes = ['bg_color', 'title'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  attributes['bg_color']['default'] = 'white';
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"])),
    category: category,
    icon: icon,
    attributes: attributes,
    transforms: {
      to: [{
        type: "block",
        blocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/page-strip-graphic")],
        transform: function transform(attributes, innerBlocks) {
          return wp.blocks.createBlock("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/page-strip-graphic"), attributes, innerBlocks);
        }
      }]
    },
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var bg_color = attributes.bg_color,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Block Settings",
        controls: [{
          type: 'select',
          label: 'Background Color',
          reference: 'bg_color',
          value: bg_color,
          options: [{
            value: 'white',
            label: 'White'
          }, {
            value: 'grey',
            label: 'Grey'
          }, {
            value: 'black',
            label: 'Black'
          }, {
            value: 'red',
            label: 'Dark Red'
          }, {
            value: 'red-lt',
            label: 'Light Red'
          }]
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "block--".concat(bg_color, " custom-component")
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Page Strip"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: title,
          reference: 'title',
          tagName: 'h2',
          classes: ['heading_one'],
          placeholder: "Please provide a title"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph-no-alignment"), 'core/buttons']
      })))))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var bg_color = attributes.bg_color,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/reusable/block-custom-settings.jsx":
/*!**********************************************************!*\
  !*** ./src/js/blocks/reusable/block-custom-settings.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockSettings; });
/* harmony import */ var _helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/custom-error.js */ "./src/js/blocks/helper-functions/custom-error.js");
{
  /* 
  ABOUT
  Block Settings is a custom simple component to easily add a side panel with settings to any custom Gutenberg Block
  PROPS 
     title 
         The title for the panel in the sidebar.
      controls
         An array of objects. Each object is a single setting with the following fields. 
         - type : Can be 'radio', 'select', or 'text'
         - label : The label for the controls (will be passed through an i18n function)
         - options : An array of objects, each with a "label" and "value" field (only for selects and radios).
         - reference : The name of the attribute it controls
         - value : The value of the attribute
      onChange
         A function to update the attribute on the parent on changes in the child. Feel free to use the example below, as long as updateAttributeValue is defined on the parent.  
     
         onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
      EXAMPLE 
     Needs to be imported before top of export function. 
      <BlockSettings
         title="Block Settings"
         controls={[
             { 
                 type: 'radio',
                 label: 'Number of Columns',
                 options: [
                     { value: '2', label: '2' },
                     { value: '3', label: '3' },
                     { value: '4', label: '4' },
                 ],
                 reference: 'columns',
                 value: columns,
             },
             { 
                 type: 'radio',
                 label: 'Column Style',
                 options: [
                     { value: 'icon', label: 'With icon' },
                     { value: 'no-icon', label: 'Without icon' },
                 ],
                 reference: 'columnStyle',
                 value: columnStyle,
             }
         ]}
         onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
     />
     
  */
} // Created a custom errors function allow for clearer feedback.


function BlockSettings(props) {
  var _wp$blockEditor = wp.blockEditor,
      InspectorControls = _wp$blockEditor.InspectorControls,
      MediaUpload = _wp$blockEditor.MediaUpload;
  var _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      PanelRow = _wp$components.PanelRow,
      RadioControl = _wp$components.RadioControl,
      RangeControl = _wp$components.RangeControl,
      SelectControl = _wp$components.SelectControl,
      TextControl = _wp$components.TextControl,
      ToggleControl = _wp$components.ToggleControl,
      CheckboxControl = _wp$components.CheckboxControl,
      Button = _wp$components.Button;
  var _wp = wp,
      i18n = _wp.i18n;
  var title = props.title,
      controls = props.controls,
      _onChange = props.onChange;

  var getImageButton = function getImageButton(openEvent, label) {
    return /*#__PURE__*/React.createElement("div", {
      className: "components-base-control"
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: openEvent,
      className: "button button-large"
    }, label));
  };

  var requiredFields;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
    title: i18n.__(title)
  }, /*#__PURE__*/React.createElement(PanelRow, null, controls.map(function (control) {
    switch (control.type) {
      case 'radio':
        requiredFields = ['label', 'value', 'options', 'reference'];
        Object(_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
        return /*#__PURE__*/React.createElement(RadioControl, {
          label: i18n.__("".concat(control.label)),
          selected: control.value,
          options: control.options,
          onChange: function onChange(change) {
            return _onChange(control.reference, change);
          }
        });

      case 'range':
        requiredFields = ['label', 'value', 'reference', 'min', 'max'];
        Object(_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
        return /*#__PURE__*/React.createElement(RangeControl, {
          label: control.label,
          value: control.value,
          onChange: function onChange(change) {
            return _onChange(control.reference, change);
          },
          min: control.min,
          max: control.max,
          initalPosition: control.min
        });

      case 'select':
        requiredFields = ['label', 'value', 'options', 'reference'];
        Object(_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
        return /*#__PURE__*/React.createElement(SelectControl, {
          label: i18n.__("".concat(control.label)),
          value: control.value,
          options: control.options,
          onChange: function onChange(change) {
            return _onChange(control.reference, change);
          }
        });

      case 'text':
        requiredFields = ['label', 'value', 'reference'];
        Object(_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
        return /*#__PURE__*/React.createElement(TextControl, {
          label: i18n.__("".concat(control.label)),
          value: control.value,
          onChange: function onChange(change) {
            return _onChange(control.reference, change);
          }
        });

      case 'toggle':
        requiredFields = ['label', 'value', 'reference'];
        Object(_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
        return /*#__PURE__*/React.createElement(ToggleControl, {
          label: i18n.__("".concat(control.label)),
          checked: control.value,
          onChange: function onChange(change) {
            return _onChange(control.reference, change);
          }
        });

      case 'image':
        requiredFields = ['label', 'image_id', 'id_reference', 'image_url', 'url_reference', 'image_alt', 'alt_reference'];
        Object(_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
        return /*#__PURE__*/React.createElement(MediaUpload, {
          onSelect: function onSelect(media) {
            _onChange(control.alt_reference, media.alt);

            _onChange(control.id_reference, media.id.toString());

            _onChange(control.url_reference, media.url);
          },
          type: "image",
          value: control.image_id,
          render: function render(_ref) {
            var open = _ref.open;
            return getImageButton(open, control.label);
          }
        });

      case 'file':
        requiredFields = ['label', 'id_value', 'id_reference', 'url_value', 'url_reference', 'name_value', 'name_reference'];
        Object(_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
        return /*#__PURE__*/React.createElement(MediaUpload, {
          onSelect: function onSelect(file) {
            _onChange(control.url_reference, file.url);

            _onChange(control.id_reference, file.id);

            _onChange(control.name_reference, file.filename);
          },
          type: "image",
          value: control.file_id,
          render: function render(_ref2) {
            var open = _ref2.open;
            return getImageButton(open, control.label);
          }
        });

      case 'checkbox':
        requiredFields = ['label', 'value', 'reference'];
        Object(_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
        return /*#__PURE__*/React.createElement(CheckboxControl, {
          label: control.label,
          checked: control.value,
          onChange: function onChange(change) {
            return _onChange(control.reference, change);
          }
        });

      default:
        return "Control type either not set or invalid for ".concat(control.label);
    }
  })))));
}

/***/ }),

/***/ "./src/js/blocks/reusable/custom-image-upload.jsx":
/*!********************************************************!*\
  !*** ./src/js/blocks/reusable/custom-image-upload.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomImageUpload; });
/* harmony import */ var _helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/custom-error */ "./src/js/blocks/helper-functions/custom-error.js");
{
  /* 
  ABOUT
  Custom Image Upload is a custom component that extends the built in MediaUpload component for easier customization across the site. 
  PROPS 
     components
         An array of objects. Each object is a single Media Upload component with associated button with the following fields:
         - buttonText : The text to be displayed on the upload Button
         - value : The imageUrl for the specific image.
         - reference : The name of the image url attribute on the parent component.
         - altValue : A reference to the image url attribute on the parent component.
         - reference : The name of the alt value attribute on the parent component.
         - idValue : A reference to the image id attribute on the parent.
         - reference : The name of the image id attribute on the parent component.
         - imageClasses (optional) : An array of classes to be passed to the div containing the image. 
         - buttonClasses (optional) : An array of classes to be passed to the upload image button.
      onChange
         A function to update the attribute on the parent on changes in the child. 
         Feel free to use the example below, as long as updateAttributeValue is defined on the parent.  
     
         onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
  EXAMPLE
      <CustomImageUpload
         components={[
             {
                 value: imageUrl,
                 reference: 'imageUrl',
                 altValue: imageAlt,
                 altReference: 'imageAlt',
                 idValue: imageId,
                 idReference: 'imageId',
                 buttonText: 'Add an Icon',
             },
         ]}
         onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
     />
  */
}

function CustomImageUpload(props) {
  var _wp$blockEditor = wp.blockEditor,
      MediaUpload = _wp$blockEditor.MediaUpload,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
  var Button = wp.components.Button;
  var Fragment = wp.element.Fragment;
  var _wp = wp,
      i18n = _wp.i18n;

  var checkRequiredValues = function checkRequiredValues(props) {
    var requiredFields = ['components', 'onChange'];
    var values = props;
    values.type = 'Custom Image';
    Object(_helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__["default"])(values, requiredFields);
  };

  var checkRequiredImageAttributes = function checkRequiredImageAttributes(props) {
    var requiredFields = ['reference', 'value', 'altValue', 'altReference', 'idReference', 'idValue', 'buttonText'];
    var values = props;
    values.type = 'Custom Image';
    Object(_helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__["default"])(values, requiredFields);
  };

  checkRequiredValues(props);
  var components = props.components,
      onChange = props.onChange;

  var clearImage = function clearImage() {};

  var getImageButton = function getImageButton(openEvent, component) {
    if (component.value) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: component.imageClasses && Array.isArray(component.imageClasses) ? component.imageClasses.join(' ') : 'image'
      }, /*#__PURE__*/React.createElement("img", {
        src: component.value,
        onClick: openEvent,
        alt: component.altValue ? component.altValue : ''
      })), /*#__PURE__*/React.createElement("div", {
        className: "button-container"
      }, /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          onChange(component.altReference, '');
          onChange(component.reference, '');
          onChange(component.idReference, '');
        },
        className: component.buttonClasses && Array.isArray(component.buttonClasses) ? component.buttonClasses.join(' ') : 'button button-large'
      }, i18n.__('Remove Image'))));
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "button-container"
      }, /*#__PURE__*/React.createElement(Button, {
        onClick: openEvent,
        className: component.buttonClasses && Array.isArray(component.buttonClasses) ? component.buttonClasses.join(' ') : 'button button-large'
      }, i18n.__(component.buttonText)));
    }
  };

  return /*#__PURE__*/React.createElement(Fragment, null, components.map(function (component) {
    checkRequiredImageAttributes(component);
    return /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: function onSelect(media) {
        onChange(component.altReference, media.alt);
        onChange(component.reference, media.url);
        onChange(component.idReference, Number(media.id));
      },
      type: "image",
      value: component.value,
      render: function render(_ref) {
        var open = _ref.open;
        return getImageButton(open, component);
      }
    }));
  }));
}

/***/ }),

/***/ "./src/js/blocks/reusable/custom-richtext-block.jsx":
/*!**********************************************************!*\
  !*** ./src/js/blocks/reusable/custom-richtext-block.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return customRichTextBlock; });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function customRichTextBlock(blockObject) {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var _wp$blockEditor = wp.blockEditor,
      RichText = _wp$blockEditor.RichText,
      AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
      BlockControls = _wp$blockEditor.BlockControls;
  var slug = blockObject.slug,
      title = blockObject.title,
      description = blockObject.description,
      category = blockObject.category,
      classes = blockObject.classes,
      icon = blockObject.icon,
      tagName = blockObject.tagName,
      placeholder = blockObject.placeholder;
  var settings = blockObject.settings && Array.isArray(blockObject.settings) ? blockObject.settings : [];
  var parent = blockObject.parent && Array.isArray(blockObject.parent) ? blockObject.parent : null;
  var blockSettings = blockObject.blockSettings ? true : false;
  var transforms = {};

  if (blockObject.transforms && blockObject.transforms.length) {
    transforms.to = [];
    blockObject.transforms.forEach(function (block) {
      var transformObject = {
        type: 'block',
        blocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(block)],
        transform: function transform(attributes, innerBlocks) {
          return createBlock("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(block), attributes, innerBlocks);
        }
      };
      transforms.to.push(transformObject);
    });
  }

  var stringAttrs = ['content'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttrs);
  attributes['alignment'] = blockObject.alignment === false ? {
    type: 'Boolean',
    default: false
  } : {
    type: 'String',
    default: 'left'
  };
  attributes['custom_settings'] = {
    type: 'boolean',
    default: blockSettings
  };
  var _wp = wp,
      i18n = _wp.i18n;
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(slug), {
    title: i18n.__(title),
    description: i18n.__(description),
    category: category,
    icon: icon,
    parent: parent,
    attributes: attributes,
    transforms: transforms,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var alignment = attributes.alignment,
          content = attributes.content,
          custom_settings = attributes.custom_settings;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: alignment ? "text-".concat(alignment) : null
      }, alignment ? /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(AlignmentToolbar, {
        value: alignment,
        onChange: function onChange(change) {
          updateAttributeValue("alignment", change);
        }
      })) : null, /*#__PURE__*/React.createElement(RichText, {
        className: classes && classes.length ? classes.join(' ') : null,
        tagName: tagName,
        placeholder: placeholder,
        keepPlaceholderOnFocus: true,
        allowedFormats: settings,
        value: content,
        onChange: function onChange(changes) {
          updateAttributeValue("content", changes);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var alignment = attributes.alignment,
          content = attributes.content,
          custom_settings = attributes.custom_settings;
      return /*#__PURE__*/React.createElement(RichText.Content, {
        tagName: tagName,
        value: content
      });
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/reusable/custom-richtext-component.jsx":
/*!**************************************************************!*\
  !*** ./src/js/blocks/reusable/custom-richtext-component.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomRichText; });
/* harmony import */ var _helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/custom-error */ "./src/js/blocks/helper-functions/custom-error.js");
{
  /* 
  ABOUT
  RichText component is a component to easily add a RichText WordPress component to any existing block. 
  WARNING
  Currently the Alignment Toolbar can only be added to the entire Block, not the individual RichText component, so if you enable the Alignment on more than one custom RichText element within a specific block it will show two alignment toolbars side-by-side. 
  PROPS 
   Components
     An array of objects. Each object is a single RichText component with the following fields. Can create multiple RichText components.
       - tagName : The name of the HTML tag to be applied to this RichText component
       - reference : The name of the attribute it controls
       - value : The value of the attribute
       - placeholder (optional) : Pass a string for the RichText placeholder. 
       - classes (optional) : Pass an array of classes to be applied to the component for styling.
       - settings (optional): Pass an array of formatting settings to be enabled. Need to be namespaced (e.g. 'core/bold', 'core/italic', or 'core/link'). Will remove all settings if passed an empty array. Current custom options include: 
       - align (optional): An object to enable/disable the alignment toolbar and pass it settings. It has the following values. 
         -- value : A reference to the attribute in the parent block that controls alignment (only required if enabled is set to true)
         -- reference : Name of the attribute in the parent block that controls alignment (only required if enabled is set to true)
     
       ** Any optional revert to a default if nothing is passed. 
    onChange
     A function to update the attribute on the parent on changes in the child. 
     Feel free to use the example below, as long as updateAttributeValue is defined on the parent.  
       
       onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
  EXAMPLE
    <CustomRichText 
     onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
     components={[
       {
         value: title,
         reference: "title",
         classes: ['custom-class'],
         tagName: "h2",
         settings: ['core/bold', 'core/link'],
         align: {
           value: alignment,
           reference: 'alignment'
         },
       },
       {
         value: subtitle,
         reference: "subtitle",
         tagName: "h3",
       }
     ]}
   />
  */
}

function CustomRichText(props) {
  var _wp$blockEditor = wp.blockEditor,
      RichText = _wp$blockEditor.RichText,
      AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
      BlockControls = _wp$blockEditor.BlockControls;

  var checkFields = function checkFields(values, fields) {
    Object(_helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__["default"])(values, fields);
  };

  var checkRequiredComponentFields = function checkRequiredComponentFields(values) {
    var requiredFields = ['value', 'tagName'];
    values.type = 'RichText';
    checkFields(values, requiredFields);
  };

  var checkRequiredProps = function checkRequiredProps(props) {
    var requiredFields = ['onChange', 'components'];
    var values = props;
    values.type = 'RichText';
    checkFields(values, requiredFields);
  };

  var checkAlignment = function checkAlignment(align) {
    var alignmentRequiredFields = ['value', 'reference'];
    align.type = 'RichText alignment';
    checkFields(align, alignmentRequiredFields);
  };

  checkRequiredProps(props);
  var components = props.components,
      _onChange = props.onChange;
  return /*#__PURE__*/React.createElement("div", null, components.map(function (component) {
    checkRequiredComponentFields(component);

    if (component.align) {
      checkAlignment(component.align);
    }

    return /*#__PURE__*/React.createElement("div", null, component.align ? /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(AlignmentToolbar, {
      value: component.align.value,
      onChange: function onChange(change) {
        _onChange(component.align.reference, change);
      }
    })) : null, /*#__PURE__*/React.createElement(RichText, {
      className: component.classes && component.classes.length > 0 ? "components-text-control__input ".concat(component.classes.join(' ')) : 'components-text-control__input',
      tagName: component.tagName,
      style: component.align ? {
        textAlign: component.align.value
      } : {},
      placeholder: component.placeholder ? component.placeholder : "Start writing...",
      keepPlaceholderOnFocus: true,
      allowedFormats: component.settings && Array.isArray(component.settings) ? component.settings : ['core/bold', 'core/underline', 'core/link'],
      value: component.value,
      onChange: function onChange(changes) {
        _onChange(component.reference, changes);
      }
    }));
  }));
}

/***/ }),

/***/ "./src/js/blocks/reusable/custom-video-upload.jsx":
/*!********************************************************!*\
  !*** ./src/js/blocks/reusable/custom-video-upload.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomVideoUpload; });
/* harmony import */ var _helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/custom-error */ "./src/js/blocks/helper-functions/custom-error.js");
{
  /* 
  ABOUT
  Custom Video Upload is a custom component that extends the built in MediaUpload component for easier customization across the site. 
  PROPS 
     components
         An array of objects. Each object is a single Media Upload component with associated button with the following fields:
         - buttonText : The text to be displayed on the upload Button
         - value : The videoUrl for the specific video.
         - reference : The name of the video url attribute on the parent component.
         - altValue : A reference to the video url attribute on the parent component.
         - reference : The name of the alt value attribute on the parent component.
         - idValue : A reference to the video id attribute on the parent.
         - reference : The name of the video id attribute on the parent component.
         - videoClasses (optional) : An array of classes to be passed to the div containing the video. 
         - buttonClasses (optional) : An array of classes to be passed to the upload video button.
      onChange
         A function to update the attribute on the parent on changes in the child. 
         Feel free to use the example below, as long as updateAttributeValue is defined on the parent.  
     
         onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
  EXAMPLE
      <CustomVideoUpload
         components={[
             {
                 value: videoUrl,
                 reference: 'videoUrl',
                 altValue: videoAlt,
                 altReference: 'videoAlt',
                 idValue: videoId,
                 idReference: 'videoId',
                 buttonText: 'Add an Icon',
             },
         ]}
         onChange={ ( attribute, change ) => { updateAttributeValue(attribute, change) } }
     />
  */
}

function CustomVideoUpload(props) {
  var _wp$blockEditor = wp.blockEditor,
      MediaUpload = _wp$blockEditor.MediaUpload,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
  var Button = wp.components.Button;
  var Fragment = wp.element.Fragment;
  var _wp = wp,
      i18n = _wp.i18n;

  var checkRequiredValues = function checkRequiredValues(props) {
    var requiredFields = ['components', 'onChange'];
    var values = props;
    values.type = 'Custom Video';
    Object(_helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__["default"])(values, requiredFields);
  };

  var checkRequiredVideoAttributes = function checkRequiredVideoAttributes(props) {
    var requiredFields = ['reference', 'value', 'altValue', 'altReference', 'idReference', 'idValue', 'buttonText'];
    var values = props;
    values.type = 'Custom Video';
    Object(_helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__["default"])(values, requiredFields);
  };

  checkRequiredValues(props);
  var components = props.components,
      onChange = props.onChange;

  var clearVideo = function clearVideo() {};

  var getVideoButton = function getVideoButton(openEvent, component) {
    if (component.value) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: component.videoClasses && Array.isArray(component.videoClasses) ? component.videoClasses.join(' ') : 'video'
      }, /*#__PURE__*/React.createElement("video", {
        onClick: openEvent,
        alt: component.altValue ? component.altValue : ''
      }, /*#__PURE__*/React.createElement("source", {
        src: component.value
      }))), /*#__PURE__*/React.createElement("div", {
        className: "button-container"
      }, /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          onChange(component.altReference, '');
          onChange(component.reference, '');
          onChange(component.idReference, 0);
        },
        className: component.buttonClasses && Array.isArray(component.buttonClasses) ? component.buttonClasses.join(' ') : 'button button-large'
      }, i18n.__('Remove Video'))));
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "button-container"
      }, /*#__PURE__*/React.createElement(Button, {
        onClick: openEvent,
        className: component.buttonClasses && Array.isArray(component.buttonClasses) ? component.buttonClasses.join(' ') : 'button button-large'
      }, i18n.__(component.buttonText)));
    }
  };

  return /*#__PURE__*/React.createElement(Fragment, null, components.map(function (component) {
    checkRequiredVideoAttributes(component);
    return /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: function onSelect(media) {
        onChange(component.altReference, media.alt);
        onChange(component.reference, media.url);
        onChange(component.idReference, Number(media.id));
      },
      type: "video",
      value: component.value,
      render: function render(_ref) {
        var open = _ref.open;
        return getVideoButton(open, component);
      }
    }));
  }));
}

/***/ }),

/***/ "./src/js/blocks/slider/body-copy-image-slide.jsx":
/*!********************************************************!*\
  !*** ./src/js/blocks/slider/body-copy-image-slide.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcBodyCopyImageSlideBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function trmcBodyCopyImageSlideBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "body-copy-image-slide";
  var blockTitle = "Image Slide";
  var blockDescription = "Creates an image slide with a caption.";
  var blockCategory = "common";
  var blockIcon = "feedback"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttrs = ['caption', 'image_alt', 'image_url'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__["default"])(stringAttrs);
  attributes['image_id'] = {
    type: 'Number',
    default: 0
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/body-copy-carousel")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var caption = attributes.caption,
          image_id = attributes.image_id,
          image_alt = attributes.image_alt,
          image_url = attributes.image_url;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Image Slide"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '1.4rem',
          fontStyle: 'italic'
        }
      }, "Images should be at least 745px wide and 620px tall. Larger images will be cropped with a central focal point."), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add an Image'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'caption',
          value: caption,
          tagName: 'p',
          classes: ['capstion'],
          placeholder: 'Provide a caption for this slide'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save() {
      var caption = attributes.caption,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          image_url = attributes.image_url;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/slider/body-copy-slider-container.jsx":
/*!*************************************************************!*\
  !*** ./src/js/blocks/slider/body-copy-slider-container.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcBodyCopySliderBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function trmcBodyCopySliderBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "body-copy-carousel";
  var blockTitle = "News - Slider";
  var blockDescription = "Creates a carousel.";
  var blockCategory = "carousels";
  var blockIcon = "slides"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: {},
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/body-copy")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "News - Slider"), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/body-copy-image-slide"), 'core/video']
      }))];
    },
    save: function save() {
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/slider/image-slide.jsx":
/*!**********************************************!*\
  !*** ./src/js/blocks/slider/image-slide.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcImageSlideBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function trmcImageSlideBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "image-slide";
  var blockTitle = "Image Slide";
  var blockDescription = "Creates an image slide with a caption.";
  var blockCategory = "common";
  var blockIcon = "feedback"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttrs = ['caption', 'image_alt', 'image_url'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__["default"])(stringAttrs);
  attributes['image_id'] = {
    type: 'Number',
    default: 0
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/carousel")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var caption = attributes.caption,
          image_id = attributes.image_id,
          image_alt = attributes.image_alt,
          image_url = attributes.image_url;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Image Slide"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '14px',
          fontStyle: 'italic'
        }
      }, "Images should be at least 1590px x 550px. Larger images will be cropped with a central focal point."), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add an Image'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'caption',
          value: caption,
          tagName: 'p',
          classes: ['capstion'],
          placeholder: 'Provide a caption for this slide'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save() {
      var caption = attributes.caption,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          image_url = attributes.image_url;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/slider/slider-container.jsx":
/*!***************************************************!*\
  !*** ./src/js/blocks/slider/slider-container.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcSliderBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function trmcSliderBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "carousel";
  var blockTitle = "Media - Slider";
  var blockDescription = "Creates a carousel.";
  var blockCategory = "carousels";
  var blockIcon = "slides"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttrs = ['alignment', 'title'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__["default"])(stringAttrs);
  attributes['alignment']['default'] = 'center';
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var alignment = attributes.alignment,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Media - Slider"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h2',
          classes: ['heading_two'],
          placeholder: 'Provide a Carousel title (optional)',
          align: {
            value: alignment,
            reference: 'alignment'
          }
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/image-slide"), 'core/video']
      }))];
    },
    save: function save() {
      var title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/slider/testimonial-slide.jsx":
/*!****************************************************!*\
  !*** ./src/js/blocks/slider/testimonial-slide.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcTestimonialSlideBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function trmcTestimonialSlideBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "testimonial-slide";
  var blockTitle = "Testimonial Slide";
  var blockDescription = "Creates a testimonial slide.";
  var blockCategory = "carousels";
  var blockIcon = "format-quote"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    company: {
      type: 'String',
      default: ''
    },
    image_alt: {
      type: 'String',
      default: ''
    },
    image_id: {
      type: 'Number',
      default: 0
    },
    image_url: {
      type: 'String',
      default: ''
    },
    speaker: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/testimonial-carousel")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var company = attributes.company,
          image_id = attributes.image_id,
          image_alt = attributes.image_alt,
          image_url = attributes.image_url,
          speaker = attributes.speaker;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Testimonial Slide"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '14px',
          fontStyle: "italic"
        }
      }, "NOTE: Please limit quote lengths to 270 characters or less."), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        template: [["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph-no-alignment")]],
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph-no-alignment")]
      }), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '14px',
          fontStyle: "italic"
        }
      }, "NOTE: Images should be square with a central focal point. Ideal size is 56 x 56"), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add an Image',
          imageClasses: ['image-avatar']
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'speaker',
          value: speaker,
          tagName: 'h3',
          classes: ['heading_five'],
          placeholder: 'Provide a speaker for this quote'
        }, {
          reference: 'company',
          value: company,
          tagName: 'p',
          classes: ['paragraph'],
          placeholder: 'Provide the speaker\'s company/relationship'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save() {
      var company = attributes.company,
          image_id = attributes.image_id,
          image_alt = attributes.image_alt,
          image_url = attributes.image_url,
          speaker = attributes.speaker;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/slider/testimonial-slider-container.jsx":
/*!***************************************************************!*\
  !*** ./src/js/blocks/slider/testimonial-slider-container.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcTestimonialSliderBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function trmcTestimonialSliderBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "testimonial-carousel";
  var blockTitle = "Testimonials";
  var blockDescription = "Creates a carousel for testimonials.";
  var blockCategory = "carousels";
  var blockIcon = "testimonial"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttrs = ['alignment', 'title'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__["default"])(stringAttrs);
  attributes['alignment']['default'] = 'center';
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Testimonials"), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/testimonial-slide")],
        template: [["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/testimonial-slide")]]
      }))];
    },
    save: function save() {
      var title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/stats-column.jsx":
/*!****************************************!*\
  !*** ./src/js/blocks/stats-column.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcStatsColumnBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function trmcStatsColumnBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "stat-column";
  var blockTitle = "Statistic";
  var blockDescription = "Creates a single statistic.";
  var blockCategory = "common";
  var blockIcon = "layout"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    statistic: {
      type: 'String',
      default: ''
    },
    description: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/stats-container")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var description = attributes.description,
          statistic = attributes.statistic;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Statistic"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'statistic',
          value: statistic,
          tagName: 'h3',
          classes: ['heading_two'],
          placeholder: 'Add statistic'
        }, {
          reference: 'description',
          value: description,
          tagName: 'p',
          classes: ['paragraph'],
          placeholder: 'Add description'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save() {
      var description = attributes.description,
          statistic = attributes.statistic;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/stats-container.jsx":
/*!*******************************************!*\
  !*** ./src/js/blocks/stats-container.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcStatsContainerBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function trmcStatsContainerBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "stats-container";
  var blockTitle = "Stat Call Out";
  var blockDescription = "Creates a container for single statistics.";
  var blockCategory = "containers";
  var blockIcon = "chart-bar"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    },
    description: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var description = attributes.description,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Stat Call Out"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h2',
          classes: ['heading_one'],
          placeholder: 'Add title (optional)'
        }, {
          reference: 'description',
          value: description,
          tagName: 'p',
          classes: ['paragraph'],
          placeholder: 'Add description (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "col--3"
      }, save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/stat-column")]
      })))];
    },
    save: function save() {
      var description = attributes.description,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/text-column.jsx":
/*!***************************************!*\
  !*** ./src/js/blocks/text-column.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return textColumnBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers



function textColumnBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "text-2up";
  var blockTitle = "Text 2-up";
  var blockDescription = "Two columns with headline on left and copy on the right.";
  var blockCategory = "common";
  var blockIcon = "table-col-after"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttributes = ['title'];
  var attributes = Object(_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: title,
          reference: 'title',
          tagName: 'h2',
          placeholder: 'Start writing title...',
          classes: ['heading-one']
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-md-6"
      }, save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        template: [['core/paragraph']],
        allowedBlocks: ['core/paragraph', 'core/button']
      }))))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/timeline/milestone-block.jsx":
/*!****************************************************!*\
  !*** ./src/js/blocks/timeline/milestone-block.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcMilestoneBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function trmcMilestoneBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "milestone";
  var blockTitle = "Milestone";
  var blockDescription = "Creates a single milestone.";
  var blockCategory = "common";
  var blockIcon = "admin-post"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: {
      year: {
        type: 'String',
        default: ''
      },
      image_id: {
        type: 'Number',
        default: 0
      },
      image_alt: {
        type: 'String',
        default: ''
      },
      image_url: {
        type: 'String',
        default: ''
      }
    },
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/timeline-container")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var image_id = attributes.image_id,
          image_alt = attributes.image_alt,
          image_url = attributes.image_url,
          year = attributes.year;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Milestone"), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add Image',
          imageClasses: ['image-text__image']
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '1.4rem',
          fontStyle: 'italic'
        }
      }, "NOTE: Images will be cropped to a square and centered."), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          reference: 'year',
          value: year,
          tagName: 'h2',
          classes: ['heading_two'],
          placeholder: 'Add the year for this milestone'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph-no-alignment")]
      }))];
    },
    save: function save() {
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/timeline/timeline-container-block.jsx":
/*!*************************************************************!*\
  !*** ./src/js/blocks/timeline/timeline-container-block.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trmcTimelineContainerBlock; });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function trmcTimelineContainerBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "timeline-container";
  var blockTitle = "Timeline";
  var blockDescription = "Creates a container for a series of timeline milestones.";
  var blockCategory = "specialty";
  var blockIcon = "clock"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: {
      title: {
        type: 'String',
        default: ''
      }
    },
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Timeline"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h2',
          classes: ['heading_two'],
          placeholder: 'Add timeline title (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/milestone")]
      }))];
    },
    save: function save() {
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/development/blocks/development-blocks.jsx":
/*!**********************************************************!*\
  !*** ./src/js/development/blocks/development-blocks.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return developmentBlocks; });
/* harmony import */ var _development_container_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./development-container.jsx */ "./src/js/development/blocks/development-container.jsx");
/* harmony import */ var _development_column_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./development-column.jsx */ "./src/js/development/blocks/development-column.jsx");
/* harmony import */ var _development_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./development-component.jsx */ "./src/js/development/blocks/development-component.jsx");
/* harmony import */ var _richtext_blocks_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./richtext-blocks.jsx */ "./src/js/development/blocks/richtext-blocks.jsx");




function developmentBlocks() {
  Object(_development_container_jsx__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_development_column_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_development_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_richtext_blocks_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./src/js/development/blocks/development-column.jsx":
/*!**********************************************************!*\
  !*** ./src/js/development/blocks/development-column.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return developmentRowBlock; });
/* harmony import */ var _blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _blocks_helper_functions_default_attrs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/helper-functions/default-attrs.js */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _blocks_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Helpers

 // Reusable


function developmentRowBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "development-column";
  var blockTitle = "Development Column Block";
  var blockDescription = "A block to be used for collaborating between development and design.";
  var blockCategory = "common";
  var blockIcon = "format-status"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttrs = ['xl', 'lg', 'md', 'sm'];
  var attributes = Object(_blocks_helper_functions_default_attrs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttrs);
  registerBlockType("".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/development-component")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var xl = attributes.xl,
          lg = attributes.lg,
          md = attributes.md,
          sm = attributes.sm;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      var options = [{
        value: '',
        label: 'Inherit'
      }, {
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }, {
        value: '6',
        label: '6'
      }, {
        value: '7',
        label: '7'
      }, {
        value: '8',
        label: '8'
      }, {
        value: '9',
        label: '9'
      }, {
        value: '10',
        label: '10'
      }, {
        value: '11',
        label: '11'
      }, {
        value: '12',
        label: '12'
      }];
      return [/*#__PURE__*/React.createElement("div", {
        className: "development-block__column"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, /*#__PURE__*/React.createElement("strong", null, "Column - "), "You can change the width of this column in the block settings."), /*#__PURE__*/React.createElement(_blocks_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        controls: [{
          type: 'select',
          label: 'Column Width - SM',
          options: options,
          reference: 'sm',
          value: sm
        }, {
          type: 'select',
          label: 'Column Width - MD',
          options: options,
          reference: 'md',
          value: md
        }, {
          type: 'select',
          label: 'Column Width - LG',
          options: options,
          reference: 'lg',
          value: lg
        }, {
          type: 'select',
          label: 'Column Width - XL',
          options: options,
          reference: 'xl',
          value: xl
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", null, save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/paragraph"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/headline"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-one"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-two"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-three"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-four"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-five"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/heading-six"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/image"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/btn"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/caption"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/eyebrow")]
      })))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/development/blocks/development-component.jsx":
/*!*************************************************************!*\
  !*** ./src/js/development/blocks/development-component.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return developmentComponentBlock; });
/* harmony import */ var _blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers

function developmentComponentBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "development-component";
  var blockTitle = "Development Component Block";
  var blockDescription = "A block to be used for collaborating between development and design.";
  var blockCategory = "common";
  var blockIcon = "format-status"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/development")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "development-block__component"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, /*#__PURE__*/React.createElement("strong", null, "Component - "), "You can add columns to this component."), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__["namespace"], "/development-column")]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/development/blocks/development-container.jsx":
/*!*************************************************************!*\
  !*** ./src/js/development/blocks/development-container.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return developmentBlock; });
/* harmony import */ var _blocks_helper_functions_boolean_attrs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/helper-functions/boolean-attrs.js */ "./src/js/blocks/helper-functions/boolean-attrs.js");
/* harmony import */ var _blocks_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _blocks_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function developmentBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "development";
  var blockTitle = "Development Block";
  var blockDescription = "A block to be used for collaborating between development and design.";
  var blockCategory = "common";
  var blockIcon = "format-status"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attrs = {};
  var booleanFields = ['btn', 'container', 'custom_component', 'eyebrow', 'headline', 'heading_one', 'heading_two', 'heading_three', 'heading_four', 'heading_five', 'heading_six', 'paragraph', 'caption'];
  var attributes = Object(_blocks_helper_functions_boolean_attrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(attrs, booleanFields);
  registerBlockType("".concat(_blocks_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var btn = attributes.btn,
          container = attributes.container,
          custom_component = attributes.custom_component,
          eyebrow = attributes.eyebrow,
          headline = attributes.headline,
          heading_one = attributes.heading_one,
          heading_two = attributes.heading_two,
          heading_three = attributes.heading_three,
          heading_four = attributes.heading_four,
          heading_five = attributes.heading_five,
          heading_six = attributes.heading_six,
          paragraph = attributes.paragraph,
          caption = attributes.caption;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "development-block"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, /*#__PURE__*/React.createElement("strong", null, "Development Block - "), "You can add components to this block and toggle which controls are enabled in the block settings."), /*#__PURE__*/React.createElement(_blocks_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Design Tools",
        controls: [{
          type: 'checkbox',
          label: 'Container',
          value: container,
          reference: 'container'
        }, {
          type: 'checkbox',
          label: 'Component Spacing',
          value: custom_component,
          reference: 'custom_component'
        }, {
          type: 'checkbox',
          label: 'Eyebrow',
          value: eyebrow,
          reference: 'eyebrow'
        }, {
          type: 'checkbox',
          label: 'Headline',
          value: headline,
          reference: 'headline'
        }, {
          type: 'checkbox',
          label: 'Heading One',
          value: heading_one,
          reference: 'heading_one'
        }, {
          type: 'checkbox',
          label: 'Heading Two',
          value: heading_two,
          reference: 'heading_two'
        }, {
          type: 'checkbox',
          label: 'Heading Three',
          value: heading_three,
          reference: 'heading_three'
        }, {
          type: 'checkbox',
          label: 'Heading Four',
          value: heading_four,
          reference: 'heading_four'
        }, {
          type: 'checkbox',
          label: 'Heading Five',
          value: heading_five,
          reference: 'heading_five'
        }, {
          type: 'checkbox',
          label: 'Heading Six',
          value: heading_six,
          reference: 'heading_six'
        }, {
          type: 'checkbox',
          label: 'Paragraph',
          value: paragraph,
          reference: 'paragraph'
        }, {
          type: 'checkbox',
          label: 'Caption',
          value: caption,
          reference: 'caption'
        }, {
          type: 'checkbox',
          label: 'Button',
          value: btn,
          reference: 'btn'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_blocks_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development-component")]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/development/blocks/richtext-blocks.jsx":
/*!*******************************************************!*\
  !*** ./src/js/development/blocks/richtext-blocks.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return richTextBlocks; });
/* harmony import */ var _blocks_reusable_custom_richtext_block_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/reusable/custom-richtext-block.jsx */ "./src/js/blocks/reusable/custom-richtext-block.jsx");
/* harmony import */ var _blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");


function richTextBlocks() {
  // Reusable blocks
  var blocks = [{
    slug: 'paragraph',
    title: 'Paragraph',
    description: 'Write paragraphs',
    category: 'common',
    settings: ['core/bold', 'core/italic', 'core/link'],
    icon: 'editor-paragraph',
    placeholder: 'Start writing your paragraph',
    tagName: 'p',
    classes: ['paragraph'],
    transforms: ['paragraph-no-alignment'],
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/body-copy")]
  }, {
    slug: 'paragraph-no-alignment',
    title: 'Paragraph',
    description: 'Write paragraphs',
    category: 'common',
    settings: ['core/bold', 'core/italic', 'core/link'],
    icon: 'editor-paragraph',
    placeholder: 'Start writing your paragraph',
    tagName: 'p',
    classes: ['paragraph'],
    alignment: false,
    transforms: ['paragraph'],
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/accordion-row"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/feature-strip"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/image-text"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/page-strip-graphic"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/page-strip"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/content-card"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/image-list"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/testimonial-slide"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/milestone")]
  }, {
    slug: 'headline',
    title: 'Headline',
    description: 'A page headline',
    category: 'common',
    icon: 'heading',
    placeholder: 'Start writing your header',
    classes: ['heading-one'],
    tagName: 'h1',
    blockSettings: true,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development")],
    transforms: ['paragraph', 'heading-one', 'heading-two', 'heading-three', 'heading-four', 'heading-five', 'heading-six']
  }, {
    slug: 'heading-one',
    title: 'Heading One',
    description: 'A top level header',
    category: 'common',
    icon: 'heading',
    placeholder: 'Start writing your header',
    classes: ['heading-one'],
    tagName: 'h1',
    blockSettings: true,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/body-copy")],
    transforms: ['paragraph', 'heading-two', 'heading-three', 'heading-four', 'heading-five', 'heading-six']
  }, {
    slug: 'heading-two',
    title: 'Heading Two',
    description: 'A second level header',
    category: 'common',
    icon: 'heading',
    placeholder: 'Start writing your header',
    classes: ['heading-two'],
    tagName: 'h2',
    blockSettings: true,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/body-copy")],
    transforms: ['paragraph', 'heading-one', 'heading-three', 'heading-four', 'heading-five']
  }, {
    slug: 'heading-three',
    title: 'Heading Three',
    description: 'A third level header',
    category: 'common',
    icon: 'heading',
    placeholder: 'Start writing your header',
    classes: ['heading-three'],
    tagName: 'h3',
    blockSettings: true,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/body-copy")],
    transforms: ['paragraph', 'heading-one', 'heading-two', 'heading-four', 'heading-five']
  }, {
    slug: 'heading-four',
    title: 'Heading Four',
    description: 'A fourth level header',
    category: 'common',
    icon: 'heading',
    placeholder: 'Start writing your header',
    classes: ['heading-four'],
    tagName: 'h4',
    blockSettings: true,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/body-copy")],
    transforms: ['paragraph', 'heading-one', 'heading-two', 'heading-three', 'heading-five']
  }, {
    slug: 'heading-five',
    title: 'Heading Five',
    description: 'A fifth level header',
    category: 'common',
    icon: 'heading',
    placeholder: 'Start writing your header',
    classes: ['heading-five'],
    tagName: 'h5',
    blockSettings: true,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/body-copy")],
    transforms: ['paragraph', 'heading-one', 'heading-two', 'heading-three', 'heading-four']
  }, {
    slug: 'heading-six',
    title: 'Heading Six',
    description: 'A sixth level header',
    category: 'common',
    icon: 'heading',
    placeholder: 'Start writing your header',
    classes: ['heading-six'],
    tagName: 'h6',
    blockSettings: true,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development"), "".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/body-copy")],
    transforms: ['paragraph', 'heading-one', 'heading-two', 'heading-three', 'heading-four', 'heading-five']
  }, {
    slug: 'caption',
    title: 'Caption',
    description: 'An image caption',
    category: 'common',
    icon: 'editor-paragraph',
    placeholder: 'Start writing your caption',
    classes: ['caption'],
    settings: ['core/bold', 'core/italic', 'core/link'],
    tagName: 'p',
    blockSettings: true,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development")],
    transforms: ['paragraph', 'heading-one', 'heading-two', 'heading-three', 'heading-four', 'heading-five']
  }, {
    slug: 'btn',
    title: 'Button',
    description: 'A button',
    category: 'common',
    icon: 'button',
    placeholder: 'Write your button text',
    classes: ['btn'],
    tagName: 'button',
    blockSettings: true,
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development")],
    transforms: ['paragraph', 'heading-one', 'heading-two', 'heading-three', 'heading-four']
  }, {
    slug: 'eyebrow',
    title: 'Eyebrow',
    description: 'An eyebrow',
    category: 'common',
    icon: 'visibility',
    placeholder: 'Write your eyebrow text',
    classes: ['eyebrow'],
    tagName: 'div',
    settings: [],
    parent: ["".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_1__["namespace"], "/development")],
    transforms: ['paragraph', 'heading-one', 'heading-two', 'heading-three', 'heading-four']
  }];
  blocks.forEach(function (block) {
    Object(_blocks_reusable_custom_richtext_block_jsx__WEBPACK_IMPORTED_MODULE_0__["default"])(block);
  });
}

/***/ }),

/***/ "./src/js/gutenberg.js":
/*!*****************************!*\
  !*** ./src/js/gutenberg.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_core_extends_video_embed_poster_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/core-extends/video-embed-poster.jsx */ "./src/js/blocks/core-extends/video-embed-poster.jsx");
/* harmony import */ var _blocks_meta_page_meta_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/meta/page-meta.jsx */ "./src/js/blocks/meta/page-meta.jsx");
/* harmony import */ var _blocks_meta_location_meta_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/meta/location-meta.jsx */ "./src/js/blocks/meta/location-meta.jsx");
/* harmony import */ var _blocks_meta_news_releases_meta_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/meta/news-releases-meta.jsx */ "./src/js/blocks/meta/news-releases-meta.jsx");
/* harmony import */ var _development_blocks_development_blocks_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./development/blocks/development-blocks.jsx */ "./src/js/development/blocks/development-blocks.jsx");
/* harmony import */ var _js_blocks_text_column_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/blocks/text-column.jsx */ "./src/js/blocks/text-column.jsx");
/* harmony import */ var _blocks_image_text_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/image-text.jsx */ "./src/js/blocks/image-text.jsx");
/* harmony import */ var _blocks_page_strip_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/page-strip.jsx */ "./src/js/blocks/page-strip.jsx");
/* harmony import */ var _blocks_feature_strip_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/feature-strip.jsx */ "./src/js/blocks/feature-strip.jsx");
/* harmony import */ var _blocks_image_block_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/image-block.jsx */ "./src/js/blocks/image-block.jsx");
/* harmony import */ var _blocks_page_strip_graphic_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/page-strip-graphic.jsx */ "./src/js/blocks/page-strip-graphic.jsx");
/* harmony import */ var _blocks_form_container_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/form-container.jsx */ "./src/js/blocks/form-container.jsx");
/* harmony import */ var _blocks_forms_input_row_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/forms/input-row.jsx */ "./src/js/blocks/forms/input-row.jsx");
/* harmony import */ var _blocks_forms_input_block_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/forms/input-block.jsx */ "./src/js/blocks/forms/input-block.jsx");
/* harmony import */ var _blocks_forms_select_block_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/forms/select-block.jsx */ "./src/js/blocks/forms/select-block.jsx");
/* harmony import */ var _blocks_forms_date_input_block_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/forms/date-input-block.jsx */ "./src/js/blocks/forms/date-input-block.jsx");
/* harmony import */ var _blocks_forms_number_input_block_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/forms/number-input-block.jsx */ "./src/js/blocks/forms/number-input-block.jsx");
/* harmony import */ var _blocks_forms_textarea_block_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/forms/textarea-block.jsx */ "./src/js/blocks/forms/textarea-block.jsx");
/* harmony import */ var _blocks_forms_destination_select_block_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/forms/destination-select-block.jsx */ "./src/js/blocks/forms/destination-select-block.jsx");
/* harmony import */ var _blocks_cognito_embed_block_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/cognito-embed-block.jsx */ "./src/js/blocks/cognito-embed-block.jsx");
/* harmony import */ var _blocks_formstack_embed_block_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/formstack-embed-block.jsx */ "./src/js/blocks/formstack-embed-block.jsx");
/* harmony import */ var _blocks_accordion_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blocks/accordion.jsx */ "./src/js/blocks/accordion.jsx");
/* harmony import */ var _blocks_accordion_row_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blocks/accordion-row.jsx */ "./src/js/blocks/accordion-row.jsx");
/* harmony import */ var _blocks_body_copy_jsx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blocks/body-copy.jsx */ "./src/js/blocks/body-copy.jsx");
/* harmony import */ var _blocks_body_copy_image_jsx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./blocks/body-copy-image.jsx */ "./src/js/blocks/body-copy-image.jsx");
/* harmony import */ var _blocks_callout_container_jsx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./blocks/callout-container.jsx */ "./src/js/blocks/callout-container.jsx");
/* harmony import */ var _blocks_callout_column_jsx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blocks/callout-column.jsx */ "./src/js/blocks/callout-column.jsx");
/* harmony import */ var _blocks_content_cards_content_card_container_jsx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./blocks/content-cards/content-card-container.jsx */ "./src/js/blocks/content-cards/content-card-container.jsx");
/* harmony import */ var _blocks_content_cards_content_card_jsx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./blocks/content-cards/content-card.jsx */ "./src/js/blocks/content-cards/content-card.jsx");
/* harmony import */ var _blocks_document_row_jsx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blocks/document-row.jsx */ "./src/js/blocks/document-row.jsx");
/* harmony import */ var _blocks_image_list_image_list_container_jsx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./blocks/image-list/image-list-container.jsx */ "./src/js/blocks/image-list/image-list-container.jsx");
/* harmony import */ var _blocks_image_list_image_list_block_jsx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./blocks/image-list/image-list-block.jsx */ "./src/js/blocks/image-list/image-list-block.jsx");
/* harmony import */ var _blocks_logos_logo_container_jsx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./blocks/logos/logo-container.jsx */ "./src/js/blocks/logos/logo-container.jsx");
/* harmony import */ var _blocks_logos_logo_jsx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./blocks/logos/logo.jsx */ "./src/js/blocks/logos/logo.jsx");
/* harmony import */ var _blocks_slider_slider_container_jsx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./blocks/slider/slider-container.jsx */ "./src/js/blocks/slider/slider-container.jsx");
/* harmony import */ var _blocks_slider_image_slide_jsx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./blocks/slider/image-slide.jsx */ "./src/js/blocks/slider/image-slide.jsx");
/* harmony import */ var _blocks_slider_testimonial_slider_container_jsx__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./blocks/slider/testimonial-slider-container.jsx */ "./src/js/blocks/slider/testimonial-slider-container.jsx");
/* harmony import */ var _blocks_slider_testimonial_slide_jsx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./blocks/slider/testimonial-slide.jsx */ "./src/js/blocks/slider/testimonial-slide.jsx");
/* harmony import */ var _blocks_slider_body_copy_slider_container_jsx__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./blocks/slider/body-copy-slider-container.jsx */ "./src/js/blocks/slider/body-copy-slider-container.jsx");
/* harmony import */ var _blocks_slider_body_copy_image_slide_jsx__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./blocks/slider/body-copy-image-slide.jsx */ "./src/js/blocks/slider/body-copy-image-slide.jsx");
/* harmony import */ var _blocks_stats_container_jsx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./blocks/stats-container.jsx */ "./src/js/blocks/stats-container.jsx");
/* harmony import */ var _blocks_stats_column_jsx__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./blocks/stats-column.jsx */ "./src/js/blocks/stats-column.jsx");
/* harmony import */ var _blocks_timeline_timeline_container_block_jsx__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./blocks/timeline/timeline-container-block.jsx */ "./src/js/blocks/timeline/timeline-container-block.jsx");
/* harmony import */ var _blocks_timeline_milestone_block_jsx__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./blocks/timeline/milestone-block.jsx */ "./src/js/blocks/timeline/milestone-block.jsx");
/* harmony import */ var _blocks_greenhouse_jobs_block_jsx__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./blocks/greenhouse/jobs-block.jsx */ "./src/js/blocks/greenhouse/jobs-block.jsx");
// import customButtonIcons from './blocks/core-extends/button-icons';
 // Meta



 // Development Blocks



 // Page Strips




 // Form Blocks








 // Form Embed Blocks


 // Accordion Blocks


 // Body Copy


 // Callout Columns


 // Content Columns


 // Document Blocks

 // Image List Blocks


 // Logo Blocks


 // Slider Blocks






 // Stat Blocks


 // Timeline Blocks 


 // Greenhouse Blocks

 // Core Extends Blocks
// customButtonIcons();

Object(_blocks_core_extends_video_embed_poster_jsx__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Init meta blocks

Object(_blocks_meta_page_meta_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_blocks_meta_location_meta_jsx__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_blocks_meta_news_releases_meta_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Init development blocks!

Object(_development_blocks_development_blocks_jsx__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Init blocks here

Object(_js_blocks_text_column_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_blocks_image_text_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Page Strips

Object(_blocks_page_strip_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_blocks_feature_strip_jsx__WEBPACK_IMPORTED_MODULE_8__["default"])();
Object(_blocks_image_block_jsx__WEBPACK_IMPORTED_MODULE_9__["default"])();
Object(_blocks_page_strip_graphic_jsx__WEBPACK_IMPORTED_MODULE_10__["default"])(); // Accordion Blocks

Object(_blocks_accordion_jsx__WEBPACK_IMPORTED_MODULE_21__["default"])();
Object(_blocks_accordion_row_jsx__WEBPACK_IMPORTED_MODULE_22__["default"])(); // Body Copy

Object(_blocks_body_copy_jsx__WEBPACK_IMPORTED_MODULE_23__["default"])();
Object(_blocks_body_copy_image_jsx__WEBPACK_IMPORTED_MODULE_24__["default"])(); // Callout Columns

Object(_blocks_callout_container_jsx__WEBPACK_IMPORTED_MODULE_25__["default"])();
Object(_blocks_callout_column_jsx__WEBPACK_IMPORTED_MODULE_26__["default"])(); // Content Cards

Object(_blocks_content_cards_content_card_container_jsx__WEBPACK_IMPORTED_MODULE_27__["default"])();
Object(_blocks_content_cards_content_card_jsx__WEBPACK_IMPORTED_MODULE_28__["default"])(); //Document Blocks

Object(_blocks_document_row_jsx__WEBPACK_IMPORTED_MODULE_29__["default"])(); // Form blocks

Object(_blocks_form_container_jsx__WEBPACK_IMPORTED_MODULE_11__["default"])();
Object(_blocks_forms_input_row_jsx__WEBPACK_IMPORTED_MODULE_12__["default"])();
Object(_blocks_forms_input_block_jsx__WEBPACK_IMPORTED_MODULE_13__["default"])();
Object(_blocks_forms_select_block_jsx__WEBPACK_IMPORTED_MODULE_14__["default"])();
Object(_blocks_forms_date_input_block_jsx__WEBPACK_IMPORTED_MODULE_15__["default"])();
Object(_blocks_forms_number_input_block_jsx__WEBPACK_IMPORTED_MODULE_16__["default"])();
Object(_blocks_forms_textarea_block_jsx__WEBPACK_IMPORTED_MODULE_17__["default"])();
Object(_blocks_forms_destination_select_block_jsx__WEBPACK_IMPORTED_MODULE_18__["default"])(); //Form Embed Blocks

Object(_blocks_cognito_embed_block_jsx__WEBPACK_IMPORTED_MODULE_19__["default"])();
Object(_blocks_formstack_embed_block_jsx__WEBPACK_IMPORTED_MODULE_20__["default"])(); // Image List Blocks

Object(_blocks_image_list_image_list_container_jsx__WEBPACK_IMPORTED_MODULE_30__["default"])();
Object(_blocks_image_list_image_list_block_jsx__WEBPACK_IMPORTED_MODULE_31__["default"])(); // Logo Blocks

Object(_blocks_logos_logo_container_jsx__WEBPACK_IMPORTED_MODULE_32__["default"])();
Object(_blocks_logos_logo_jsx__WEBPACK_IMPORTED_MODULE_33__["default"])(); // Slide Blocks

Object(_blocks_slider_slider_container_jsx__WEBPACK_IMPORTED_MODULE_34__["default"])();
Object(_blocks_slider_image_slide_jsx__WEBPACK_IMPORTED_MODULE_35__["default"])();
Object(_blocks_slider_testimonial_slider_container_jsx__WEBPACK_IMPORTED_MODULE_36__["default"])();
Object(_blocks_slider_testimonial_slide_jsx__WEBPACK_IMPORTED_MODULE_37__["default"])();
Object(_blocks_slider_body_copy_slider_container_jsx__WEBPACK_IMPORTED_MODULE_38__["default"])();
Object(_blocks_slider_body_copy_image_slide_jsx__WEBPACK_IMPORTED_MODULE_39__["default"])(); // Stat Blocks

Object(_blocks_stats_container_jsx__WEBPACK_IMPORTED_MODULE_40__["default"])();
Object(_blocks_stats_column_jsx__WEBPACK_IMPORTED_MODULE_41__["default"])(); // Timeline Blocks

Object(_blocks_timeline_timeline_container_block_jsx__WEBPACK_IMPORTED_MODULE_42__["default"])();
Object(_blocks_timeline_milestone_block_jsx__WEBPACK_IMPORTED_MODULE_43__["default"])(); // Greenhouse Blocks

Object(_blocks_greenhouse_jobs_block_jsx__WEBPACK_IMPORTED_MODULE_44__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=gutenberg.js.map