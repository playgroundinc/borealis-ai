import HeroVideoClass from "./classes/class-hero-video";

export default function heroVideo() {
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        const heroVideoControls = heroVideo.querySelector('.video-overlay__controls__btn');
        const HeroVideoControlsClass = new HeroVideoClass(heroVideoControls);
        HeroVideoControlsClass.init();
    }
}