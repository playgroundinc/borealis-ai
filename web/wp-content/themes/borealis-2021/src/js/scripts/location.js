function locationModal(locationContainer) {
    const openVideo = locationContainer.querySelector("#open-vid");
    const videoModal = locationContainer.querySelector("#video-modal");
    const openImage = locationContainer.querySelector("#open-img");
    const imageModal = locationContainer.querySelector("#img-modal");
    const containerHTML = document.querySelector("html");
    const imageSlideShow = locationContainer.querySelector("#image-slideshow");

    const classToggle = (el, classToRemove, classToAdd) => {
        if (classToAdd) {
            classToAdd.forEach((classname) => {
                el.classList.add(classname);
            });
        }
        if (classToRemove) {
            classToRemove.forEach((classname) => {
                el.classList.remove(classname);
            });
        }
    };

    const getRandomImage = () => {
        if (imageSlideShow) {
            const randomNum = parseInt(
                Math.random() * imageSlideShow.childElementCount
            );
            const selectImg = locationContainer.querySelector(
                `#image${randomNum + 1}`
            );
            const images = locationContainer.querySelectorAll(`.image-slideshow`);
            images.forEach((image) => {
                classToggle(image, ["opacity-1"], ["opacity-0"]);
            });
            if (selectImg) {
                classToggle(selectImg, ["opacity-0"], ["opacity-1"]);
            }
        }
    };

    getRandomImage();
    setInterval(function() {
        getRandomImage();
    }, 750);

    const openModal = (el, target) => {
        classToggle(el, ["opacity-0"], ["opacity-1", "z-20"]);
        target !== null && classToggle(target, ["z-10"], ["z-30"]);
        classToggle(containerHTML, [], ["w-full", "fixed", "overflow-y-scroll"]);
    };

    const closeModal = (el, target) => {
        classToggle(el, ["opacity-1", "z-20"], ["opacity-0"]);
        classToggle(target, ["z-30"], ["z-10"]);
        classToggle(containerHTML, ["w-full", "fixed", "overflow-y-scroll"], []);
    };

    if (openImage) {
        if (!("ontouchstart" in document.documentElement)) {
            openImage.addEventListener("mouseover", () =>
                openModal(imageModal, openImage)
            );
            openImage.addEventListener("mouseleave", () =>
                closeModal(imageModal, openImage)
            );
        } else {
            openImage.addEventListener("touchend", (e) => {
                openModal(imageModal, openImage);
                console.log(openImage, "OPEN IMAGE");
            });
            imageModal.addEventListener("touchend", (e) => {
                closeModal(imageModal, openImage);
                console.log("CLOSE IMAGE");
            });
        }
    }

    if (openVideo) {
        openVideo.addEventListener("click", () => openModal(videoModal, null));
        videoModal.addEventListener("click", () =>
            closeModal(videoModal, openVideo)
        );
    }
}

const locationContainers = document.querySelectorAll(".location-container");
locationContainers.forEach((locationContainer) =>
    locationModal(locationContainer)
);