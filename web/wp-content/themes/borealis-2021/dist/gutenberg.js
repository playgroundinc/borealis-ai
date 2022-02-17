/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/blocks/helper-functions/constants.js":
/*!*****************************************************!*\
  !*** ./src/js/blocks/helper-functions/constants.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "namespace": function() { return /* binding */ namespace; }
/* harmony export */ });
const namespace = 'pg';

/***/ }),

/***/ "./src/js/blocks/helper-functions/custom-error.js":
/*!********************************************************!*\
  !*** ./src/js/blocks/helper-functions/custom-error.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomErrors; }
/* harmony export */ });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DefaultAttrs; }
/* harmony export */ });
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

/***/ "./src/js/blocks/accordion/accordion-row.jsx":
/*!***************************************************!*\
  !*** ./src/js/blocks/accordion/accordion-row.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ accordionBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function accordionBlock() {
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
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__["default"])(stringAttrs);
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/accordion")],
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
        allowedBlocks: ['core/paragraph', "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/document-row"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-four")]
      }))];
    },
    save: function save() {
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/accordion/accordion.jsx":
/*!***********************************************!*\
  !*** ./src/js/blocks/accordion/accordion.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ accordionBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function accordionBlock() {
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
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__["default"])(stringAttrs);
  attributes['bg_color']['default'] = 'white';
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
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
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/accordion-row")]
      }))];
    },
    save: function save() {
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/blockquote/blockquote.jsx":
/*!*************************************************!*\
  !*** ./src/js/blocks/blockquote/blockquote.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ blockquoteBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function blockquoteBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "blockquote";
  var blockTitle = "Quote";
  var blockDescription = "Creates a Blockquote.";
  var blockCategory = "common";
  var blockIcon = "format-quote"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: {
      style: {
        type: 'String',
        default: 'default'
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
      },
      name: {
        type: 'String',
        default: ''
      },
      role: {
        type: 'String',
        default: ''
      },
      quote: {
        type: 'String',
        default: ''
      },
      speaker: {
        type: 'String',
        default: ''
      }
    },
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          speaker = attributes.speaker,
          role = attributes.role,
          quote = attributes.quote,
          style = attributes.style;
      var styles = [{
        label: 'Default',
        value: 'default'
      }, {
        label: 'Circle',
        value: 'circle'
      }, {
        label: 'Circle Centered',
        value: 'circle-centered'
      }, {
        label: 'Dark',
        value: 'dark'
      }];

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, blockTitle), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Block Settings",
        controls: [{
          type: 'select',
          label: 'Quote Style',
          options: styles,
          reference: 'style',
          value: style
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
          reference: 'quote',
          value: quote,
          tagName: 'p',
          settings: [],
          classes: [''],
          placeholder: 'Provide quote (required)'
        }, {
          reference: 'speaker',
          value: speaker,
          tagName: 'p',
          settings: [],
          classes: [],
          placeholder: 'Speaker'
        }, {
          reference: 'role',
          value: role,
          tagName: 'p',
          settings: [],
          classes: [],
          placeholder: 'Role'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save() {
      return null;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/body-copy.jsx":
/*!*************************************!*\
  !*** ./src/js/blocks/body-copy.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ bodyCopyBlock; }
/* harmony export */ });
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

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
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
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-two"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-three"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-four"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-five"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/paragraph"), 'core/list', "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/body-copy-carousel"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/body-copy-image")]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/callouts/callout-column.jsx":
/*!***************************************************!*\
  !*** ./src/js/blocks/callouts/callout-column.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ imageTextBlock; }
/* harmony export */ });
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
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    category: category,
    icon: icon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/callout-container")],
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

/***/ "./src/js/blocks/callouts/callout-container.jsx":
/*!******************************************************!*\
  !*** ./src/js/blocks/callouts/callout-container.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ trmcAccordionBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
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
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
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
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/callout-column")]
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

/***/ "./src/js/blocks/content-cards/content-card-container.jsx":
/*!****************************************************************!*\
  !*** ./src/js/blocks/content-cards/content-card-container.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ trmcContentContainerBlock; }
/* harmony export */ });
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
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
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
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/content-card")]
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ imageTextBlock; }
/* harmony export */ });
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
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    category: category,
    icon: icon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/content-card-container")],
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
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/paragraph-no-alignment")]
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

/***/ "./src/js/blocks/copy/copy-blocks.jsx":
/*!********************************************!*\
  !*** ./src/js/blocks/copy/copy-blocks.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ registerBodyCopyBlocks; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_block_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-block.jsx */ "./src/js/blocks/reusable/custom-richtext-block.jsx");


var blocks = [{
  slug: 'paragraph',
  title: "Paragraph",
  description: "Add a paragraph",
  classes: "paragraph-blog mt-10 md:mt-15 wp-block-pg-paragraph first:mt-0",
  category: "common",
  icon: "editor-paragraph",
  tagName: "p",
  transforms: ["heading-two", "heading-three", "heading-four", "legal"]
}, {
  slug: 'heading-two',
  title: "Heading Two",
  description: "Add a second level header",
  classes: "wp-block-pg-heading-two h3 md:h2 mt-11 md:mt-13 first:mt-0",
  category: "common",
  icon: "heading",
  tagName: "h2",
  transforms: ["paragraph", "heading-three", "heading-four", "legal"]
}, {
  slug: 'heading-three',
  title: "Heading Three",
  classes: "h3 mt-11 md:mt-13 first:mt-0 wp-block-pg-heading-three first:mt-0",
  description: "Add a third level header",
  category: "common",
  icon: "heading",
  tagName: "h3",
  transforms: ["paragraph", "heading-two", "heading-four", "legal"]
}, {
  slug: 'heading-four',
  title: "Heading Four",
  classes: "h4 mt-9 md:mt-10 wp-block-pg-heading-four first:mt-0",
  description: "Add a fourth level header",
  category: "common",
  icon: "heading",
  tagName: "h4",
  transforms: ["paragraph", "heading-two", "heading-three", "legal"]
}, {
  slug: 'legal',
  title: "Legal Text",
  classes: "legal mt-8 wp-block-pg-paragraph first:mt-0",
  description: "Add legal text",
  category: "common",
  icon: "editor-paragraph",
  tagName: "p",
  transforms: ["paragraph", "heading-two", "heading-three", "heading-four"]
}];
function registerBodyCopyBlocks() {
  blocks.forEach(function (block) {
    (0,_reusable_custom_richtext_block_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(block);
  });
}

/***/ }),

/***/ "./src/js/blocks/core-extends/video-embed-poster.jsx":
/*!***********************************************************!*\
  !*** ./src/js/blocks/core-extends/video-embed-poster.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ extendCoreVideo; }
/* harmony export */ });
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

