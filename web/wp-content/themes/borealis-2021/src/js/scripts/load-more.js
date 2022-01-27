import Loader from "./classes/class-loader";
export default function loadMore() {
    const loadMoreButton = document.querySelector('.load-more');
    if (loadMoreButton) {
        const list = document.querySelector('.posts-listing');
        const PostLoader = new Loader(loadMoreButton, list);
        PostLoader.init();
    }
}