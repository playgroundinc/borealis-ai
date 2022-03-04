/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/js/scripts/location.js ***!
  \************************************/
function locationModal(locationContainer) {
  const closeVideo = locationContainer.querySelector("#close-vid");
  const openVideo = locationContainer.querySelector("#open-vid");
  const videoModal = locationContainer.querySelector("#video-modal");
  const openImage = locationContainer.querySelector("#open-img");
  const imageModal = locationContainer.querySelector("#img-modal");
  const containerHTML = document.querySelector("html");
  const imageSlideShow = locationContainer.querySelector("#image-slideshow");

  const classToggle = (el, classToRemove, classToAdd) => {
    if (classToAdd) {
      el.classList.add(classToAdd);
    }

    if (classToRemove) {
      el.classList.remove(classToRemove);
    }
  };

  const getRandomBulb = () => {
    if (imageSlideShow) {
      const randomNum = parseInt(Math.random() * imageSlideShow.childElementCount);
      const selectBulb = locationContainer.querySelector(`#bulb${randomNum + 1}`);
      const test = locationContainer.querySelectorAll(`.lightbulb`);
      test.forEach(bulb => {
        classToggle(bulb, "opacity-1", "opacity-0");
      });

      if (selectBulb) {
        classToggle(selectBulb, "opacity-0", "opacity-1");
      }
    }
  };

  getRandomBulb();
  setInterval(function () {
    getRandomBulb();
  }, 1500);

  const openModal = () => {
    classToggle(videoModal, "opacity-0", "opacity-1");
    videoModal.classList.add("z-20");
    containerHTML.classList.add("w-full");
    containerHTML.classList.add("overflow-y-scroll");
    containerHTML.classList.add("fixed");
  };

  const closeModal = () => {
    classToggle(videoModal, "opacity-1", "opacity-0");
    videoModal.classList.remove("z-20");
    classToggle(openVideo, "z-30", "z-10");
    containerHTML.classList.remove("w-full");
    containerHTML.classList.remove("overflow-y-scroll");
    containerHTML.classList.remove("fixed");
  }; // USE TOGGLE CLASS TOOL AND MAKE MORE ROBUST TO HANDLE ARRAY OF ADDED OR CHANGED TOGGLE CLASSES
  // , chgane fucntion names, STYLE
  // FINALIZE STYLE


  if (openImage) {
    openImage.addEventListener("mouseover", e => {
      imageModal.classList.remove("opacity-0");
      imageModal.classList.add("opacity-1");
      imageModal.classList.add("z-20");
      openImage.classList.remove("z-10");
      openImage.classList.add("z-30");
      containerHTML.classList.add("w-full");
      containerHTML.classList.add("overflow-y-scroll");
      containerHTML.classList.add("fixed");
    });
    openImage.addEventListener("mouseleave", e => {
      imageModal.classList.remove("opacity-1");
      imageModal.classList.add("opacity-0");
      imageModal.classList.remove("z-20");
      openImage.classList.add("z-10");
      openImage.classList.remove("z-30");
      containerHTML.classList.remove("w-full");
      containerHTML.classList.remove("overflow-y-scroll");
      containerHTML.classList.remove("fixed");
    });
  }

  if (openVideo && closeVideo) {
    openVideo.addEventListener("click", () => openModal(videoModal));
    closeVideo.addEventListener("click", () => closeModal(videoModal));
  }
}

const locationContainers = document.querySelectorAll(".location-container");
locationContainers.forEach(locationContainer => locationModal(locationContainer));
/******/ })()
;
//# sourceMappingURL=location.js.map