/***/ "./src/js/blocks/greenhouse/jobs-block.jsx":
/*!*************************************************!*\
  !*** ./src/js/blocks/greenhouse/jobs-block.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ jobBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function jobBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "job-block";
  var blockTitle = "Create job block";
  var blockDescription = "Component to create job block";
  var blockCategory = "common";
  var blockIcon = "users"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

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
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var title = attributes.title,
          emptyState = attributes.emptyState;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-job__block"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Jobs Block"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "p",
          placeholder: "Please provide a title"
        }]
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: emptyState,
          reference: "emptyState",
          tagName: "p"
        }]
      })))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          emptyState = attributes.emptyState;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/icon-list/icon-list-container-block.jsx":
/*!***************************************************************!*\
  !*** ./src/js/blocks/icon-list/icon-list-container-block.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ iconListContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function iconListContainerBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var ToggleControl = wp.components.ToggleControl;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "icon-list-container-block"; // slug for the block

  var blockTitle = "Icon list container block";
  var blockDescription = "Component to create icon list container block";
  var blockCategory = "common";
  var blockIcon = "block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: "String",
      default: ""
    },
    description: {
      type: "String",
      default: ""
    },
    icon: {
      type: "Boolean",
      default: false
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var title = attributes.title,
          description = attributes.description,
          icon = attributes.icon;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Icon List Container Block"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "p",
          placeholder: "Please provide a title (optional)"
        }]
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: description,
          reference: "description",
          tagName: "p",
          placeholder: "Please provide a description (optional)"
        }]
      }), /*#__PURE__*/React.createElement(ToggleControl, {
        label: 'Style: check for with icon or leave unchecked for without icon',
        checked: icon,
        onChange: function onChange(change) {
          updateAttributeValue("icon", change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/custom-icon-list-item-block")]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          description = attributes.description,
          icon = attributes.icon;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/icon-list/icon-list-item-block.jsx":
/*!**********************************************************!*\
  !*** ./src/js/blocks/icon-list/icon-list-item-block.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ iconListItemBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function iconListItemBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var _wp = wp,
      i18n = _wp.i18n;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var blockSlug = "icon-list-item-block"; // slug for the block

  var blockTitle = "Icon list item block";
  var blockDescription = "Component to create icon list item block";
  var blockCategory = "common";
  var blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    image_id: {
      type: "Number",
      default: 0
    },
    image_alt: {
      type: "String",
      default: ""
    },
    image_url: {
      type: "String",
      default: ""
    },
    subtitle: {
      type: "String",
      default: ""
    },
    copy: {
      type: "String",
      default: ""
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/icon-list-container-block")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var subtitle = attributes.subtitle,
          copy = attributes.copy,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Icon List Item"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: "image_url",
          altValue: image_alt,
          altReference: "image_alt",
          idValue: image_id,
          idReference: "image_id",
          buttonText: "Add Icon (optional)",
          imageClasses: ["image-text__image"]
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: subtitle,
          reference: "subtitle",
          tagName: "p",
          classes: ["p"],
          placeholder: "Add Subtitle (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: copy,
          reference: "copy",
          tagName: "p",
          classes: ["p"],
          placeholder: "Add Copy (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      })))];
    },
    save: function save() {
      var subtitle = attributes.subtitle,
          copy = attributes.copy,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/image-block.jsx":
/*!***************************************!*\
  !*** ./src/js/blocks/image-block.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ imageBlock; }
/* harmony export */ });
/* harmony import */ var _blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _blocks_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _blocks_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Helpers



function imageBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "custom-image";
  var blockTitle = "Media - Image";
  var blockDescription = "A single image upload.";
  var blockCategory = "media";
  var blockIcon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_blocks_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ listImageBlock; }
/* harmony export */ });
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
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    category: category,
    icon: icon,
    parent: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/image-list-container")],
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
        allowedBlocks: ['core/list', "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/paragraph-no-alignment")]
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ listImageContainerBlock; }
/* harmony export */ });
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
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
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
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/image-list")],
        template: [["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/image-list")]]
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ imageTextBlock; }
/* harmony export */ });
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
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  attributes['reverse'] = {
    type: 'boolean',
    default: false
  };
  attributes['image_id'] = {
    type: 'integer',
    default: 0
  };
  attributes['bg_color']['default'] = 'white';
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
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
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/paragraph-no-alignment"), 'core/list', 'core/buttons']
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ trmcLogoContainerBlock; }
/* harmony export */ });
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
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
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
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/logo")],
        template: [["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/logo")]]
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ logoBlock; }
/* harmony export */ });
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

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
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
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/logos-container")],
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

