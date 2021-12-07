export default class HeroVideo {
    constructor(element) {
        this.element = element;
        this.playing = true;
        this.video = null;
        this.handleClick = this.handleClick.bind(this);
    }
    setState(name, value) {
        this[name] = value;
    }
    handlePause() {
        this.element.classList.remove('video-overlay__controls--playing');
        this.video.pause();
        this.element.classList.add('video-overlay__controls--paused');
        this.setState('playing', false);
    }

    handlePlay() {
        this.element.classList.remove('video-overlay__controls--paused');
        this.video.play();
        this.element.classList.add('video-overlay__controls--playing');
        this.setState('playing', true);
    }

    handleClick(e) {
        e.preventDefault();
        if (this.playing) {
            this.handlePause();
            return;
        }
        this.handlePlay();
        
    }
    getVideo() {
        const video = document.querySelector('.hero-video video');
        this.setState('video', video);
    }
    init() {
        this.getVideo();
        this.element.addEventListener('click', this.handleClick);
    }
}