export default class VideoBlock {
    constructor(video) {
        this.video = video;
        this.trigger = null;
        this.overlay = null;
        this.handleClick = this.handleClick.bind(this);
    }

    setState(name, value) {
        this[name] = value;
    }
    getElements() {
        const trigger = this.video.querySelector('.video-block__overlay__button');
        const overlay = this.video.querySelector('.video-block__overlay');
        const player = this.video.querySelector('video');
        this.setState('overlay', overlay);
        this.setState('trigger', trigger);
        this.setState('player', player);
    }

    handleClick(e) {
        e.preventDefault(); 
        this.overlay.classList.add('video-block__overlay--hidden');
        this.player.play();
        this.player.setAttribute('tabindex', 0);
    }

    addClickListener() {
        this.getElements();
        if (this.trigger) {
            this.player.setAttribute('tabindex', -1);
            this.trigger.addEventListener('click', this.handleClick);
        }
    }

}