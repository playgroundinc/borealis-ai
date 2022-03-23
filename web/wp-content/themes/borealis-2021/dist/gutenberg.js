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
  var blockCategory = "rows";
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
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/paragraph"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-four")]
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
          settings: [],
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
  var blockCategory = "copy";
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

/***/ "./src/js/blocks/callouts/callout-column.jsx":
/*!***************************************************!*\
  !*** ./src/js/blocks/callouts/callout-column.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ calloutColumnBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable


function calloutColumnBlock() {
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
  var category = "rows";
  var icon = "table-col-after"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    link: {
      type: "String",
      default: ""
    },
    subtitle: {
      type: "String",
      default: ""
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
      var link = attributes.link,
          subtitle = attributes.subtitle,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Callout Card"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: title,
          reference: 'title',
          tagName: 'h2',
          classes: ['heading-one'],
          settings: [],
          placeholder: "Add a title for this card"
        }, {
          value: subtitle,
          reference: 'subtitle',
          tagName: 'p',
          placeholder: "Add a subtitle for this card"
        }, {
          value: link,
          reference: 'link',
          settings: [],
          tagName: 'p',
          placeholder: "Add a link (required)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      })))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var link = attributes.link,
          subtitle = attributes.subtitle,
          title = attributes.title;
      return;
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
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function trmcAccordionBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "callout-container";
  var blockTitle = "Callout Cards Container";
  var blockDescription = "Creates a container for single callout cards.";
  var blockCategory = "containers";
  var blockIcon = "layout"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    description: {
      type: 'String',
      default: ''
    },
    title: {
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
          image_alt = attributes.image_alt,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Callout Cards Container"), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add background image'
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

/***/ "./src/js/blocks/code/code-block.jsx":
/*!*******************************************!*\
  !*** ./src/js/blocks/code/code-block.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ codeBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function codeBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "code"; // slug for the block

  var blockTitle = "Code";
  var blockDescription = "Single code block";
  var blockCategory = "copy";
  var blockIcon = "editor-code"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: "String",
      default: ""
    },
    caption: {
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
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var title = attributes.title,
          caption = attributes.caption;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Code Block"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          classes: ["heading_one"],
          settings: [],
          placeholder: "Please provide a title (optional)"
        }, {
          value: caption,
          reference: "caption",
          tagName: "p",
          settings: [],
          placeholder: "Please provide a caption (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["core/code"],
        template: [['core/code']],
        templateLock: "all"
      }))];
    },
    save: function save() {
      var title = attributes.title,
          caption = attributes.caption;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/code/compare-code-block.jsx":
/*!***************************************************!*\
  !*** ./src/js/blocks/code/compare-code-block.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ compareCodeBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function compareCodeBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "compare-code"; // slug for the block

  var blockTitle = "Compare Code";
  var blockDescription = "Component to compare two code blocks";
  var blockCategory = "containers";
  var blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: "String",
      default: ""
    },
    caption: {
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
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var title = attributes.title,
          caption = attributes.caption;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Compare Code"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          classes: ["heading_one"],
          settings: [],
          placeholder: "Please provide a title (optional)"
        }, {
          value: caption,
          reference: "caption",
          tagName: "p",
          settings: [],
          placeholder: "Please provide a caption (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["core/code"],
        template: [['core/code'], ['core/code']],
        templateLock: "all"
      }))];
    },
    save: function save() {
      var title = attributes.title,
          caption = attributes.caption;
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
  var category = "rows";
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
  category: "copy",
  icon: "editor-paragraph",
  tagName: "p",
  transforms: ["heading-two", "heading-three", "heading-four", "legal"]
}, {
  slug: 'heading-two',
  title: "Heading Two",
  description: "Add a second level header",
  classes: "wp-block-pg-heading-two h3 md:h2 mt-11 md:mt-13 first:mt-0",
  category: "copy",
  icon: "heading",
  tagName: "h2",
  transforms: ["paragraph", "heading-three", "heading-four", "legal"]
}, {
  slug: 'heading-three',
  title: "Heading Three",
  classes: "h3 mt-11 md:mt-13 first:mt-0 wp-block-pg-heading-three first:mt-0",
  description: "Add a third level header",
  category: "copy",
  icon: "heading",
  tagName: "h3",
  transforms: ["paragraph", "heading-two", "heading-four", "legal"]
}, {
  slug: 'heading-four',
  title: "Heading Four",
  classes: "h4 mt-9 md:mt-10 wp-block-pg-heading-four first:mt-0",
  description: "Add a fourth level header",
  category: "copy",
  icon: "heading",
  tagName: "h4",
  transforms: ["paragraph", "heading-two", "heading-three", "legal"]
}, {
  slug: 'legal',
  title: "Legal Text",
  classes: "legal mt-8 wp-block-pg-paragraph first:mt-0",
  description: "Add legal text",
  category: "copy",
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
      Button = _wp$components.Button;

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
          image_url = attributes.image_url;
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
      }))), /*#__PURE__*/React.createElement(BlockEdit, props)), null];
    };
  }, 'withInspectorControl'); // Add attribute to core block

  addFilter('blocks.registerBlockType', 'pg/core-embed', customAttributes); // Add inspector controls for attribute

  addFilter('editor.BlockEdit', 'pg/core-embed', withInspectorControls);
}

/***/ }),

