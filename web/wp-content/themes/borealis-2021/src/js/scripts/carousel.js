import Carousel from './classes/class-slider';

const carousels = [...document.querySelectorAll('.slider')];
if (carousels.length) {
    carousels.forEach((carousel) => {
        const CarouselClass = new Carousel(carousel);
        CarouselClass.init();
    });
}
