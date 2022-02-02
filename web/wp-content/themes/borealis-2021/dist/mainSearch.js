/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./src/js/scripts/main-search.js ***!
  \***************************************/
function mainSearch() {
  const searchInput = document.getElementById('search');
  const searchIconOpen = document.querySelector('#open-search');
  const searchIconClose = document.querySelector('#close-search');
  searchIconClose.addEventListener('click', () => {
    if (!searchIconClose.classList.contains('hidden')) {
      searchInput.value = '';
      searchIconClose.classList.add('hidden');
      searchIconOpen.classList.remove('hidden');
    }
  });
  searchInput.addEventListener('keydown', e => {
    if (e.target.value) {
      searchInput.classList.remove('text-shade-grey-700');
      searchInput.classList.add('text-primary-navy-400');
      searchIconClose.classList.remove('hidden');
      searchIconOpen.classList.add('hidden');
    } else {
      searchIconClose.classList.add('hidden');
      searchIconOpen.classList.remove('hidden');
    }
  });
}

mainSearch();
/******/ })()
;
//# sourceMappingURL=mainSearch.js.map