/***/ "./src/js/blocks/meta/author-meta.jsx":
/*!********************************************!*\
  !*** ./src/js/blocks/meta/author-meta.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ authorMetaBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function authorMetaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var TextControl = wp.components.TextControl;
  var meta_fields = ['external_link'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(meta_fields, 'meta');
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/author-meta-block"), {
    title: 'Author Meta',
    icon: 'align-full-width',
    category: 'common',
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var external_link = attributes.external_link;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [null, /*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Author Meta"), /*#__PURE__*/React.createElement("div", {
        className: "page-settings__controls"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mt-xs-3"
      }, /*#__PURE__*/React.createElement(TextControl, {
        value: external_link,
        onChange: function onChange(value) {
          updateAttributeValue('external_link', value);
        },
        label: "External Link:"
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

/***/ "./src/js/blocks/meta/news-meta.jsx":
/*!******************************************!*\
  !*** ./src/js/blocks/meta/news-meta.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ researchBlogMetaBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_select_authors_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/select-authors.jsx */ "./src/js/blocks/reusable/select-authors.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function researchBlogMetaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var TextControl = wp.components.TextControl;
  var meta_fields = ['publication_date', 'time_to_read', 'authors'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__["default"])(meta_fields, 'meta');
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/news-meta-block"), {
    title: 'News Meta',
    icon: 'align-full-width',
    category: 'common',
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var authors = attributes.authors,
          publication_date = attributes.publication_date,
          time_to_read = attributes.time_to_read;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [null, /*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "News Meta"), /*#__PURE__*/React.createElement("div", {
        className: "page-settings__controls"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mt-xs-3"
      }, /*#__PURE__*/React.createElement(TextControl, {
        value: publication_date,
        onChange: function onChange(value) {
          updateAttributeValue('publication_date', value);
        },
        label: "Publication Date (MM/DD/YYYY):"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: time_to_read,
        type: "number",
        onChange: function onChange(value) {
          updateAttributeValue('time_to_read', value);
        },
        label: "Time to Read:"
      }), /*#__PURE__*/React.createElement(_reusable_select_authors_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        authors: authors,
        updateAttributeValue: updateAttributeValue
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pageMetaBlock; }
/* harmony export */ });
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
  var meta_fields = ['headline'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(meta_fields, 'meta');
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/page-meta-block"), {
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
      var headline = attributes.headline;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [null, /*#__PURE__*/React.createElement("div", {
        className: className
      }, /*#__PURE__*/React.createElement("div", {
        className: "page-settings__controls"
      }, /*#__PURE__*/React.createElement("h4", null, "Header Settings"), /*#__PURE__*/React.createElement(TextareaControl, {
        value: headline,
        onChange: function onChange(value) {
          updateAttributeValue('headline', value);
        },
        label: "Headline:"
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

/***/ "./src/js/blocks/meta/publications-meta.jsx":
/*!**************************************************!*\
  !*** ./src/js/blocks/meta/publications-meta.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ publicationMetaBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_select_authors_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/select-authors.jsx */ "./src/js/blocks/reusable/select-authors.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function publicationMetaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var TextControl = wp.components.TextControl;
  var meta_fields = ['authors', 'abstract', 'code', 'paper', 'blog', 'publication_date', 'time_to_read', 'citation', 'citation_link'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__["default"])(meta_fields, 'meta');
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/publications-meta-block"), {
    title: 'Publications Meta',
    icon: 'align-full-width',
    category: 'common',
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var abstract = attributes.abstract,
          authors = attributes.authors,
          blog = attributes.blog,
          citation = attributes.citation,
          citation_link = attributes.citation_link,
          code = attributes.code,
          paper = attributes.paper,
          publication_date = attributes.publication_date,
          time_to_read = attributes.time_to_read;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [null, /*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Publications Meta"), /*#__PURE__*/React.createElement("div", {
        className: "page-settings__controls"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mt-xs-3"
      }, /*#__PURE__*/React.createElement(TextControl, {
        value: publication_date,
        onChange: function onChange(value) {
          updateAttributeValue('publication_date', value);
        },
        label: "Publication Date (YYYY/MM/DD):"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: abstract,
        onChange: function onChange(value) {
          updateAttributeValue('abstract', value);
        },
        label: "Abstract:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: code,
        onChange: function onChange(value) {
          updateAttributeValue('code', value);
        },
        label: "Code:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: paper,
        onChange: function onChange(value) {
          updateAttributeValue('paper', value);
        },
        label: "Paper:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: blog,
        onChange: function onChange(value) {
          updateAttributeValue('blog', value);
        },
        label: "Blog:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: time_to_read,
        onChange: function onChange(value) {
          updateAttributeValue('time_to_read', value);
        },
        label: "Time to Read:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: citation,
        onChange: function onChange(value) {
          updateAttributeValue('citation', value);
        },
        label: "Citation:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: citation_link,
        onChange: function onChange(value) {
          updateAttributeValue('citation_link', value);
        },
        label: "Citation Link:"
      }), /*#__PURE__*/React.createElement(_reusable_select_authors_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        authors: authors,
        updateAttributeValue: updateAttributeValue
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

/***/ "./src/js/blocks/meta/research-blogs-meta.jsx":
/*!****************************************************!*\
  !*** ./src/js/blocks/meta/research-blogs-meta.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ researchBlogMetaBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_select_authors_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/select-authors.jsx */ "./src/js/blocks/reusable/select-authors.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function researchBlogMetaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var TextControl = wp.components.TextControl;
  var meta_fields = ['publication_date', 'time_to_read', 'authors'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__["default"])(meta_fields, 'meta');
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/research-blogs-meta-block"), {
    title: 'Research Blogs Meta',
    icon: 'align-full-width',
    category: 'common',
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var authors = attributes.authors,
          publication_date = attributes.publication_date,
          time_to_read = attributes.time_to_read;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [null, /*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Research Blog Meta"), /*#__PURE__*/React.createElement("div", {
        className: "page-settings__controls"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mt-xs-3"
      }, /*#__PURE__*/React.createElement(TextControl, {
        value: publication_date,
        onChange: function onChange(value) {
          updateAttributeValue('publication_date', value);
        },
        label: "Publication Date (MM/DD/YYYY):"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: time_to_read,
        type: "number",
        onChange: function onChange(value) {
          updateAttributeValue('time_to_read', value);
        },
        label: "Time to Read:"
      }), /*#__PURE__*/React.createElement(_reusable_select_authors_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        authors: authors,
        updateAttributeValue: updateAttributeValue
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

/***/ "./src/js/blocks/meta/team-member-meta.jsx":
/*!*************************************************!*\
  !*** ./src/js/blocks/meta/team-member-meta.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ leadershipMetaBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function leadershipMetaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var TextControl = wp.components.TextControl;
  var meta_fields = ['position', 'education'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(meta_fields, 'meta');
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/team-member-meta-block"), {
    title: 'Team Member Meta',
    icon: 'align-full-width',
    category: 'common',
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var position = attributes.position,
          education = attributes.education;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [null, /*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Team Member Meta"), /*#__PURE__*/React.createElement("div", {
        className: "page-settings__controls"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mt-xs-3"
      }, /*#__PURE__*/React.createElement(TextControl, {
        value: position,
        onChange: function onChange(value) {
          updateAttributeValue('position', value);
        },
        label: "Position:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: education,
        onChange: function onChange(value) {
          updateAttributeValue('education', value);
        },
        label: "Education:"
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

/***/ "./src/js/blocks/page-strips/page-strip-graphic-container.jsx":
/*!********************************************************************!*\
  !*** ./src/js/blocks/page-strips/page-strip-graphic-container.jsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pageStripGraphicContainer; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");


function pageStripGraphicContainer() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var useSelect = wp.data.useSelect;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "page-strip-graphic-container"; // slug for the block

  var blockTitle = "Create page strip graphic container block";
  var blockDescription = "Component to create page strip graphic container block";
  var blockCategory = "common";
  var blockIcon = "admin-users"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: "String",
      default: ""
    },
    limit: {
      type: "Number",
      default: 0
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var innerBlockCount = useSelect(function (select) {
        return select("core/block-editor").getBlock(props.clientId).innerBlocks;
      });
      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Page Strip Graphic Container Block"), /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/page-strip-graphic")],
        renderAppender: function renderAppender() {
          if (innerBlockCount.length < 2) {
            return /*#__PURE__*/React.createElement(InnerBlocks.ButtonBlockAppender, null);
          } else {
            return false;
          }
        }
      }))];
    },
    save: function save() {
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/page-strips/page-strip-graphic.jsx":
/*!**********************************************************!*\
  !*** ./src/js/blocks/page-strips/page-strip-graphic.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ trmcPageStripGraphicBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
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
  var ToggleControl = wp.components.ToggleControl;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "page-strip-graphic";
  var title = "Page Strip - Image  BG";
  var description = "A page strip with a background image.";
  var category = "page-strips";
  var icon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: "String",
      default: ""
    },
    copy: {
      type: "String",
      default: ""
    },
    btn_url: {
      type: "String",
      default: ""
    },
    btn_text: {
      type: "String",
      default: ""
    },
    image_id: {
      type: "Number",
      default: 0
    },
    image_alt: {
      type: "String",
      default: ""
    },
    image_url: {
      type: "String",
      default: ""
    },
    image_id_mobile: {
      type: "Number",
      default: 0
    },
    image_alt_mobile: {
      type: "String",
      default: ""
    },
    image_url_mobile: {
      type: "String",
      default: ""
    },
    icon: {
      type: "String",
      default: ""
    }
  };
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    category: category,
    icon: icon,
    attributes: attributes,
    transforms: {
      to: [{
        type: "block",
        blocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/page-strip")],
        transform: function transform(attributes, innerBlocks) {
          return wp.blocks.createBlock("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/page-strip"), attributes, innerBlocks);
        }
      }]
    },
    parent: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/page-strip-graphic-container")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var title = attributes.title,
          copy = attributes.copy,
          btn_url = attributes.btn_url,
          btn_text = attributes.btn_text,
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_url_mobile = attributes.image_url_mobile,
          image_id_mobile = attributes.image_id_mobile,
          image_alt_mobile = attributes.image_alt_mobile,
          icon = attributes.icon;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("section", {
        class: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Graphic Page Strip"), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: "image_url",
          altValue: image_alt,
          altReference: "image_alt",
          idValue: image_id,
          idReference: "image_id",
          buttonText: "Add an image"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url_mobile,
          reference: "image_url_mobile",
          altValue: image_alt_mobile,
          altReference: "image_alt_mobile",
          idValue: image_id_mobile,
          idReference: "image_id_mobile",
          buttonText: "Add a mobile image"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          classes: ["heading_one"],
          placeholder: "Please provide a title (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: copy,
          reference: "copy",
          tagName: "p",
          classes: ["paragraph"],
          placeholder: "Please provide copy (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: btn_url,
          reference: "btn_url",
          tagName: "p",
          classes: ["paragraph"],
          placeholder: "Please provide button url (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: btn_text,
          reference: "btn_text",
          tagName: "p",
          classes: ["paragraph"],
          placeholder: "Please provide button text (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(ToggleControl, {
        label: "Style: check for white arrow or leave unchecked for black arrow",
        checked: icon,
        onChange: function onChange(change) {
          updateAttributeValue("icon", change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          copy = attributes.copy,
          btn_url = attributes.btn_url,
          btn_text = attributes.btn_text,
          image_url = attributes.image_url,
          icon = attributes.icon,
          image_url_mobile = attributes.image_url_mobile;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/page-strips/page-strip.jsx":
/*!**************************************************!*\
  !*** ./src/js/blocks/page-strips/page-strip.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pageStripBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
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
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  attributes['bg_color']['default'] = 'white';
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    category: category,
    icon: icon,
    attributes: attributes,
    transforms: {
      to: [{
        type: "block",
        blocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/page-strip-graphic")],
        transform: function transform(attributes, innerBlocks) {
          return wp.blocks.createBlock("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/page-strip-graphic"), attributes, innerBlocks);
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
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/paragraph-no-alignment"), 'core/buttons']
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

/***/ "./src/js/blocks/posts/featured-posts-container.jsx":
/*!**********************************************************!*\
  !*** ./src/js/blocks/posts/featured-posts-container.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ featuredPostsContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable


function featuredPostsContainerBlock() {
  /**
   * GUTENBERG BLOCK - Featured Posts Container
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "featured-posts-container";
  var title = "Featured Post(s)";
  var description = "A container for one or more featured post.";
  var category = "common";
  var icon = "welcome-write-blog"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    columns: {
      type: 'String',
      default: '12'
    }
  };
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    category: category,
    icon: icon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var columns = attributes.columns;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Block Settings",
        controls: [{
          type: 'radio',
          label: 'Number of Columns',
          reference: 'columns',
          value: columns,
          options: [{
            label: 'One',
            value: '12'
          }, {
            label: 'Two',
            value: '6'
          }]
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Featured Post(s)"), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-research-blogs"), "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-news")]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var columns = attributes.columns;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/publications/bibtex-block.jsx":
/*!*****************************************************!*\
  !*** ./src/js/blocks/publications/bibtex-block.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ bibtexBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function bibtexBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "bibtex"; // slug for the block

  var blockTitle = "Bibtex";
  var blockDescription = "Component to add bibtex to a publication";
  var blockCategory = "common";
  var blockIcon = "archive"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    entry: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var entry = attributes.entry;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Bibtex"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: entry,
          reference: "entry",
          tagName: "p",
          placeholder: "Please provide the bibtext string",
          settings: []
        }]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var entry = attributes.entry;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/publications/publications-container.jsx":
/*!***************************************************************!*\
  !*** ./src/js/blocks/publications/publications-container.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ publicationsContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function publicationsContainerBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "publications-container"; // slug for the block

  var blockTitle = "Publications container";
  var blockDescription = "Component to create publications container block";
  var blockCategory = "common";
  var blockIcon = "archive"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    },
    link: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var title = attributes.title,
          link = attributes.link;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Publications List Container"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "p",
          placeholder: "Please provide a title (optional)",
          settings: []
        }]
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: link,
          reference: "link",
          tagName: "p",
          placeholder: "Please provide a link for the View All button",
          settings: []
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-publications"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-research-blogs"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-news")]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          link = attributes.link;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/publications/select-posts-blocks.jsx":
/*!************************************************************!*\
  !*** ./src/js/blocks/publications/select-posts-blocks.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ selectPostsBlocks; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_post_column_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-post-column.jsx */ "./src/js/blocks/reusable/custom-post-column.jsx");


function selectPostsBlocks() {
  var parent = ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/publications-container"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/carousel"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/featured-posts-container")];
  var icon = 'open-folder';
  var selectBlocks = [{
    icon: icon,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/publications-container")],
    slug: 'publications',
    single: 'Publication'
  }, {
    icon: icon,
    parent: parent,
    slug: 'research-blogs',
    single: 'Research'
  }, {
    icon: icon,
    parent: parent,
    slug: 'news',
    single: 'News'
  }];
  selectBlocks.forEach(function (block) {
    return (0,_reusable_custom_post_column_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(block);
  });
}

/***/ }),

/***/ "./src/js/blocks/reusable/block-custom-settings.jsx":
/*!**********************************************************!*\
  !*** ./src/js/blocks/reusable/block-custom-settings.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlockSettings; }
/* harmony export */ });
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
        (0,_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
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
        (0,_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
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
        (0,_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
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
        (0,_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
        return /*#__PURE__*/React.createElement(TextControl, {
          label: i18n.__("".concat(control.label)),
          value: control.value,
          onChange: function onChange(change) {
            return _onChange(control.reference, change);
          }
        });

      case 'toggle':
        requiredFields = ['label', 'value', 'reference'];
        (0,_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
        return /*#__PURE__*/React.createElement(ToggleControl, {
          label: i18n.__("".concat(control.label)),
          checked: control.value,
          onChange: function onChange(change) {
            return _onChange(control.reference, change);
          }
        });

      case 'image':
        requiredFields = ['label', 'image_id', 'id_reference', 'image_url', 'url_reference', 'image_alt', 'alt_reference'];
        (0,_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
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
        (0,_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
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
        (0,_helper_functions_custom_error_js__WEBPACK_IMPORTED_MODULE_0__["default"])(control, requiredFields);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomImageUpload; }
/* harmony export */ });
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
    (0,_helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__["default"])(values, requiredFields);
  };

  var checkRequiredImageAttributes = function checkRequiredImageAttributes(props) {
    var requiredFields = ['reference', 'value', 'altValue', 'altReference', 'idReference', 'idValue', 'buttonText'];
    var values = props;
    values.type = 'Custom Image';
    (0,_helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__["default"])(values, requiredFields);
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

/***/ "./src/js/blocks/reusable/custom-post-column.jsx":
/*!*******************************************************!*\
  !*** ./src/js/blocks/reusable/custom-post-column.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ selectPostBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
var _excluded = ["post", "setAttributes"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function selectPostBlock(postObject) {
  var icon = postObject.icon,
      slug = postObject.slug,
      single = postObject.single,
      parent = postObject.parent;
  var registerBlockType = wp.blocks.registerBlockType;
  var withSelect = wp.data.withSelect;
  var SelectControl = wp.components.SelectControl;

  var MySelectControl = function MySelectControl(_ref) {
    var post = _ref.post,
        setAttributes = _ref.setAttributes,
        props = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/React.createElement(SelectControl, {
      label: "Select A Post: ",
      value: post ? post : 0,
      options: props.options,
      onChange: function onChange(post) {
        setAttributes({
          post: post
        });
      }
    });
  };

  var stringAttrs = ['post'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttrs);
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-").concat(slug), {
    title: "Select ".concat(single),
    description: "Allows user to select a post",
    icon: icon,
    category: "common",
    attributes: attributes,
    parent: parent,
    edit: withSelect(function (select) {
      return {
        posts: select("core").getEntityRecords("postType", slug, {
          per_page: -1
        })
      };
    })(function (_ref2) {
      var posts = _ref2.posts,
          attributes = _ref2.attributes,
          setAttributes = _ref2.setAttributes;

      if (!posts) {
        return /*#__PURE__*/React.createElement("div", {
          className: "custom-component"
        }, /*#__PURE__*/React.createElement("p", {
          className: "block-title"
        }, "Select ".concat(single)), /*#__PURE__*/React.createElement("p", null, "Loading..."));
      }

      if (posts && posts.length === 0) {
        return /*#__PURE__*/React.createElement("div", {
          className: "custom-component"
        }, /*#__PURE__*/React.createElement("p", {
          className: "block-title"
        }, "Select ".concat(single)), /*#__PURE__*/React.createElement("p", null, "No Posts"));
      }

      var options = posts.map(function (post) {
        return {
          value: post.id,
          label: post.title.rendered
        };
      });
      options.unshift({
        value: 0,
        label: "Select"
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Select ".concat(single)), /*#__PURE__*/React.createElement(MySelectControl, {
        setAttributes: setAttributes,
        options: options,
        post: attributes.post
      }));
    }),
    save: function save(_ref3) {
      var attributes = _ref3.attributes;
      var post = attributes.post;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/reusable/custom-richtext-block.jsx":
/*!**********************************************************!*\
  !*** ./src/js/blocks/reusable/custom-richtext-block.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ customRichTextBlock; }
/* harmony export */ });
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
  var settings = blockObject.settings && Array.isArray(blockObject.settings) ? blockObject.settings : ['core/italic', 'core/bold', 'core/link', 'core/code'];
  var parent = blockObject.parent && Array.isArray(blockObject.parent) ? blockObject.parent : null;
  var blockSettings = blockObject.blockSettings ? true : false;
  var transforms = {};

  if (blockObject.transforms && blockObject.transforms.length) {
    transforms.to = [];
    blockObject.transforms.forEach(function (block) {
      var transformObject = {
        type: 'block',
        blocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(block)],
        transform: function transform(attributes, innerBlocks) {
          return createBlock("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(block), attributes, innerBlocks);
        }
      };
      transforms.to.push(transformObject);
    });
  }

  var stringAttrs = ['content'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttrs);
  attributes['content']['source'] = 'html';
  attributes['content']['selector'] = tagName;
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
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(slug), {
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
        class: alignment ? "text-".concat(alignment, " custom-component") : 'custom-component'
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, title), alignment ? /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(AlignmentToolbar, {
        value: alignment,
        onChange: function onChange(change) {
          updateAttributeValue("alignment", change);
        }
      })) : null, /*#__PURE__*/React.createElement(RichText, {
        className: classes ? classes : null,
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
        className: classes,
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomRichText; }
/* harmony export */ });
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
    (0,_helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__["default"])(values, fields);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomVideoUpload; }
/* harmony export */ });
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
    (0,_helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__["default"])(values, requiredFields);
  };

  var checkRequiredVideoAttributes = function checkRequiredVideoAttributes(props) {
    var requiredFields = ['reference', 'value', 'altValue', 'altReference', 'idReference', 'idValue', 'buttonText'];
    var values = props;
    values.type = 'Custom Video';
    (0,_helper_functions_custom_error__WEBPACK_IMPORTED_MODULE_0__["default"])(values, requiredFields);
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

/***/ "./src/js/blocks/reusable/select-authors.jsx":
/*!***************************************************!*\
  !*** ./src/js/blocks/reusable/select-authors.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SelectAuthors; }
/* harmony export */ });
/* harmony import */ var _select_post_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-post.jsx */ "./src/js/blocks/reusable/select-post.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function SelectAuthors(_ref) {
  var authors = _ref.authors,
      updateAttributeValue = _ref.updateAttributeValue;
  var authorsArray = authors !== '' ? JSON.parse(authors) : [];

  var setAuthors = function setAuthors(val) {
    if (val.label && authorsArray.filter(function (author) {
      return author.label === val.label;
    }).length === 0) {
      val.equal = false;
      updateAttributeValue('authors', JSON.stringify([].concat(_toConsumableArray(authorsArray), [val])));
    }
  };

  var updateContribution = function updateContribution(e, index) {
    e.preventDefault();
    var tempAuthors = authorsArray;
    tempAuthors[index].equal = !tempAuthors[index].equal;
    updateAttributeValue('authors', JSON.stringify(tempAuthors));
  };

  var removeAuthor = function removeAuthor(e, index) {
    e.preventDefault();
    var tempAuthors = authorsArray;
    tempAuthors.splice(index, 1);
    updateAttributeValue('authors', JSON.stringify(tempAuthors));
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Current Authors"), authorsArray.length > 0 && /*#__PURE__*/React.createElement("ol", {
    style: {
      padding: '16px'
    }
  }, authorsArray.map(function (author, index) {
    return /*#__PURE__*/React.createElement("li", {
      style: {
        fontWeight: 700,
        padding: '4px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '33.33%'
      }
    }, "".concat(author.label).concat(author.equal ? '*' : '')), /*#__PURE__*/React.createElement("button", {
      style: {
        fontWeight: 400,
        width: '33.33%',
        border: 0,
        padding: '8px 24px'
      },
      onClick: function onClick(e) {
        return updateContribution(e, index);
      }
    }, author.equal ? 'Remove Equal Contribution' : 'Add equal contribution'), /*#__PURE__*/React.createElement("button", {
      style: {
        background: '#F05C5C',
        width: '33.33%',
        border: 0,
        padding: '8px 24px',
        color: 'white'
      },
      onClick: function onClick(e) {
        return removeAuthor(e, index);
      }
    }, "Remove Author")));
  })), /*#__PURE__*/React.createElement("h3", null, "Add an Author"), /*#__PURE__*/React.createElement(_select_post_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    slug: "author",
    setValues: setAuthors,
    label: "Select an Author"
  }));
}

