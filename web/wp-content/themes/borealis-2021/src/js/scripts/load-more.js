import Loader from "./classes/class-loader";
export default function loadMore() {
    const loadMoreButton = document.querySelector('.load-more');
    const list = document.querySelector('.posts-listing');
    if (loadMoreButton && list) {
        const PostLoader = new Loader(loadMoreButton, list, ['research-areas']);
        PostLoader.init();
    }
}