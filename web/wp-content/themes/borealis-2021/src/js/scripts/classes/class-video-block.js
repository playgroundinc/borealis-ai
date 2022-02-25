export default class VideoBlock {
    constructor(video) {
        this.video = video;
        this.trigger = null;
        this.overlay = null;
        this.media = null;
        this.handleClick = this.handleClick.bind(this);
        this.setEmbedSize = this.setEmbedSize.bind(this);
    }

    setState(name, value) {
        this[name] = value;
    }
    getElements() {
        const trigger = this.video.querySelector('.video-block__overlay__button');
        const overlay = this.video.querySelector('.video-block__overlay');
        let player = this.video.querySelector('video');
        if (!player) {
          player = this.video.querySelector('iframe');  
          this.setState('media', 'youtube');
        }
        this.setState('overlay', overlay);
        this.setState('trigger', trigger);
        this.setState('player', player);
    }

    setEmbedSize() {
        this.player.setAttribute('height', `${this.video.offsetHeight}px`);
        this.player.setAttribute('width', `${this.video.offsetWidth}px`)
    }

    handleClick(e) {
        e.preventDefault(); 
        this.overlay.classList.add('opacity-0')
        this.overlay.classList.add('visibility-hidden');
        this.overlay.addEventListener('transitionend', (e) => {
            e.target.classList.add('z-0');
        })
        if (this.media === 'youtube') {
            const src = this.player.getAttribute('src');
            if (/autoplay/gi.test(src)) {
                return;
            }
            this.setEmbedSize();
            this.player.setAttribute('src', `${src}&autoplay=1&mute=1`);
        } else {
            this.player.play();
        }
        this.player.setAttribute('tabindex', 0);
    }


    addClickListener() {
        this.getElements();
        if (this.trigger) {
            if (this.player) {
                this.player.setAttribute('tabindex', -1);
            }
            this.trigger.addEventListener('click', this.handleClick);
        }
        if (this.media === 'youtube') {
            window.addEventListener('resize', this.setEmbedSize);
        }
    }

}