/***/ }),

/***/ "./src/js/blocks/reusable/select-post.jsx":
/*!************************************************!*\
  !*** ./src/js/blocks/reusable/select-post.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SelectPost; }
/* harmony export */ });
function SelectPost(_ref) {
  var slug = _ref.slug,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Select a Post" : _ref$label,
      setValues = _ref.setValues;
  var SelectControl = wp.components.SelectControl;
  var useSelect = wp.data.useSelect;

  var _useSelect = useSelect(function (select) {
    return {
      posts: select('core').getEntityRecords('postType', slug, {
        per_page: -1
      })
    };
  }),
      posts = _useSelect.posts;

  var selectPosts = [];

  if (posts && posts.length > 0) {
    selectPosts = posts.map(function (post) {
      return {
        label: post.title.rendered,
        value: post.id
      };
    });
    selectPosts.sort(function (a, b) {
      if (a.label < b.label) {
        return -1;
      }

      if (a.label > b.label) {
        return 1;
      }

      return 0;
    });
    selectPosts.push({
      label: 'Select',
      value: 0
    });
  }

  return /*#__PURE__*/React.createElement("div", null, posts && posts.length > 0 ? /*#__PURE__*/React.createElement(SelectControl, {
    label: label,
    value: 0,
    options: selectPosts,
    onChange: function onChange(id) {
      var post = selectPosts.find(function (post) {
        return post.value === Number(id);
      });
      setValues(post);
    }
  }) : /*#__PURE__*/React.createElement("p", null, "No posts found"));
}

