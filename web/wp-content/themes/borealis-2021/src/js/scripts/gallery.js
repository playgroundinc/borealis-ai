
import GalleryClass from "./classes/class-gallery";

function galleries() {
    const galleries = [...document.querySelectorAll('.custom-gallery')];
    if (galleries.length > 0) {
        galleries.forEach((gallery) => {
            const Gallery = new GalleryClass(gallery);
            Gallery.init();
        })
    }
}

galleries();