/***/ "./src/js/blocks/fellowships/fellowship-block.jsx":
/*!********************************************************!*\
  !*** ./src/js/blocks/fellowships/fellowship-block.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ fellowshipBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function fellowshipBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "fellowship"; // slug for the block

  var blockTitle = "Fellowship";
  var blockDescription = "Creates a Fellowship block";
  var blockCategory = "containers";
  var blockIcon = "admin-users"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/fellowship-container")],
    attributes: {
      name: {
        type: 'String',
        default: ''
      },
      topic: {
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
      },
      logo_id: {
        type: 'Number',
        default: 0
      },
      logo_alt: {
        type: 'String',
        default: ''
      },
      logo_url: {
        type: 'String',
        default: ''
      }
    },
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var name = attributes.name,
          topic = attributes.topic,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          logo_id = attributes.logo_id,
          logo_alt = attributes.logo_alt,
          logo_url = attributes.logo_url;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Fellowships Container"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: name,
          reference: "name",
          tagName: "h2",
          placeholder: "Please provide name",
          settings: []
        }, {
          value: topic,
          reference: "topic",
          tagName: "p",
          placeholder: "Please provide research topic",
          settings: []
        }]
      }), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add an image'
        }, {
          value: logo_url,
          reference: 'logo_url',
          altValue: logo_alt,
          altReference: 'logo_alt',
          idValue: logo_id,
          idReference: 'logo_id',
          buttonText: 'Add an affiliation logo (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var name = attributes.name,
          topic = attributes.topic,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          logo_id = attributes.logo_id,
          logo_alt = attributes.logo_alt,
          logo_url = attributes.logo_url;
      return;
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/fellowships/fellowship-container-block.jsx":
/*!******************************************************************!*\
  !*** ./src/js/blocks/fellowships/fellowship-container-block.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ fellowshipContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function fellowshipContainerBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "fellowship-container"; // slug for the block

  var blockTitle = "Fellowships Container";
  var blockDescription = "Creates a Fellowships Container block";
  var blockCategory = "containers";
  var blockIcon = "id"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
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
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Fellowships Container"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          placeholder: "Please provide a title (optional)",
          settings: []
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/fellowship")]
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

/***/ "./src/js/blocks/figures/compare-figures-block.jsx":
/*!*********************************************************!*\
  !*** ./src/js/blocks/figures/compare-figures-block.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ compareFiguresBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function compareFiguresBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "compare-figures"; // slug for the block

  var blockTitle = "Compare Figures";
  var blockDescription = "Component to compare multiple figures";
  var blockCategory = "containers";
  var blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    },
    description: {
      type: 'String',
      default: ''
    },
    caption: {
      type: 'String',
      default: ''
    },
    columns: {
      type: 'Number',
      default: 6
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
      var caption = attributes.caption,
          description = attributes.description,
          title = attributes.title,
          columns = attributes.columns;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Compare Figures"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Block Settings",
        controls: [{
          type: 'radio',
          label: 'Number of Columns',
          options: [{
            value: '6',
            label: 'Two'
          }, {
            value: '4',
            label: 'Three'
          }, {
            value: '3',
            label: 'Four'
          }],
          reference: 'columns',
          value: "".concat(columns)
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, Number(change));
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          placeholder: "Please provide a title (optional)",
          settings: []
        }, {
          value: description,
          reference: "description",
          tagName: "p",
          placeholder: "Please provide a description (optional)"
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/custom-image")]
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: caption,
          reference: "caption",
          tagName: "p",
          placeholder: "Please provide a caption (optional)",
          settings: []
        }]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          caption = attributes.caption;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/gallery/gallery-container-block.jsx":
/*!***********************************************************!*\
  !*** ./src/js/blocks/gallery/gallery-container-block.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ galleryContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function galleryContainerBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "gallery-container"; // slug for the block

  var blockTitle = "Gallery Container";
  var blockDescription = "Creates a Gallery Container block";
  var blockCategory = "containers";
  var blockIcon = "format-gallery"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    },
    description: {
      type: 'String',
      default: ''
    },
    link: {
      type: 'String',
      default: ''
    },
    link_text: {
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
          description = attributes.description,
          link = attributes.link,
          link_text = attributes.link_text;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Gallery Container"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          placeholder: "Please provide a title (optional)",
          settings: []
        }, {
          value: description,
          reference: "description",
          tagName: "p",
          placeholder: "Please provide a description (optional)",
          settings: ['core/bold', 'core/link', 'core/italic']
        }, {
          value: link,
          reference: "link",
          tagName: "p",
          placeholder: "Please provide a link (optional)",
          settings: []
        }, {
          value: link_text,
          reference: "link_text",
          tagName: "p",
          placeholder: "Please provide a link text (optional)",
          settings: []
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-team-member"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/custom-image")]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          description = attributes.description,
          link = attributes.link,
          link_text = attributes.link_text;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/greenhouse/job-highlight-block.jsx":
/*!**********************************************************!*\
  !*** ./src/js/blocks/greenhouse/job-highlight-block.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ jobHighlightBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function jobHighlightBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "job-highlight";
  var blockTitle = "Job Highlight";
  var blockDescription = "Add an image and text to a job list block";
  var blockCategory = "jobs";
  var blockIcon = "id"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: 'String',
      default: ''
    },
    copy: {
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
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/jobs-container")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var copy = attributes.copy,
          image_id = attributes.image_id,
          image_alt = attributes.image_alt,
          image_url = attributes.image_url,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Jobs Highlight Block"), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          settings: [],
          placeholder: "Please provide a title"
        }, {
          value: copy,
          reference: 'copy',
          tagName: 'p',
          placeholder: "Please provide copy"
        }]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var copy = attributes.copy,
          image_id = attributes.image_id,
          image_alt = attributes.image_alt,
          image_url = attributes.image_url,
          title = attributes.title;
    }
  });
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
  var blockCategory = "jobs";
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

/***/ "./src/js/blocks/greenhouse/jobs-list.jsx":
/*!************************************************!*\
  !*** ./src/js/blocks/greenhouse/jobs-list.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ featuredJobsBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function featuredJobsBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "jobs-container"; // slug for the block

  var blockTitle = "Featured Jobs container";
  var blockDescription = "Component to create highlighted jobs container block";
  var blockCategory = "jobs";
  var blockIcon = "archive"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

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
        class: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Featured Jobs Container"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          placeholder: "Please provide a title (optional)",
          settings: []
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-job")]
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

/***/ "./src/js/blocks/greenhouse/select-job-block.jsx":
/*!*******************************************************!*\
  !*** ./src/js/blocks/greenhouse/select-job-block.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ selectJobBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


function selectJobBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var SelectControl = wp.components.SelectControl;
  var Component = wp.element.Component;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "select-job";
  var blockTitle = "Select Job";
  var blockDescription = "Component to select a single job";
  var blockCategory = "selects";
  var blockIcon = "admin-users"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    job_id: {
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
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/jobs-container")],
    edit: /*#__PURE__*/function (_Component) {
      _inherits(edit, _Component);

      var _super = _createSuper(edit);

      function edit(props) {
        var _this;

        _classCallCheck(this, edit);

        _this = _super.call(this, props);
        _this.state = {
          jobs: [],
          error: false
        };
        return _this;
      }

      _createClass(edit, [{
        key: "componentDidMount",
        value: function () {
          var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var resp, data, options;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(ajaxInfo.greenhouseAPIKey !== '' && ajaxInfo.greenhouseURL !== '')) {
                      _context.next = 16;
                      break;
                    }

                    _context.prev = 1;
                    _context.next = 4;
                    return fetch("".concat(ajaxInfo.greenhouseURL, "/jobs?content=true"), {
                      method: 'GET',
                      headers: {
                        'Authorization': "Basic ".concat(ajaxInfo.greenhouseAPIKey)
                      }
                    });

                  case 4:
                    resp = _context.sent;
                    _context.next = 7;
                    return resp.json();

                  case 7:
                    data = _context.sent;

                    if (data.jobs && data.jobs.length > 0) {
                      options = data.jobs.map(function (job) {
                        return {
                          label: job.title,
                          value: job.id
                        };
                      });
                      options.unshift({
                        label: "Select",
                        value: 0
                      });
                      this.setState({
                        jobs: options
                      });
                    }

                    _context.next = 14;
                    break;

                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](1);
                    this.setState({
                      error: true
                    });

                  case 14:
                    _context.next = 17;
                    break;

                  case 16:
                    this.setState({
                      error: true
                    });

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 11]]);
          }));

          function componentDidMount() {
            return _componentDidMount.apply(this, arguments);
          }

          return componentDidMount;
        }()
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              attributes = _this$props.attributes,
              setAttributes = _this$props.setAttributes;
          var job_id = attributes.job_id;
          return /*#__PURE__*/React.createElement("div", {
            class: "custom-component"
          }, /*#__PURE__*/React.createElement("p", {
            className: "block-title"
          }, "Select A Job"), this.state.jobs && this.state.jobs.length > 0 && !this.state.error ? /*#__PURE__*/React.createElement(SelectControl, {
            label: 'Select Job',
            value: Number(job_id) > 0 ? job_id : 0,
            options: this.state.jobs,
            onChange: function onChange(id) {
              setAttributes({
                job_id: id
              });
            }
          }) : /*#__PURE__*/React.createElement("p", null, "No jobs found"), this.state.error && /*#__PURE__*/React.createElement("p", null, "Something's gone wrong. Check Theme Settings to make sure both URL and API Key are correct"));
        }
      }]);

      return edit;
    }(Component),
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var job_id = attributes.job_id;
      return;
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

  var blockTitle = "Icon List Container";
  var blockDescription = "Component to create icon list container block";
  var blockCategory = "containers";
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
          tagName: "h2",
          settings: [],
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
  var blockCategory = "rows";
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

/***/ "./src/js/blocks/image-text-strip-block.jsx":
/*!**************************************************!*\
  !*** ./src/js/blocks/image-text-strip-block.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ imageTextStripBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable




function imageTextStripBlock() {
  /**
   * GUTENBERG BLOCK -Image Text Strip
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var ToggleControl = wp.components.ToggleControl;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "image-text-strip";
  var title = "Image Text Strip";
  var description = "A page strip with an image and text.";
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
    reverse: {
      type: "Boolean",
      default: false
    },
    full_width: {
      type: "Boolean",
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
      var title = attributes.title,
          copy = attributes.copy,
          btn_url = attributes.btn_url,
          btn_text = attributes.btn_text,
          image_alt = attributes.image_alt,
          image_alt_mobile = attributes.image_alt_mobile,
          image_id = attributes.image_id,
          image_id_mobile = attributes.image_id_mobile,
          image_url_mobile = attributes.image_url_mobile,
          image_url = attributes.image_url,
          reverse = attributes.reverse,
          full_width = attributes.full_width;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Image Text Strip (Control layout in block settings)"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Block Settings",
        controls: [{
          type: "toggle",
          label: "Reversed?",
          reference: "reverse",
          value: reverse
        }, {
          type: "toggle",
          label: "Full Width?",
          reference: "full_width",
          value: full_width
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
          buttonText: "Add an image (Mobile)"
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
          settings: ["core/bold", "core/link", "core/italic", "core/list"],
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
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          copy = attributes.copy,
          btn_url = attributes.btn_url,
          btn_text = attributes.btn_text,
          image_url = attributes.image_url,
          reverse = attributes.reverse,
          image_url_mobile = attributes.image_url_mobile,
          full_width = attributes.full_width,
          image_id = attributes.image_id,
          image_id_mobile = attributes.image_id_mobile;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/locations/location-block.jsx":
/*!****************************************************!*\
  !*** ./src/js/blocks/locations/location-block.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ locationBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_video_upload_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-video-upload.jsx */ "./src/js/blocks/reusable/custom-video-upload.jsx");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable



