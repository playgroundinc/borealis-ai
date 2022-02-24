/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/js/scripts/mathjax.js ***!
  \***********************************/
MathJax = {
  loader: {
    load: ['[tex]/textmacros', '[tex]/bbox']
  },
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    processEscapes: true,
    packages: {
      '[+]': ['textmacros']
    },
    textmacros: {
      packages: {
        '[+]': ['bbox']
      }
    }
  }
};
/******/ })()
;
//# sourceMappingURL=mathjax.js.map