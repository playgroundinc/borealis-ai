export default class LazyImages {
    constructor(element) {
        this.element = element;
        this.imgs = [];
        this.pictures = [];
        this.handleImageLoad = this.handleImageLoad.bind(this);
    }

    setState(name, value) {
        this[name] = value;
    }

    getPictures() {
        const pictures = [...this.element.querySelectorAll('[data-srcset]')];
        this.setState('pictures', pictures);
    }

    getImages() {
        const imgs = [...this.element.querySelectorAll('[data-src]')];
        this.setState('imgs', imgs);
    }

    loadPicture(picture) {
        const { srcset } = picture.dataset;
        if (srcset) {
            picture.setAttribute('srcset', srcset);
        }
        picture.removeAttribute('data-srcset');
        picture.parentElement.classList.add('img-loaded');
    }

    handleImageLoad(e) {
        e.target.classList.add('img-loaded');
        e.target.removeAttribute('data-src');
    }

    loadImage(img) {
        const { src } = img.dataset;
        if (src && img.tagName !== 'DIV') {
            img.setAttribute('src', src);
            img.addEventListener('load', this.handleImageLoad);
            return;
        }
    }

    handleImages() {
        this.getImages();
        if (this.imgs.length && !this.element.classList.contains('img-loaded')) {
            this.imgs.forEach((img) => {
                this.loadImage(img);
            });
        }
    }

    handlePictures() {
        this.getPictures();
        if (this.pictures.length) {
            this.pictures.forEach((picture) => {
                this.loadPicture(picture);
            })
        }
    }

    loadImages() {
        if (this.hero) {
            this.loadHero();
            return;
        }
        this.handleImages();
        this.handlePictures()
    }
}