function locationBlock() {
  /**
   * GUTENBERG BLOCK - Locations
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var useSelect = wp.data.useSelect;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "location";
  var title = "Location";
  var description = "A Location Page Strip";
  var category = "page-strips";
  var icon = "align-full-width"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    city: {
      type: "String",
      default: ""
    },
    address: {
      type: "String",
      default: ""
    },
    video_alt: {
      type: "String",
      default: ""
    },
    video_url: {
      type: "String",
      default: ""
    },
    video_id: {
      type: "Number",
      default: 0
    }
  };
  registerBlockType("".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(slug), {
    title: i18n.__(title, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    description: i18n.__(description, "".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace)),
    category: category,
    icon: icon,
    attributes: attributes,
    parent: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/locations-container")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var city = attributes.city,
          address = attributes.address,
          video_alt = attributes.video_alt,
          video_id = attributes.video_id,
          video_url = attributes.video_url;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      var innerBlockCount = useSelect(function (select) {
        return select("core/block-editor").getBlock(props.clientId).innerBlocks;
      });
      return [/*#__PURE__*/React.createElement("section", {
        class: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Location Column"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: city,
          reference: "city",
          tagName: "p",
          classes: ["paragraph"],
          settings: ["core/bold"],
          placeholder: "Please provide a city"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: address,
          reference: "address",
          tagName: "p",
          classes: ["paragraph"],
          settings: ["core/bold"],
          placeholder: "Please provide address (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_video_upload_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: video_url,
          reference: "video_url",
          altValue: video_alt,
          altReference: "video_alt",
          idValue: video_id,
          idReference: "video_id",
          buttonText: "Add a video"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/location-image")],
        renderAppender: function renderAppender() {
          if (innerBlockCount.length < 6) {
            return /*#__PURE__*/React.createElement(InnerBlocks.ButtonBlockAppender, null);
          } else {
            return false;
          }
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var city = attributes.city,
          address = attributes.address,
          video_alt = attributes.video_alt,
          video_id = attributes.video_id,
          video_url = attributes.video_url;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/locations/location-container-block.jsx":
/*!**************************************************************!*\
  !*** ./src/js/blocks/locations/location-container-block.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LocationsContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function LocationsContainerBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var useSelect = wp.data.useSelect;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "locations-container"; // slug for the block

  var blockTitle = "Create Locations container block";
  var blockDescription = "Component to create a Locations container block";
  var blockCategory = "common";
  var blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: "String",
      default: ""
    },
    description: {
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
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var title = attributes.title,
          description = attributes.description;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      var innerBlockCount = useSelect(function (select) {
        return select("core/block-editor").getBlock(props.clientId).innerBlocks;
      });
      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Locations Container Block"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
          value: description,
          reference: "description",
          tagName: "h3",
          classes: ["heading_two"],
          placeholder: "Please provide a description (optional)",
          settings: ["core/bold", "core/link", "core/italic", "core/list"]
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/location")],
        renderAppender: function renderAppender() {
          if (innerBlockCount.length < 4) {
            return /*#__PURE__*/React.createElement(InnerBlocks.ButtonBlockAppender, null);
          } else {
            return false;
          }
        }
      }))];
    },
    save: function save() {
      var title = attributes.title,
          description = attributes.description;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/locations/location-image.jsx":
/*!****************************************************!*\
  !*** ./src/js/blocks/locations/location-image.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ locationImageBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Helpers



function locationImageBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp = wp,
      i18n = _wp.i18n;
  var useSelect = wp.data.useSelect;
  var blockSlug = "location-image";
  var blockTitle = "Location - Image";
  var blockDescription = "A single location image upload.";
  var blockCategory = "media";
  var blockIcon = "format-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: blockTitle,
    description: blockDescription,
    category: blockCategory,
    icon: blockIcon,
    attributes: {
      image_alt: {
        type: "String",
        default: ""
      },
      image_url: {
        type: "String",
        default: ""
      },
      image_id: {
        type: "Number",
        default: 0
      }
    },
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/location")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Location - Image"), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ "./src/js/blocks/logos/logo-container.jsx":
/*!************************************************!*\
  !*** ./src/js/blocks/logos/logo-container.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pgLogoContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function pgLogoContainerBlock() {
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
    copy: {
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
      var copy = attributes.copy,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Logo Parade"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h2',
          settings: [],
          placeholder: 'Logo parade title here (optional)'
        }, {
          reference: 'copy',
          value: copy,
          tagName: 'p',
          classes: ['paragraph'],
          settings: ['core/bold', 'core/link', 'core/italic', 'core/list'],
          placeholder: 'Logo parade copy here (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "col--4"
      }, save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/logo-subsection")]
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
  var blockCategory = "rows";
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
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/logos-subsection")],
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

/***/ "./src/js/blocks/logos/logos-subsection.jsx":
/*!**************************************************!*\
  !*** ./src/js/blocks/logos/logos-subsection.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pgLogoSubsectionBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function pgLogoSubsectionBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "logos-subsection";
  var blockTitle = "Logo Parade Subsection";
  var blockDescription = "Creates a subsection for logos parade.";
  var blockCategory = "containers";
  var blockIcon = "awards"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

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
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/logos-container")],
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
        className: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Logo Parade Subsection"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h3',
          settings: [],
          classes: ['paragraph'],
          placeholder: 'Logo parade subsection title here (optional)'
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
    category: 'meta',
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
  var meta_fields = ['publication_date', 'time_to_read', 'authors', 'series_order'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__["default"])(meta_fields, 'meta');
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/news-meta-block"), {
    title: 'News Meta',
    icon: 'align-full-width',
    category: 'meta',
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var authors = attributes.authors,
          publication_date = attributes.publication_date,
          series_order = attributes.series_order,
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
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: series_order,
        type: "number",
        onChange: function onChange(value) {
          updateAttributeValue('series_order', value);
        },
        label: "Series Order:"
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
    category: 'meta',
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

/***/ "./src/js/blocks/meta/product-meta.jsx":
/*!*********************************************!*\
  !*** ./src/js/blocks/meta/product-meta.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ productMetaBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function productMetaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var TextControl = wp.components.TextControl;
  var meta_fields = ["market", "description", "cta_text", "cta_link"];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(meta_fields, "meta");
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/product-meta-block"), {
    title: "Product Meta",
    icon: "align-full-width",
    category: "meta",
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var market = attributes.market,
          description = attributes.description,
          cta_text = attributes.cta_text,
          cta_link = attributes.cta_link;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [null, /*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Product Meta"), /*#__PURE__*/React.createElement("div", {
        className: "page-settings__controls"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mt-xs-3"
      }, /*#__PURE__*/React.createElement(TextControl, {
        value: market,
        onChange: function onChange(value) {
          updateAttributeValue("market", value);
        },
        label: "Market:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: description,
        onChange: function onChange(value) {
          updateAttributeValue("description", value);
        },
        label: "Description:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: cta_text,
        onChange: function onChange(value) {
          updateAttributeValue("cta_text", value);
        },
        label: "CTA Text:"
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: cta_link,
        onChange: function onChange(value) {
          updateAttributeValue("cta_link", value);
        },
        label: "CTA Link:"
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

/***/ "./src/js/blocks/meta/program-meta.jsx":
/*!*********************************************!*\
  !*** ./src/js/blocks/meta/program-meta.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ programMetaBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
/* harmony import */ var _reusable_custom_video_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-video-upload.jsx */ "./src/js/blocks/reusable/custom-video-upload.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function programMetaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      TextControl = _wp$components.TextControl,
      ToggleControl = _wp$components.ToggleControl;
  var meta_fields = ['applications_open', 'video_id', 'applications_closed_copy', 'hero_video_id', 'hero_video_url', 'hero_video_alt'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(meta_fields, 'meta');
  attributes['applications_open']['type'] = 'Boolean';
  attributes['applications_open']['default'] = false;
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/program-meta-block"), {
    title: 'Program Meta',
    icon: 'align-full-width',
    category: 'meta',
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var applications_open = attributes.applications_open,
          applications_closed_copy = attributes.applications_closed_copy,
          hero_video_id = attributes.hero_video_id,
          hero_video_url = attributes.hero_video_url,
          hero_video_alt = attributes.hero_video_alt;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [null, /*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Program Meta"), /*#__PURE__*/React.createElement("div", {
        className: "page-settings__controls"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mt-xs-3"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Video for header"), /*#__PURE__*/React.createElement(_reusable_custom_video_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      })), /*#__PURE__*/React.createElement("p", null, "Are applications open?"), /*#__PURE__*/React.createElement(ToggleControl, {
        checked: applications_open,
        onChange: function onChange(value) {
          updateAttributeValue('applications_open', value);
        },
        label: "Yes or No?"
      }), !applications_open && /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: '16px'
        }
      }, /*#__PURE__*/React.createElement(TextControl, {
        value: applications_closed_copy,
        onChange: function onChange(value) {
          updateAttributeValue('applications_closed_copy', value);
        },
        label: "Applications Closed Copy:"
      })))))];
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
/* harmony import */ var _reusable_select_authors_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/select-authors.jsx */ "./src/js/blocks/reusable/select-authors.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function publicationMetaBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var TextControl = wp.components.TextControl;
  var meta_fields = ['authors', 'abstract', 'code', 'paper', 'blog', 'publication_date', 'time_to_read', 'citation', 'citation_link'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__["default"])(meta_fields, 'meta');
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/publications-meta-block"), {
    title: 'Publications Meta',
    icon: 'align-full-width',
    category: 'meta',
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
  var meta_fields = ['publication_date', 'time_to_read', 'authors', 'series_order'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_2__["default"])(meta_fields, 'meta');
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/research-blogs-meta-block"), {
    title: 'Research Blogs Meta',
    icon: 'align-full-width',
    category: 'meta',
    supports: {
      multiple: false
    },
    attributes: attributes,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var authors = attributes.authors,
          publication_date = attributes.publication_date,
          series_order = attributes.series_order,
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
      }), /*#__PURE__*/React.createElement(TextControl, {
        value: series_order,
        type: "number",
        onChange: function onChange(value) {
          updateAttributeValue('series_order', value);
        },
        label: "Series Order:"
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
    category: 'meta',
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
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function pageStripGraphicContainer() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var useSelect = wp.data.useSelect;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "page-strip-graphic-container"; // slug for the block

  var blockTitle = "Graphic Page Strip Container";
  var blockDescription = "Component to create page strip graphic container block";
  var blockCategory = "containers";
  var blockIcon = "cover-image"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: "String",
      default: ""
    },
    limit: {
      type: "Number",
      default: 0
    },
    column_amount: {
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
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var innerBlockCount = useSelect(function (select) {
        return select("core/block-editor").getBlock(props.clientId).innerBlocks;
      });
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var column_amount = attributes.column_amount;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      var column_styles = [{
        label: "Default",
        value: "default"
      }, {
        label: "Three",
        value: "three"
      }];
      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Page Strip Graphic Container Block"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Block Settings",
        controls: [{
          type: "select",
          label: "Layout",
          options: column_styles,
          reference: "column_amount",
          value: column_amount
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/page-strip-graphic")],
        renderAppender: function renderAppender() {
          if (innerBlockCount.length < 3) {
            return /*#__PURE__*/React.createElement(InnerBlocks.ButtonBlockAppender, null);
          } else {
            return false;
          }
        }
      }))];
    },
    save: function save() {
      var column_amount = attributes.column_amount;
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
/* harmony export */   "default": function() { return /* binding */ pageStripGraphicBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function pageStripGraphicBlock() {
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
    background_colour: {
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
          background_colour = attributes.background_colour;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      var background_styles = [{
        label: "Default",
        value: "bg-shade-white-400 text-shade-black-400"
      }, {
        label: "Purple",
        value: "bg-primary-purple-400 text-shade-white-400"
      }, {
        label: "Navy",
        value: "bg-primary-navy-400 text-shade-white-400"
      }, {
        label: "Light Blue",
        value: "bg-tint-lightBlue-400 text-shade-white-400"
      }, {
        label: "Light Purple",
        value: "bg-tint-purple-400 text-shade-white-400"
      }];
      return [/*#__PURE__*/React.createElement("section", {
        class: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Graphic Page Strip"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Block Settings",
        controls: [{
          type: "select",
          label: "Background Colour",
          options: background_styles,
          reference: "background_colour",
          value: background_colour
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      }), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          copy = attributes.copy,
          btn_url = attributes.btn_url,
          btn_text = attributes.btn_text,
          image_url = attributes.image_url,
          image_url_mobile = attributes.image_url_mobile,
          background_colour = attributes.background_colour;
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

/***/ "./src/js/blocks/podcast/podcast-block.jsx":
/*!*************************************************!*\
  !*** ./src/js/blocks/podcast/podcast-block.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ podcastBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function podcastBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var useSelect = wp.data.useSelect;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "podcast"; // slug for the block

  var blockTitle = "Create podcast block";
  var blockDescription = "Component to create a podcast block";
  var blockCategory = "common";
  var blockIcon = "format-audio"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: "String",
      default: ""
    },
    author: {
      type: "String",
      default: ""
    },
    link_url: {
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
      var title = attributes.title,
          author = attributes.author,
          link_url = attributes.link_url,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      var innerBlockCount = useSelect(function (select) {
        return select("core/block-editor").getBlock(props.clientId).innerBlocks;
      });
      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Podcast Block"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          classes: ["heading_one"],
          placeholder: "Please provide a title"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: author,
          reference: "author",
          tagName: "h3",
          classes: ["heading_two"],
          placeholder: "Please provide a author"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: link_url,
          reference: "link_url",
          tagName: "h3",
          classes: ["heading_two"],
          placeholder: "Please provide a podcast audio link"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      }))];
    },
    save: function save() {
      var title = attributes.title,
          author = attributes.author,
          link_url = attributes.link_url,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt;
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
  var category = "containers";
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

/***/ "./src/js/blocks/products/product-container.jsx":
/*!******************************************************!*\
  !*** ./src/js/blocks/products/product-container.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ productContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function productContainerBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "product-container";
  var blockTitle = "Products List Container";
  var blockDescription = "Creates a container for a products list.";
  var blockCategory = "containers";
  var blockIcon = "editor-justify"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: {
      title: {
        type: "String",
        default: ""
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
      }, "Products Container"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h2',
          classes: ['h2'],
          settings: [],
          placeholder: 'Provide a title (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-product")]
      }))];
    },
    save: function save() {
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
  var blockCategory = "copy";
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
  var blockCategory = "containers";
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
  }, {
    icon: icon,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/gallery-container")],
    slug: 'team-member',
    single: 'Team Members'
  }, {
    icon: 'admin-tools',
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/product-container")],
    slug: 'product',
    single: 'Product'
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
  }, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, controls.map(function (control) {
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
  }))))));
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

  var stringAttrs = ["post"];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_1__["default"])(stringAttrs);
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/select-").concat(slug), {
    title: "Select ".concat(single),
    description: "Allows user to select a post",
    icon: icon,
    category: "selects",
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
  var blockCategory = "sections";
  var blockIcon = "welcome-add-page"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
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
          settings: ["core/bold", "core/link", "core/italic", "core/code"],
          placeholder: "Please provide a title"
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/custom-subsection-block"), "core/table", "core/button", "core/audio", "core/video", "core/list", "core/quote", "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/tag-cloud-container-block"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/paragraph"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-two"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-three"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-four"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/custom-image"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/blockquote"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/publications-container"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/image-text"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/icon-list-container-block"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/compare-code"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/code"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/jobs-container"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/podcast"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/compare-figures"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/tabbed-content-container-block")]
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
  var blockCategory = "sections";
  var blockIcon = "admin-page"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
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
          label: "Title",
          value: title,
          reference: "title",
          tagName: "h3",
          settings: ["core/bold", "core/link", "core/italic", "core/code"],
          placeholder: "Please provide a title"
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["core/table", "core/button", "core/audio", "core/video", "core/list", "core/quote", "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/tag-cloud-container-block"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/paragraph"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-two"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-three"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/heading-four"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/custom-image"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/blockquote"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/publications-container"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/image-text"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/icon-list-container-block"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/compare-code"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/code"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/jobs-container"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/compare-figures"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/podcast"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/tabbed-content-container-block")]
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
  var blockCategory = "rows";
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

/***/ "./src/js/blocks/slider/testimonial-slide.jsx":
/*!****************************************************!*\
  !*** ./src/js/blocks/slider/testimonial-slide.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ testimonialSlideBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function testimonialSlideBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "testimonial";
  var blockTitle = "Testimonial";
  var blockDescription = "Creates a Testimonial.";
  var blockCategory = "rows";
  var blockIcon = "format-quote"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/testimonial-carousel")],
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

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, blockTitle), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ "./src/js/blocks/slider/testimonial-slider.jsx":
/*!*****************************************************!*\
  !*** ./src/js/blocks/slider/testimonial-slider.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ testimonialSliderBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
/* harmony import */ var _helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper-functions/default-attrs */ "./src/js/blocks/helper-functions/default-attrs.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function testimonialSliderBlock() {
  var registerBlockType = wp.blocks.registerBlockType;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "testimonial-carousel";
  var blockTitle = "Testimonial Carousel";
  var blockDescription = "Creates a testimonial carousel.";
  var blockCategory = "carousels";
  var blockIcon = "slides"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var stringAttrs = ['title'];
  var attributes = (0,_helper_functions_default_attrs__WEBPACK_IMPORTED_MODULE_3__["default"])(stringAttrs);
  registerBlockType("".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/").concat(blockSlug), {
    title: i18n.__(blockTitle),
    description: i18n.__(blockDescription),
    category: blockCategory,
    icon: blockIcon,
    attributes: {
      title: {
        type: 'String',
        default: ''
      },
      display_style: {
        type: 'String',
        default: 'light'
      }
    },
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var display_style = attributes.display_style,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        className: "custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Testimonial Slider"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Block Settings",
        controls: [{
          type: 'radio',
          label: 'Style',
          options: [{
            value: 'dark',
            label: 'Dark'
          }, {
            value: 'light',
            label: 'Light'
          }],
          reference: 'display_style',
          value: display_style
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          reference: 'title',
          value: title,
          tagName: 'h2',
          classes: ['h2'],
          settings: [],
          placeholder: 'Provide a title (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/testimonial")]
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

/***/ "./src/js/blocks/stats/statistics-block.jsx":
/*!**************************************************!*\
  !*** ./src/js/blocks/stats/statistics-block.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ statisticsBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable


function statisticsBlock() {
  /**
   * GUTENBERG BLOCK - Statistics
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "statistics";
  var title = "Statistics";
  var description = "A Statistics Page Strip";
  var category = "rows";
  var icon = "align-full-width"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    stat: {
      type: "String",
      default: ""
    },
    copy: {
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
    parent: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/statistics-container")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var copy = attributes.copy,
          stat = attributes.stat;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("section", {
        class: "custom-child"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Statistics Column"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: stat,
          reference: "stat",
          tagName: "p",
          classes: ["paragraph"],
          settings: ["core/bold", "core/link", "core/italic"],
          placeholder: "Please provide a stat"
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
          settings: ["core/bold", "core/link", "core/italic"],
          placeholder: "Please provide copy (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var copy = attributes.copy,
          stat = attributes.stat;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/stats/statistics-container-block.jsx":
/*!************************************************************!*\
  !*** ./src/js/blocks/stats/statistics-container-block.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ statisticsContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function statisticsContainerBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var useSelect = wp.data.useSelect;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "statistics-container"; // slug for the block

  var blockTitle = "Create statistics container block";
  var blockDescription = "Component to create a statistics container block";
  var blockCategory = "containers";
  var blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: "String",
      default: ""
    },
    description: {
      type: "String",
      default: ""
    },
    bgColour: {
      type: "String",
      default: "default"
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
      var title = attributes.title,
          description = attributes.description,
          bgColour = attributes.bgColour;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      var bgStyles = [{
        label: "Default",
        value: "default"
      }, {
        label: "Purple",
        value: "purple"
      }];
      var innerBlockCount = useSelect(function (select) {
        return select("core/block-editor").getBlock(props.clientId).innerBlocks;
      });
      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Statistics Container Block"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
          value: description,
          reference: "description",
          tagName: "h3",
          classes: ["heading_two"],
          placeholder: "Please provide a description (optional)",
          settings: ["core/bold", "core/link", "core/italic", "core/list"]
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Block Settings",
        controls: [{
          type: "select",
          label: "Background Colour",
          options: bgStyles,
          reference: "bgColour",
          value: bgColour
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/statistics")],
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
      var title = attributes.title,
          description = attributes.description,
          bgColour = attributes.bgColour;
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
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function tabbedContentContainerBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "tabbed-content-container-block"; // slug for the block

  var blockTitle = "Tabbed Content Container";
  var blockDescription = "Component to create tabbed content container block";
  var blockCategory = "containers";
  var blockIcon = "block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    copy: {
      type: 'String',
      default: ''
    },
    cta_one_text: {
      type: "String",
      default: ""
    },
    cta_one_link: {
      type: "String",
      default: ""
    },
    cta_two_text: {
      type: "String",
      default: ""
    },
    cta_two_link: {
      type: "String",
      default: ""
    },
    display_style: {
      type: "String",
      default: "default"
    },
    image_url: {
      type: 'String',
      default: ''
    },
    image_id: {
      type: 'Number',
      default: 0
    },
    image_alt: {
      type: "String",
      default: ""
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
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var copy = attributes.copy,
          cta_one_text = attributes.cta_one_text,
          cta_one_link = attributes.cta_one_link,
          cta_two_text = attributes.cta_two_text,
          cta_two_link = attributes.cta_two_link,
          display_style = attributes.display_style,
          image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "tabbed-content-container__block custom-section"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Tabbed Content Container"), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Block Settings",
        controls: [{
          type: 'radio',
          label: 'Display Style',
          value: display_style,
          reference: 'display_style',
          options: [{
            label: "Default",
            value: "default"
          }, {
            label: "Background Image",
            value: "background-image"
          }]
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), display_style === "background-image" ? /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: [{
          value: image_url,
          reference: 'image_url',
          altValue: image_alt,
          altReference: 'image_alt',
          idValue: image_id,
          idReference: 'image_id',
          buttonText: 'Add a background image (optional)'
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }) : null, /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          placeholder: "Please provide a title (optional)"
        }, {
          value: copy,
          reference: "copy",
          tagName: "p",
          placeholder: "Please provide copy (optional)"
        }, {
          value: cta_one_text,
          reference: "cta_one_text",
          tagName: "p",
          placeholder: "Please provide text for the first CTA (optional)"
        }, {
          value: cta_one_link,
          reference: "cta_one_link",
          tagName: "p",
          placeholder: "Please provide a link for the first CTA (optional)"
        }, {
          value: cta_two_text,
          reference: "cta_two_text",
          tagName: "p",
          placeholder: "Please provide text for the second CTA (optional)"
        }, {
          value: cta_two_link,
          reference: "cta_two_link",
          tagName: "p",
          placeholder: "Please provide a link for the second CTA (optional)"
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
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var blockSlug = "tabbed-content-panel-block"; // slug for the block

  var blockTitle = "Tabbed content panel block";
  var blockDescription = "Component to create tabbed content panel block";
  var blockCategory = "rows";
  var blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: "String",
      default: ""
    },
    content: {
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
        class: "tabbed-content-panel__block custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Tabbed Content Panel"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "h3",
          placeholder: "Please provide a title"
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/paragraph"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/icon-list-container-block"), "".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/accordion"), "core/video", "core/embed-youtube"]
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
  var blockCategory = "containers";
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
  var blockCategory = "rows";
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

/***/ "./src/js/blocks/text-2-up-block.jsx":
/*!*******************************************!*\
  !*** ./src/js/blocks/text-2-up-block.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ text2UpBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants.js */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Helpers
 // Reusable


function text2UpBlock() {
  /**
   * GUTENBERG BLOCK - TEXT 2 UP
   */
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var slug = "text-2-up";
  var title = "Text 2 Up";
  var description = "A Text 2 Up Page Strip";
  var category = "rows";
  var icon = "align-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    copy: {
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
    parent: ["".concat(_helper_functions_constants_js__WEBPACK_IMPORTED_MODULE_0__.namespace, "/text-2-up-container")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var copy = attributes.copy;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("section", {
        class: "child-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Text 2 Up Column"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: copy,
          reference: "copy",
          tagName: "p",
          classes: ["paragraph"],
          settings: ["core/bold", "core/link", "core/italic", "core/list", "core/paragraph"],
          placeholder: "Please provide copy (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var copy = attributes.copy;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/text-2-up-container-block.jsx":
/*!*****************************************************!*\
  !*** ./src/js/blocks/text-2-up-container-block.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ text2UpContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
/* harmony import */ var _reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/block-custom-settings.jsx */ "./src/js/blocks/reusable/block-custom-settings.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function text2UpContainerBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var useSelect = wp.data.useSelect;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "text-2-up-container"; // slug for the block

  var blockTitle = "Text 2 Up Container";
  var blockDescription = "Component to create a text 2 up container block";
  var blockCategory = "containers";
  var blockIcon = "align-left"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    title: {
      type: "String",
      default: ""
    },
    subtitle: {
      type: "String",
      default: ""
    },
    bgColour: {
      type: "String",
      default: "default"
    },
    colAmount: {
      type: "String",
      default: "default"
    },
    cta_text: {
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
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setAttributes = props.setAttributes,
          attributes = props.attributes;
      var title = attributes.title,
          subtitle = attributes.subtitle,
          bgColour = attributes.bgColour,
          colAmount = attributes.colAmount,
          cta_text = attributes.cta_text;
      var bgStyles = [{
        label: "Default",
        value: "bg-shade-white-400 text-shade-black-400"
      }, {
        label: "Purple",
        value: "bg-primary-purple-400 text-shade-white-400"
      }, {
        label: "Navy",
        value: "bg-primary-navy-400 text-shade-white-400"
      }, {
        label: "Light Blue",
        value: "bg-tint-lightBlue-400 text-shade-white-400"
      }, {
        label: "Light Purple",
        value: "bg-tint-purple-400 text-shade-white-400"
      }];
      var colStyles = [{
        label: "Default",
        value: "default"
      }, {
        label: "Two",
        value: "two"
      }];

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      var innerBlockCount = useSelect(function (select) {
        return select("core/block-editor").getBlock(props.clientId).innerBlocks;
      });
      return [/*#__PURE__*/React.createElement("div", {
        class: "custom-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "block-title"
      }, "Text 2 Up Container Block"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
          value: subtitle,
          reference: "subtitle",
          tagName: "h3",
          classes: ["heading_two"],
          placeholder: "Please provide a subtitle (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(_reusable_block_custom_settings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Block Settings",
        controls: [{
          type: "select",
          label: "Background Colour",
          options: bgStyles,
          reference: "bgColour",
          value: bgColour
        }, {
          type: "select",
          label: "1 or 2 Columns of Copy",
          options: colStyles,
          reference: "colAmount",
          value: colAmount
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/text-2-up")],
        renderAppender: function renderAppender() {
          if (innerBlockCount.length < 2) {
            return /*#__PURE__*/React.createElement(InnerBlocks.ButtonBlockAppender, null);
          } else {
            return false;
          }
        }
      }), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: cta_text,
          reference: "cta_text",
          tagName: "p",
          classes: ["heading_three"],
          placeholder: "Please provide CTA anchor text (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }))];
    },
    save: function save() {
      var title = attributes.title,
          subtite = attributes.subtite,
          bgColour = attributes.bgColour,
          colAmount = attributes.colAmount,
          cta_text = attributes.cta_text;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/video-tabbed-content/video-tabbed-content-container.jsx":
/*!*******************************************************************************!*\
  !*** ./src/js/blocks/video-tabbed-content/video-tabbed-content-container.jsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ videoTabbedContentContainerBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-image-upload.jsx */ "./src/js/blocks/reusable/custom-image-upload.jsx");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function videoTabbedContentContainerBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var _wp = wp,
      i18n = _wp.i18n;
  var blockSlug = "video-tabbed-content-container-block"; // slug for the block

  var blockTitle = "Video Tabbed Content Container";
  var blockDescription = "Component to create a video tabbed content container block";
  var blockCategory = "containers";
  var blockIcon = "block-default"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    image_url: {
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
    title: {
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
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          title = attributes.title;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "tabbed-content-container__block custom-section"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, " Video Tabbed Content Container "), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          placeholder: "Please provide a title (optional)"
        }]
      }), /*#__PURE__*/React.createElement(_reusable_custom_image_upload_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        components: [{
          value: image_url,
          reference: "image_url",
          altValue: image_alt,
          altReference: "image_alt",
          idValue: image_id,
          idReference: "image_id",
          buttonText: "Add a background image (optional)"
        }],
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        }
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/video-tabbed-content-panel-block")]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var image_id = attributes.image_id,
          image_url = attributes.image_url,
          image_alt = attributes.image_alt,
          title = attributes.title;
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }
  });
}

/***/ }),

/***/ "./src/js/blocks/video-tabbed-content/video-tabbed-content-panel.jsx":
/*!***************************************************************************!*\
  !*** ./src/js/blocks/video-tabbed-content/video-tabbed-content-panel.jsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ videoTabbedContentPanelBlock; }
/* harmony export */ });
/* harmony import */ var _helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/constants */ "./src/js/blocks/helper-functions/constants.js");
/* harmony import */ var _reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/custom-richtext-component.jsx */ "./src/js/blocks/reusable/custom-richtext-component.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import CustomImageUpload from "../reusable/custom-image-upload.jsx";

function videoTabbedContentPanelBlock() {
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      createBlock = _wp$blocks.createBlock;
  var _wp = wp,
      i18n = _wp.i18n;
  var InnerBlocks = wp.blockEditor.InnerBlocks;
  var blockSlug = "video-tabbed-content-panel-block"; // slug for the block

  var blockTitle = "Video tabbed content panel block";
  var blockDescription = "Component to create a video tabbed content panel block";
  var blockCategory = "rows";
  var blockIcon = "columns"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

  var attributes = {
    copy: {
      type: "String",
      default: ""
    },
    cta_one_text: {
      type: "String",
      default: ""
    },
    cta_one_link: {
      type: "String",
      default: ""
    },
    cta_two_text: {
      type: "String",
      default: ""
    },
    cta_two_link: {
      type: "String",
      default: ""
    },
    title: {
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
    parent: ["".concat(_helper_functions_constants__WEBPACK_IMPORTED_MODULE_0__.namespace, "/video-tabbed-content-container-block")],
    edit: function edit(props) {
      var editor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var title = attributes.title,
          cta_one_link = attributes.cta_one_link,
          cta_one_text = attributes.cta_one_text,
          cta_two_link = attributes.cta_two_link,
          cta_two_text = attributes.cta_two_text,
          copy = attributes.copy;

      function updateAttributeValue(attribute, value) {
        setAttributes(_defineProperty({}, attribute, value));
      }

      return [/*#__PURE__*/React.createElement("div", {
        class: "tabbed-content-panel__block custom-container"
      }, /*#__PURE__*/React.createElement("p", {
        class: "block-title"
      }, "Video Tabbed Content Panel"), /*#__PURE__*/React.createElement(_reusable_custom_richtext_component_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(attribute, change) {
          updateAttributeValue(attribute, change);
        },
        components: [{
          value: title,
          reference: "title",
          tagName: "h2",
          placeholder: "Please provide a title (optional)"
        }, {
          value: copy,
          reference: "copy",
          tagName: "p",
          placeholder: "Please provide copy (optional)"
        }, {
          value: cta_one_text,
          reference: "cta_one_text",
          tagName: "p",
          placeholder: "Please provide text for the first CTA (optional)"
        }, {
          value: cta_one_link,
          reference: "cta_one_link",
          tagName: "p",
          placeholder: "Please provide a link for the first CTA (optional)"
        }, {
          value: cta_two_text,
          reference: "cta_two_text",
          tagName: "p",
          placeholder: "Please provide text for the second CTA (optional)"
        }, {
          value: cta_two_link,
          reference: "cta_two_link",
          tagName: "p",
          placeholder: "Please provide a link for the second CTA (optional)"
        }]
      }), save ? /*#__PURE__*/React.createElement(InnerBlocks.Content, null) : /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ["core/video", "core/embed-youtube"]
      }))];
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var title = attributes.title,
          cta_one_link = attributes.cta_one_link,
          cta_one_text = attributes.cta_one_text,
          cta_two_link = attributes.cta_two_link,
          cta_two_text = attributes.cta_two_text,
          copy = attributes.copy;
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
/* harmony import */ var _blocks_meta_product_meta_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/meta/product-meta.jsx */ "./src/js/blocks/meta/product-meta.jsx");
/* harmony import */ var _blocks_meta_program_meta_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/meta/program-meta.jsx */ "./src/js/blocks/meta/program-meta.jsx");
/* harmony import */ var _blocks_text_2_up_block_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/text-2-up-block.jsx */ "./src/js/blocks/text-2-up-block.jsx");
/* harmony import */ var _blocks_text_2_up_container_block_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/text-2-up-container-block.jsx */ "./src/js/blocks/text-2-up-container-block.jsx");
/* harmony import */ var _blocks_image_block_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/image-block.jsx */ "./src/js/blocks/image-block.jsx");
/* harmony import */ var _blocks_accordion_accordion_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/accordion/accordion.jsx */ "./src/js/blocks/accordion/accordion.jsx");
/* harmony import */ var _blocks_accordion_accordion_row_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/accordion/accordion-row.jsx */ "./src/js/blocks/accordion/accordion-row.jsx");
/* harmony import */ var _blocks_blockquote_blockquote_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/blockquote/blockquote.jsx */ "./src/js/blocks/blockquote/blockquote.jsx");
/* harmony import */ var _blocks_callouts_callout_container_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/callouts/callout-container.jsx */ "./src/js/blocks/callouts/callout-container.jsx");
/* harmony import */ var _blocks_callouts_callout_column_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/callouts/callout-column.jsx */ "./src/js/blocks/callouts/callout-column.jsx");
/* harmony import */ var _blocks_code_compare_code_block_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/code/compare-code-block.jsx */ "./src/js/blocks/code/compare-code-block.jsx");
/* harmony import */ var _blocks_code_code_block_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/code/code-block.jsx */ "./src/js/blocks/code/code-block.jsx");
/* harmony import */ var _blocks_content_cards_content_card_container_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/content-cards/content-card-container.jsx */ "./src/js/blocks/content-cards/content-card-container.jsx");
/* harmony import */ var _blocks_content_cards_content_card_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blocks/content-cards/content-card.jsx */ "./src/js/blocks/content-cards/content-card.jsx");
/* harmony import */ var _blocks_fellowships_fellowship_container_block_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blocks/fellowships/fellowship-container-block.jsx */ "./src/js/blocks/fellowships/fellowship-container-block.jsx");
/* harmony import */ var _blocks_fellowships_fellowship_block_jsx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blocks/fellowships/fellowship-block.jsx */ "./src/js/blocks/fellowships/fellowship-block.jsx");
/* harmony import */ var _blocks_figures_compare_figures_block_jsx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./blocks/figures/compare-figures-block.jsx */ "./src/js/blocks/figures/compare-figures-block.jsx");
/* harmony import */ var _blocks_gallery_gallery_container_block_jsx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./blocks/gallery/gallery-container-block.jsx */ "./src/js/blocks/gallery/gallery-container-block.jsx");
/* harmony import */ var _blocks_greenhouse_jobs_block_jsx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blocks/greenhouse/jobs-block.jsx */ "./src/js/blocks/greenhouse/jobs-block.jsx");
/* harmony import */ var _blocks_greenhouse_select_job_block_jsx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./blocks/greenhouse/select-job-block.jsx */ "./src/js/blocks/greenhouse/select-job-block.jsx");
/* harmony import */ var _blocks_greenhouse_jobs_list_jsx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./blocks/greenhouse/jobs-list.jsx */ "./src/js/blocks/greenhouse/jobs-list.jsx");
/* harmony import */ var _blocks_greenhouse_job_highlight_block_jsx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blocks/greenhouse/job-highlight-block.jsx */ "./src/js/blocks/greenhouse/job-highlight-block.jsx");
/* harmony import */ var _blocks_locations_location_container_block_jsx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./blocks/locations/location-container-block.jsx */ "./src/js/blocks/locations/location-container-block.jsx");
/* harmony import */ var _blocks_locations_location_block_jsx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./blocks/locations/location-block.jsx */ "./src/js/blocks/locations/location-block.jsx");
/* harmony import */ var _blocks_locations_location_image_jsx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./blocks/locations/location-image.jsx */ "./src/js/blocks/locations/location-image.jsx");
/* harmony import */ var _blocks_icon_list_icon_list_container_block_jsx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./blocks/icon-list/icon-list-container-block.jsx */ "./src/js/blocks/icon-list/icon-list-container-block.jsx");
/* harmony import */ var _blocks_icon_list_icon_list_item_block_jsx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./blocks/icon-list/icon-list-item-block.jsx */ "./src/js/blocks/icon-list/icon-list-item-block.jsx");
/* harmony import */ var _blocks_image_text_strip_block_jsx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./blocks/image-text-strip-block.jsx */ "./src/js/blocks/image-text-strip-block.jsx");
/* harmony import */ var _blocks_logos_logo_container_jsx__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./blocks/logos/logo-container.jsx */ "./src/js/blocks/logos/logo-container.jsx");
/* harmony import */ var _blocks_logos_logos_subsection_jsx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./blocks/logos/logos-subsection.jsx */ "./src/js/blocks/logos/logos-subsection.jsx");
/* harmony import */ var _blocks_logos_logo_jsx__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./blocks/logos/logo.jsx */ "./src/js/blocks/logos/logo.jsx");
/* harmony import */ var _blocks_page_strips_page_strip_jsx__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./blocks/page-strips/page-strip.jsx */ "./src/js/blocks/page-strips/page-strip.jsx");
/* harmony import */ var _blocks_page_strips_page_strip_graphic_jsx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./blocks/page-strips/page-strip-graphic.jsx */ "./src/js/blocks/page-strips/page-strip-graphic.jsx");
/* harmony import */ var _blocks_page_strips_page_strip_graphic_container_jsx__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./blocks/page-strips/page-strip-graphic-container.jsx */ "./src/js/blocks/page-strips/page-strip-graphic-container.jsx");
/* harmony import */ var _blocks_posts_featured_posts_container_jsx__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./blocks/posts/featured-posts-container.jsx */ "./src/js/blocks/posts/featured-posts-container.jsx");
/* harmony import */ var _blocks_products_product_container_jsx__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./blocks/products/product-container.jsx */ "./src/js/blocks/products/product-container.jsx");
/* harmony import */ var _blocks_publications_publications_container_jsx__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./blocks/publications/publications-container.jsx */ "./src/js/blocks/publications/publications-container.jsx");
/* harmony import */ var _blocks_publications_select_posts_blocks_jsx__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./blocks/publications/select-posts-blocks.jsx */ "./src/js/blocks/publications/select-posts-blocks.jsx");
/* harmony import */ var _blocks_publications_bibtex_block_jsx__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./blocks/publications/bibtex-block.jsx */ "./src/js/blocks/publications/bibtex-block.jsx");
/* harmony import */ var _blocks_sidebar_table_of_contents_custom_section_blok_jsx__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./blocks/sidebar-table-of-contents/custom-section-blok.jsx */ "./src/js/blocks/sidebar-table-of-contents/custom-section-blok.jsx");
/* harmony import */ var _blocks_sidebar_table_of_contents_custom_subsection_blok_jsx__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./blocks/sidebar-table-of-contents/custom-subsection-blok.jsx */ "./src/js/blocks/sidebar-table-of-contents/custom-subsection-blok.jsx");
/* harmony import */ var _blocks_slider_slider_container_jsx__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./blocks/slider/slider-container.jsx */ "./src/js/blocks/slider/slider-container.jsx");
/* harmony import */ var _blocks_slider_news_slide_jsx__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./blocks/slider/news-slide.jsx */ "./src/js/blocks/slider/news-slide.jsx");
/* harmony import */ var _blocks_slider_testimonial_slider_jsx__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./blocks/slider/testimonial-slider.jsx */ "./src/js/blocks/slider/testimonial-slider.jsx");
/* harmony import */ var _blocks_slider_testimonial_slide_jsx__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./blocks/slider/testimonial-slide.jsx */ "./src/js/blocks/slider/testimonial-slide.jsx");
/* harmony import */ var _blocks_stats_statistics_block_jsx__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./blocks/stats/statistics-block.jsx */ "./src/js/blocks/stats/statistics-block.jsx");
/* harmony import */ var _blocks_stats_statistics_container_block_jsx__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./blocks/stats/statistics-container-block.jsx */ "./src/js/blocks/stats/statistics-container-block.jsx");
/* harmony import */ var _blocks_tabbed_content_tabbed_content_container_jsx__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./blocks/tabbed-content/tabbed-content-container.jsx */ "./src/js/blocks/tabbed-content/tabbed-content-container.jsx");
/* harmony import */ var _blocks_tabbed_content_tabbed_content_panel_jsx__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./blocks/tabbed-content/tabbed-content-panel.jsx */ "./src/js/blocks/tabbed-content/tabbed-content-panel.jsx");
/* harmony import */ var _blocks_video_tabbed_content_video_tabbed_content_container_jsx__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./blocks/video-tabbed-content/video-tabbed-content-container.jsx */ "./src/js/blocks/video-tabbed-content/video-tabbed-content-container.jsx");
/* harmony import */ var _blocks_video_tabbed_content_video_tabbed_content_panel_jsx__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./blocks/video-tabbed-content/video-tabbed-content-panel.jsx */ "./src/js/blocks/video-tabbed-content/video-tabbed-content-panel.jsx");
/* harmony import */ var _blocks_tag_cloud_tag_cloud_container_block_jsx__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./blocks/tag-cloud/tag-cloud-container-block.jsx */ "./src/js/blocks/tag-cloud/tag-cloud-container-block.jsx");
/* harmony import */ var _blocks_tag_cloud_tag_cloud_item_block_jsx__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./blocks/tag-cloud/tag-cloud-item-block.jsx */ "./src/js/blocks/tag-cloud/tag-cloud-item-block.jsx");
/* harmony import */ var _blocks_podcast_podcast_block_jsx__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./blocks/podcast/podcast-block.jsx */ "./src/js/blocks/podcast/podcast-block.jsx");
// import customButtonIcons from './blocks/core-extends/button-icons';

 // Meta








 // Text 2 Up Blocks


 // Page Strips

 // Accordion Blocks


 // Block Quote

 // Callout Columns


 // Code


 // Content Columns


 // Fellowships


 // Figures

 // Gallery

 // Greenhouse Blocks




 // Locations Blocks



 // Icon List Contents Blocks


 // Image & Text Strip Block

 // Logo Blocks



 // Page Strips



 // Posts

 // Products

 // Publications



 // Sidebar Table Of Contents Blocks


 // Slider Blocks




 // Statisitcs Blocks


 // Tabbed Content Blocks


 // Video Tabbed Content Blocks


 // Tag Cloud Content Blocks


 // Podcast Block

 // Core Extends Blocks

