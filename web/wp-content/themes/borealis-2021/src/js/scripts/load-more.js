import Loader from "./classes/class-loader";
export default function loadMore() {
    const loadMoreContainers = document.querySelectorAll('.load-more-results');
    if(loadMoreContainers && loadMoreContainers.length > 0) {
        loadMoreContainers.forEach(container => {
            const loadMoreButton = container.querySelector('.load-more');
            const list = container.querySelector('.posts-listing');
            if (loadMoreButton && list) {
                const PostLoader = new Loader(container, loadMoreButton, list, ['research-areas']);
                PostLoader.init();
            }
        })
    }
}