/***/ }),

/***/ "./src/js/blocks/sidebar-table-of-contents/custom-section-blok.jsx":
/*!*************************************************************************!*\
  !*** ./src/js/blocks/sidebar-table-of-contents/custom-section-blok.jsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ customSectionBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function customSectionBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "custom-section-block"; // slug for the block

  var blockTitle = "Custom Section";
  var blockDescription = "Component to create custom section block";
  var blockCategory = "common";
  var blockIcon = "welcome-add-page"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-section custom-section__block"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Custom Section Block"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          settings: ['core/bold', 'core/link', 'core/italic', 'core/code'],
          placeholder: "Please provide a title"
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/custom-subsection-block"), "core/code", "core/table", "core/podcast", "core/video", "core/list", "core/quote", "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/tag-cloud-container-block"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/paragraph"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-two"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-three"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-four"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/custom-image"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/blockquote"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/publications-container"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/image-text"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/icon-list-container-block")]
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

/***/ "./src/js/blocks/sidebar-table-of-contents/custom-subsection-blok.jsx":
/*!****************************************************************************!*\
  !*** ./src/js/blocks/sidebar-table-of-contents/custom-subsection-blok.jsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ customSubsectionBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function customSubsectionBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var _wp = wp,
      i18n = _wp.i18n;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var blockSlug = "custom-subsection-block"; // slug for the block

  var blockTitle = "Custom Subsection";
  var blockDescription = "Component to create custom subsection block";
  var blockCategory = "common";
  var blockIcon = "admin-page"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/custom-section-block")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-subsection custom-subsection__block"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Custom Subsection Block"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          label: 'Title',
          value: title,
          reference: "title",
          tagName: "h3",
          settings: ['core/bold', 'core/link', 'core/italic', 'core/code'],
          placeholder: "Please provide a title"
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["core/code", "core/table", "core/podcast", "core/video", "core/list", "core/quote", "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/tag-cloud-container-block"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/paragraph"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-two"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-three"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-four"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/custom-image"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/blockquote"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/publications-container"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/image-text"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/icon-list-container-block")]
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

/***/ "./src/js/blocks/slider/news-slide.jsx":
/*!*********************************************!*\
  !*** ./src/js/blocks/slider/news-slide.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pgNewsSlideBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function pgNewsSlideBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "news-slide";
  var blockTitle = "News Slide";
  var blockDescription = "Creates a slide for an external news source.";
  var blockCategory = "carousels";
  var blockIcon = "external"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttrs = ['link', 'title', 'source'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__["default"])(stringAttrs);
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/carousel")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var link = attributes.link,
          title = attributes.title,
          source = attributes.source;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "News Slide"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h3',
          classes: ['h3'],
          settings: [],
          placeholder: 'Provide the title for the news item (required)'
        }, {
          reference: 'link',
          value: link,
          tagName: 'p',
          classes: ['paragraph'],
          settings: [],
          placeholder: 'Provide a link to the news item (required)'
        }, {
          reference: 'source',
          value: source,
          tagName: 'p',
          classes: ['paragraph'],
          settings: [],
          placeholder: 'Provide the name for the news source (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save() {
      var link = attributes.link,
          title = attributes.title,
          source = attributes.source;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/slider/slider-container.jsx":
/*!***************************************************!*\
  !*** ./src/js/blocks/slider/slider-container.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pgCarouselBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function pgCarouselBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "carousel";
  var blockTitle = "News Carousel";
  var blockDescription = "Creates a carousel.";
  var blockCategory = "carousels";
  var blockIcon = "slides"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttrs = ['link', 'title'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__["default"])(stringAttrs);
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
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
      var link = attributes.link,
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
          classes: ['h2'],
          settings: [],
          placeholder: 'Provide a Carousel title (optional)'
        }, {
          reference: 'link',
          value: link,
          tagName: 'p',
          classes: ['paragraph'],
          settings: [],
          placeholder: 'Provide a Carousel View All link (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-research-blogs"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-news"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/news-slide")]
      }))];
    },
    save: function save() {
      var link = attributes.link,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/stats/stats-column.jsx":
/*!**********************************************!*\
  !*** ./src/js/blocks/stats/stats-column.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ trmcStatsColumnBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
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
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/stats-container")],
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

/***/ "./src/js/blocks/stats/stats-container.jsx":
/*!*************************************************!*\
  !*** ./src/js/blocks/stats/stats-container.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ trmcStatsContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
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
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
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
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/stat-column")]
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

/***/ "./src/js/blocks/tabbed-content/tabbed-content-container.jsx":
/*!*******************************************************************!*\
  !*** ./src/js/blocks/tabbed-content/tabbed-content-container.jsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ tabbedContentContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function tabbedContentContainerBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "tabbed-content-container-block"; // slug for the block

  var blockTitle = "Tabbed content container block";
  var blockDescription = "Component to create tabbed content container block";
  var blockCategory = "common";
  var blockIcon = "block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    },
    copy: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var title = attributes.title,
          copy = attributes.copy;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "tabbed-content-container__block"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Tabbed Content Container"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "p",
          placeholder: "Please provide a title (optional)"
        }]
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: copy,
          reference: "copy",
          tagName: "p",
          placeholder: "Please provide copy (optional)"
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/tabbed-content-panel-block")]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          copy = attributes.copy;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/tabbed-content/tabbed-content-panel.jsx":
/*!***************************************************************!*\
  !*** ./src/js/blocks/tabbed-content/tabbed-content-panel.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ tabbedContentPanelBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function tabbedContentPanelBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "tabbed-content-panel-block"; // slug for the block

  var blockTitle = "Tabbed content panel block";
  var blockDescription = "Component to create tabbed content panel block";
  var blockCategory = "common";
  var blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    },
    content: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/tabbed-content-container-block")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var title = attributes.title,
          content = attributes.content;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "tabbed-content-panel__block"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Tabbed Content Panel"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "p",
          placeholder: "Please provide a title"
        }]
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: content,
          reference: "content",
          tagName: "p",
          placeholder: "Please provide content"
        }]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          content = attributes.content;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/tag-cloud/tag-cloud-container-block.jsx":
/*!***************************************************************!*\
  !*** ./src/js/blocks/tag-cloud/tag-cloud-container-block.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ tagCloudContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function tagCloudContainerBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "tag-cloud-container-block"; // slug for the block

  var blockTitle = "Tag cloud container block";
  var blockDescription = "Component to create tag cloud container block";
  var blockCategory = "common";
  var blockIcon = "block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "tag-cloud-container__block custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Tag Cloud Container"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "p",
          placeholder: "Please provide a title (optional)",
          settings: []
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/tag-cloud-item-block")]
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

/***/ "./src/js/blocks/tag-cloud/tag-cloud-item-block.jsx":
/*!**********************************************************!*\
  !*** ./src/js/blocks/tag-cloud/tag-cloud-item-block.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ tagCloudItemBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function tagCloudItemBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "tag-cloud-item-block"; // slug for the block

  var blockTitle = "Tag cloud item block";
  var blockDescription = "Component to create tag cloud item block";
  var blockCategory = "common";
  var blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    text: {
      type: 'String',
      default: ''
    },
    link: {
      type: 'String',
      default: ''
    }
  };
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/tag-cloud-container-block")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var text = attributes.text,
          link = attributes.link;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "tag-cloud-item__block custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Tag Cloud Item"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: text,
          reference: "text",
          tagName: "p",
          placeholder: "Please provide a title",
          settings: []
        }]
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: link,
          reference: "link",
          tagName: "p",
          placeholder: "Please provide a link",
          settings: []
        }]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var text = attributes.text,
          link = attributes.link;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/text-column.jsx":
/*!***************************************!*\
  !*** ./src/js/blocks/text-column.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ textColumnBlock; }
/* harmony export */ });
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
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttributes);
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
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
/*!*****************************!*\
  !*** ./src/js/gutenberg.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_core_extends_video_embed_poster_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/core-extends/video-embed-poster.jsx */ "./src/js/blocks/core-extends/video-embed-poster.jsx");