(0,_blocks_core_extends_video_embed_poster_jsx__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_blocks_copy_copy_blocks_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Init meta blocks

(0,_blocks_meta_page_meta_jsx__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_blocks_meta_research_blogs_meta_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_blocks_meta_news_meta_jsx__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_blocks_meta_team_member_meta_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_blocks_meta_author_meta_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_blocks_meta_publications_meta_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])();
(0,_blocks_meta_product_meta_jsx__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_blocks_meta_program_meta_jsx__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Page Strips

(0,_blocks_page_strips_page_strip_jsx__WEBPACK_IMPORTED_MODULE_39__["default"])();
(0,_blocks_image_block_jsx__WEBPACK_IMPORTED_MODULE_12__["default"])();
(0,_blocks_page_strips_page_strip_graphic_jsx__WEBPACK_IMPORTED_MODULE_40__["default"])();
(0,_blocks_page_strips_page_strip_graphic_container_jsx__WEBPACK_IMPORTED_MODULE_41__["default"])(); // Accordion Blocks

(0,_blocks_accordion_accordion_jsx__WEBPACK_IMPORTED_MODULE_13__["default"])();
(0,_blocks_accordion_accordion_row_jsx__WEBPACK_IMPORTED_MODULE_14__["default"])(); // Block Quote

(0,_blocks_blockquote_blockquote_jsx__WEBPACK_IMPORTED_MODULE_15__["default"])(); // Callout Columns

(0,_blocks_callouts_callout_container_jsx__WEBPACK_IMPORTED_MODULE_16__["default"])();
(0,_blocks_callouts_callout_column_jsx__WEBPACK_IMPORTED_MODULE_17__["default"])(); // Content Cards

(0,_blocks_content_cards_content_card_container_jsx__WEBPACK_IMPORTED_MODULE_20__["default"])();
(0,_blocks_content_cards_content_card_jsx__WEBPACK_IMPORTED_MODULE_21__["default"])(); // Code

(0,_blocks_code_compare_code_block_jsx__WEBPACK_IMPORTED_MODULE_18__["default"])();
(0,_blocks_code_code_block_jsx__WEBPACK_IMPORTED_MODULE_19__["default"])(); // Fellowship

(0,_blocks_fellowships_fellowship_block_jsx__WEBPACK_IMPORTED_MODULE_23__["default"])();
(0,_blocks_fellowships_fellowship_container_block_jsx__WEBPACK_IMPORTED_MODULE_22__["default"])(); // Figures

(0,_blocks_figures_compare_figures_block_jsx__WEBPACK_IMPORTED_MODULE_24__["default"])(); // Gallery

(0,_blocks_gallery_gallery_container_block_jsx__WEBPACK_IMPORTED_MODULE_25__["default"])(); // Logo Blocks

(0,_blocks_logos_logo_container_jsx__WEBPACK_IMPORTED_MODULE_36__["default"])();
(0,_blocks_logos_logos_subsection_jsx__WEBPACK_IMPORTED_MODULE_37__["default"])();
(0,_blocks_logos_logo_jsx__WEBPACK_IMPORTED_MODULE_38__["default"])(); // Publications

(0,_blocks_publications_publications_container_jsx__WEBPACK_IMPORTED_MODULE_44__["default"])();
(0,_blocks_publications_select_posts_blocks_jsx__WEBPACK_IMPORTED_MODULE_45__["default"])();
(0,_blocks_publications_bibtex_block_jsx__WEBPACK_IMPORTED_MODULE_46__["default"])(); // Posts

(0,_blocks_posts_featured_posts_container_jsx__WEBPACK_IMPORTED_MODULE_42__["default"])(); // Products

(0,_blocks_products_product_container_jsx__WEBPACK_IMPORTED_MODULE_43__["default"])(); // Slide Blocks

(0,_blocks_slider_slider_container_jsx__WEBPACK_IMPORTED_MODULE_49__["default"])();
(0,_blocks_slider_news_slide_jsx__WEBPACK_IMPORTED_MODULE_50__["default"])();
(0,_blocks_slider_testimonial_slider_jsx__WEBPACK_IMPORTED_MODULE_51__["default"])();
(0,_blocks_slider_testimonial_slide_jsx__WEBPACK_IMPORTED_MODULE_52__["default"])(); // Greenhouse Blocks

(0,_blocks_greenhouse_jobs_block_jsx__WEBPACK_IMPORTED_MODULE_26__["default"])();
(0,_blocks_greenhouse_select_job_block_jsx__WEBPACK_IMPORTED_MODULE_27__["default"])();
(0,_blocks_greenhouse_jobs_list_jsx__WEBPACK_IMPORTED_MODULE_28__["default"])();
(0,_blocks_greenhouse_job_highlight_block_jsx__WEBPACK_IMPORTED_MODULE_29__["default"])(); // Sidebar Table Of Contents Blocks

(0,_blocks_sidebar_table_of_contents_custom_section_blok_jsx__WEBPACK_IMPORTED_MODULE_47__["default"])();
(0,_blocks_sidebar_table_of_contents_custom_subsection_blok_jsx__WEBPACK_IMPORTED_MODULE_48__["default"])(); // Icon List Blocks

(0,_blocks_icon_list_icon_list_container_block_jsx__WEBPACK_IMPORTED_MODULE_33__["default"])();
(0,_blocks_icon_list_icon_list_item_block_jsx__WEBPACK_IMPORTED_MODULE_34__["default"])(); // Tabbed Content Blocks

(0,_blocks_tabbed_content_tabbed_content_container_jsx__WEBPACK_IMPORTED_MODULE_55__["default"])();
(0,_blocks_tabbed_content_tabbed_content_panel_jsx__WEBPACK_IMPORTED_MODULE_56__["default"])(); // Video Tabbed Content Blocks

(0,_blocks_video_tabbed_content_video_tabbed_content_container_jsx__WEBPACK_IMPORTED_MODULE_57__["default"])();
(0,_blocks_video_tabbed_content_video_tabbed_content_panel_jsx__WEBPACK_IMPORTED_MODULE_58__["default"])(); // Tag Cloud Content Blocks

(0,_blocks_tag_cloud_tag_cloud_container_block_jsx__WEBPACK_IMPORTED_MODULE_59__["default"])();
(0,_blocks_tag_cloud_tag_cloud_item_block_jsx__WEBPACK_IMPORTED_MODULE_60__["default"])(); // Text 2 Up Blocks

(0,_blocks_text_2_up_container_block_jsx__WEBPACK_IMPORTED_MODULE_11__["default"])();
(0,_blocks_text_2_up_block_jsx__WEBPACK_IMPORTED_MODULE_10__["default"])(); // Image & Text Strip Block

(0,_blocks_image_text_strip_block_jsx__WEBPACK_IMPORTED_MODULE_35__["default"])(); // Statistics Content Blocks

(0,_blocks_stats_statistics_container_block_jsx__WEBPACK_IMPORTED_MODULE_54__["default"])();
(0,_blocks_stats_statistics_block_jsx__WEBPACK_IMPORTED_MODULE_53__["default"])(); // Locations Blocks

(0,_blocks_locations_location_container_block_jsx__WEBPACK_IMPORTED_MODULE_30__["default"])();
(0,_blocks_locations_location_block_jsx__WEBPACK_IMPORTED_MODULE_31__["default"])();
(0,_blocks_locations_location_image_jsx__WEBPACK_IMPORTED_MODULE_32__["default"])(); // Podcast Block

(0,_blocks_podcast_podcast_block_jsx__WEBPACK_IMPORTED_MODULE_61__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=gutenberg.js.map