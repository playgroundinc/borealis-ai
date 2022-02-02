/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/js/scripts/blogShare.js ***!
  \*************************************/
function blogShare() {
  const btn = document.getElementById('blog-share');
  const modal = document.getElementById('share-modal');

  const toggleShareModal = () => {
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
    }
  };

  btn.addEventListener('click', toggleShareModal);
}

blogShare();
/******/ })()
;
//# sourceMappingURL=blogShare.js.map