/* harmony import */ var _blocks_copy_copy_blocks_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/copy/copy-blocks.jsx */ "./src/js/blocks/copy/copy-blocks.jsx");
/* harmony import */ var _blocks_meta_page_meta_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/meta/page-meta.jsx */ "./src/js/blocks/meta/page-meta.jsx");
/* harmony import */ var _blocks_meta_research_blogs_meta_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/meta/research-blogs-meta.jsx */ "./src/js/blocks/meta/research-blogs-meta.jsx");
/* harmony import */ var _blocks_meta_news_meta_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/meta/news-meta.jsx */ "./src/js/blocks/meta/news-meta.jsx");
/* harmony import */ var _blocks_meta_team_member_meta_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/meta/team-member-meta.jsx */ "./src/js/blocks/meta/team-member-meta.jsx");
/* harmony import */ var _blocks_meta_author_meta_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/meta/author-meta.jsx */ "./src/js/blocks/meta/author-meta.jsx");
/* harmony import */ var _blocks_meta_publications_meta_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/meta/publications-meta.jsx */ "./src/js/blocks/meta/publications-meta.jsx");
/* harmony import */ var _js_blocks_text_column_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../js/blocks/text-column.jsx */ "./src/js/blocks/text-column.jsx");
/* harmony import */ var _blocks_image_text_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/image-text.jsx */ "./src/js/blocks/image-text.jsx");
/* harmony import */ var _blocks_image_block_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/image-block.jsx */ "./src/js/blocks/image-block.jsx");
/* harmony import */ var _blocks_accordion_accordion_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/accordion/accordion.jsx */ "./src/js/blocks/accordion/accordion.jsx");
/* harmony import */ var _blocks_accordion_accordion_row_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/accordion/accordion-row.jsx */ "./src/js/blocks/accordion/accordion-row.jsx");
/* harmony import */ var _blocks_blockquote_blockquote_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/blockquote/blockquote.jsx */ "./src/js/blocks/blockquote/blockquote.jsx");
/* harmony import */ var _blocks_body_copy_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/body-copy.jsx */ "./src/js/blocks/body-copy.jsx");
/* harmony import */ var _blocks_callouts_callout_container_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/callouts/callout-container.jsx */ "./src/js/blocks/callouts/callout-container.jsx");
/* harmony import */ var _blocks_callouts_callout_column_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/callouts/callout-column.jsx */ "./src/js/blocks/callouts/callout-column.jsx");
/* harmony import */ var _blocks_content_cards_content_card_container_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/content-cards/content-card-container.jsx */ "./src/js/blocks/content-cards/content-card-container.jsx");
/* harmony import */ var _blocks_content_cards_content_card_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/content-cards/content-card.jsx */ "./src/js/blocks/content-cards/content-card.jsx");
/* harmony import */ var _blocks_image_list_image_list_container_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/image-list/image-list-container.jsx */ "./src/js/blocks/image-list/image-list-container.jsx");
/* harmony import */ var _blocks_image_list_image_list_block_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/image-list/image-list-block.jsx */ "./src/js/blocks/image-list/image-list-block.jsx");
/* harmony import */ var _blocks_logos_logo_container_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blocks/logos/logo-container.jsx */ "./src/js/blocks/logos/logo-container.jsx");
/* harmony import */ var _blocks_logos_logo_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blocks/logos/logo.jsx */ "./src/js/blocks/logos/logo.jsx");
/* harmony import */ var _blocks_page_strips_page_strip_jsx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blocks/page-strips/page-strip.jsx */ "./src/js/blocks/page-strips/page-strip.jsx");
/* harmony import */ var _blocks_page_strips_page_strip_graphic_jsx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./blocks/page-strips/page-strip-graphic.jsx */ "./src/js/blocks/page-strips/page-strip-graphic.jsx");
/* harmony import */ var _blocks_page_strips_page_strip_graphic_container_jsx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./blocks/page-strips/page-strip-graphic-container.jsx */ "./src/js/blocks/page-strips/page-strip-graphic-container.jsx");
/* harmony import */ var _blocks_publications_publications_container_jsx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blocks/publications/publications-container.jsx */ "./src/js/blocks/publications/publications-container.jsx");
/* harmony import */ var _blocks_publications_select_posts_blocks_jsx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./blocks/publications/select-posts-blocks.jsx */ "./src/js/blocks/publications/select-posts-blocks.jsx");
/* harmony import */ var _blocks_publications_bibtex_block_jsx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./blocks/publications/bibtex-block.jsx */ "./src/js/blocks/publications/bibtex-block.jsx");
/* harmony import */ var _blocks_posts_featured_posts_container_jsx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blocks/posts/featured-posts-container.jsx */ "./src/js/blocks/posts/featured-posts-container.jsx");
/* harmony import */ var _blocks_slider_slider_container_jsx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./blocks/slider/slider-container.jsx */ "./src/js/blocks/slider/slider-container.jsx");
/* harmony import */ var _blocks_slider_news_slide_jsx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./blocks/slider/news-slide.jsx */ "./src/js/blocks/slider/news-slide.jsx");
/* harmony import */ var _blocks_stats_stats_container_jsx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./blocks/stats/stats-container.jsx */ "./src/js/blocks/stats/stats-container.jsx");
/* harmony import */ var _blocks_stats_stats_column_jsx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./blocks/stats/stats-column.jsx */ "./src/js/blocks/stats/stats-column.jsx");
/* harmony import */ var _blocks_greenhouse_jobs_block_jsx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./blocks/greenhouse/jobs-block.jsx */ "./src/js/blocks/greenhouse/jobs-block.jsx");
/* harmony import */ var _blocks_sidebar_table_of_contents_custom_section_blok_jsx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./blocks/sidebar-table-of-contents/custom-section-blok.jsx */ "./src/js/blocks/sidebar-table-of-contents/custom-section-blok.jsx");
/* harmony import */ var _blocks_sidebar_table_of_contents_custom_subsection_blok_jsx__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./blocks/sidebar-table-of-contents/custom-subsection-blok.jsx */ "./src/js/blocks/sidebar-table-of-contents/custom-subsection-blok.jsx");
/* harmony import */ var _blocks_icon_list_icon_list_container_block_jsx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./blocks/icon-list/icon-list-container-block.jsx */ "./src/js/blocks/icon-list/icon-list-container-block.jsx");
/* harmony import */ var _blocks_icon_list_icon_list_item_block_jsx__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./blocks/icon-list/icon-list-item-block.jsx */ "./src/js/blocks/icon-list/icon-list-item-block.jsx");
/* harmony import */ var _blocks_tabbed_content_tabbed_content_container_jsx__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./blocks/tabbed-content/tabbed-content-container.jsx */ "./src/js/blocks/tabbed-content/tabbed-content-container.jsx");
/* harmony import */ var _blocks_tabbed_content_tabbed_content_panel_jsx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./blocks/tabbed-content/tabbed-content-panel.jsx */ "./src/js/blocks/tabbed-content/tabbed-content-panel.jsx");
/* harmony import */ var _blocks_tag_cloud_tag_cloud_container_block_jsx__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./blocks/tag-cloud/tag-cloud-container-block.jsx */ "./src/js/blocks/tag-cloud/tag-cloud-container-block.jsx");
/* harmony import */ var _blocks_tag_cloud_tag_cloud_item_block_jsx__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./blocks/tag-cloud/tag-cloud-item-block.jsx */ "./src/js/blocks/tag-cloud/tag-cloud-item-block.jsx");
// import customButtonIcons from './blocks/core-extends/button-icons';

 // Meta








 // Page Strips

 // Accordion Blocks


 // Block Quote

 // Body Copy

 // Callout Columns


 // Content Columns


 // Image List Blocks


 // Logo Blocks


 // Page Strips



 // Publications



 // Posts

 // Slider Blocks


 // Stat Blocks


 // Greenhouse Blocks

 // Sidebar Table Of Contents Blocks


 // Icon List Contents Blocks


 // Tabbed Content Blocks


 // Tag Cloud Content Blocks


 // Core Extends Blocks

