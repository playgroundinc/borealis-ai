/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/js/scripts/location.js ***!
  \************************************/
function locationModal(locationContainer) {
  const openVideo = locationContainer.querySelector("#open-vid");
  const videoModal = locationContainer.querySelector("#video-modal");
  const openImage = locationContainer.querySelector("#open-img");
  const imageModal = locationContainer.querySelector("#img-modal");
  const containerHTML = document.querySelector("html");
  const imageSlideShow = locationContainer.querySelector("#image-slideshow");
  const nav = document.getElementById("main-navigation");

  const classToggle = (el, classToRemove, classToAdd) => {
    if (classToAdd) {
      classToAdd.forEach(classname => {
        el.classList.add(classname);
      });
    }

    if (classToRemove) {
      classToRemove.forEach(classname => {
        el.classList.remove(classname);
      });
    }
  };

  const getRandomImage = () => {
    if (imageSlideShow) {
      const randomNum = parseInt(Math.random() * imageSlideShow.childElementCount);
      const selectImg = locationContainer.querySelector(`#image${randomNum + 1}`);
      const images = locationContainer.querySelectorAll(`.image-slideshow`);
      images.forEach(image => {
        classToggle(image, ["opacity-1"], ["opacity-0"]);
      });

      if (selectImg) {
        classToggle(selectImg, ["opacity-0"], ["opacity-1"]);
      }
    }
  };

  getRandomImage();
  setInterval(function () {
    getRandomImage();
  }, 750);

  const openModal = (el, target) => {
    classToggle(el, ["opacity-0", "-z-10"], ["opacity-1", "z-20"]);
    nav.classList.add("opacity-0");
    target !== null && classToggle(target, ["z-10"], ["z-30"]);
  };

  const closeModal = (el, target) => {
    classToggle(el, ["opacity-1", "z-20"], ["opacity-0", "-z-10"]);
    nav.classList.remove("opacity-0");
    target !== null && classToggle(target, ["z-30"], ["z-10"]);
  };

  if (openImage) {
    if (!("ontouchend" in document.documentElement)) {
      openImage.addEventListener("mouseenter", () => openModal(imageModal, openImage));
      openImage.addEventListener("keydown", event => {
        if (event.key === " " || event.key === "Enter") {
          openModal(imageModal, openImage);
        } else if (event.key === "Escape") {
          closeModal(imageModal, openImage);
        }
      });
      openImage.addEventListener("mouseleave", () => closeModal(imageModal, openImage));
    } else {
      openImage.addEventListener("touchend", e => {
        openModal(imageModal, null);
      });
      imageModal.addEventListener("touchend", e => {
        closeModal(imageModal, null);
      });
    }
  }

  if (openVideo) {
    openVideo.addEventListener("click", () => openModal(videoModal, null));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeModal(videoModal, openVideo);
      }
    });
    videoModal.addEventListener("click", () => closeModal(videoModal, openVideo));
  }
}

const locationContainers = document.querySelectorAll(".location-container");
locationContainers.forEach(locationContainer => locationModal(locationContainer));
/******/ })()
;
//# sourceMappingURL=location.js.map