import VideoBlock from './classes/class-video-block';

export default function () {
    const videoBlocks = [...document.querySelectorAll('.video-block')];
    if (videoBlocks.length) {
        videoBlocks.forEach((video) => {
            const VideoBlockClass = new VideoBlock(video);
            VideoBlockClass.addClickListener();
        })
    }
}