(0,_blocks_core_extends_video_embed_poster_jsx__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_blocks_copy_copy_blocks_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Init meta blocks

(0,_blocks_meta_page_meta_jsx__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_blocks_meta_research_blogs_meta_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_blocks_meta_news_meta_jsx__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_blocks_meta_team_member_meta_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_blocks_meta_author_meta_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_blocks_meta_publications_meta_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(); // Init blocks here

(0,_js_blocks_text_column_jsx__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_blocks_image_text_jsx__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Page Strips

(0,_blocks_page_strips_page_strip_jsx__WEBPACK_IMPORTED_MODULE_23__["default"])();
(0,_blocks_image_block_jsx__WEBPACK_IMPORTED_MODULE_10__["default"])();
(0,_blocks_page_strips_page_strip_graphic_jsx__WEBPACK_IMPORTED_MODULE_24__["default"])();
(0,_blocks_page_strips_page_strip_graphic_container_jsx__WEBPACK_IMPORTED_MODULE_25__["default"])(); // Accordion Blocks

(0,_blocks_accordion_accordion_jsx__WEBPACK_IMPORTED_MODULE_11__["default"])();
(0,_blocks_accordion_accordion_row_jsx__WEBPACK_IMPORTED_MODULE_12__["default"])(); // Block Quote

(0,_blocks_blockquote_blockquote_jsx__WEBPACK_IMPORTED_MODULE_13__["default"])(); // Body Copy

(0,_blocks_body_copy_jsx__WEBPACK_IMPORTED_MODULE_14__["default"])(); // Callout Columns

(0,_blocks_callouts_callout_container_jsx__WEBPACK_IMPORTED_MODULE_15__["default"])();
(0,_blocks_callouts_callout_column_jsx__WEBPACK_IMPORTED_MODULE_16__["default"])(); // Content Cards

(0,_blocks_content_cards_content_card_container_jsx__WEBPACK_IMPORTED_MODULE_17__["default"])();
(0,_blocks_content_cards_content_card_jsx__WEBPACK_IMPORTED_MODULE_18__["default"])(); // Image List Blocks

(0,_blocks_image_list_image_list_container_jsx__WEBPACK_IMPORTED_MODULE_19__["default"])();
(0,_blocks_image_list_image_list_block_jsx__WEBPACK_IMPORTED_MODULE_20__["default"])(); // Logo Blocks

(0,_blocks_logos_logo_container_jsx__WEBPACK_IMPORTED_MODULE_21__["default"])();
(0,_blocks_logos_logo_jsx__WEBPACK_IMPORTED_MODULE_22__["default"])(); // Publications

(0,_blocks_publications_publications_container_jsx__WEBPACK_IMPORTED_MODULE_26__["default"])();
(0,_blocks_publications_select_posts_blocks_jsx__WEBPACK_IMPORTED_MODULE_27__["default"])();
(0,_blocks_publications_bibtex_block_jsx__WEBPACK_IMPORTED_MODULE_28__["default"])(); // Posts

(0,_blocks_posts_featured_posts_container_jsx__WEBPACK_IMPORTED_MODULE_29__["default"])(); // Slide Blocks

(0,_blocks_slider_slider_container_jsx__WEBPACK_IMPORTED_MODULE_30__["default"])();
(0,_blocks_slider_news_slide_jsx__WEBPACK_IMPORTED_MODULE_31__["default"])(); // Stat Blocks

(0,_blocks_stats_stats_container_jsx__WEBPACK_IMPORTED_MODULE_32__["default"])();
(0,_blocks_stats_stats_column_jsx__WEBPACK_IMPORTED_MODULE_33__["default"])(); // Greenhouse Blocks

(0,_blocks_greenhouse_jobs_block_jsx__WEBPACK_IMPORTED_MODULE_34__["default"])(); // Sidebar Table Of Contents Blocks

(0,_blocks_sidebar_table_of_contents_custom_section_blok_jsx__WEBPACK_IMPORTED_MODULE_35__["default"])();
(0,_blocks_sidebar_table_of_contents_custom_subsection_blok_jsx__WEBPACK_IMPORTED_MODULE_36__["default"])(); // Icon List Blocks

(0,_blocks_icon_list_icon_list_container_block_jsx__WEBPACK_IMPORTED_MODULE_37__["default"])();
(0,_blocks_icon_list_icon_list_item_block_jsx__WEBPACK_IMPORTED_MODULE_38__["default"])(); // Tabbed Content Blocks

(0,_blocks_tabbed_content_tabbed_content_container_jsx__WEBPACK_IMPORTED_MODULE_39__["default"])();
(0,_blocks_tabbed_content_tabbed_content_panel_jsx__WEBPACK_IMPORTED_MODULE_40__["default"])(); // Tag Cloud Content Blocks

(0,_blocks_tag_cloud_tag_cloud_container_block_jsx__WEBPACK_IMPORTED_MODULE_41__["default"])();
(0,_blocks_tag_cloud_tag_cloud_item_block_jsx__WEBPACK_IMPORTED_MODULE_42__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=gutenberg.js.map