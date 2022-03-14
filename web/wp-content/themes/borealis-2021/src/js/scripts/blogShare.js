function blogShare(sidebar) {
    const btn = sidebar.querySelector(".blog-share"); //class now
    const modal = sidebar.querySelector(".share-modal");

    const toggleShareModal = () => {
        if (modal.classList.contains("hidden")) {
            modal.classList.remove("hidden");
        } else {
            modal.classList.add("hidden");
        }
    };
    btn.addEventListener("click", toggleShareModal);
}

const blogshareContainers = document.querySelectorAll(".sidebar");
blogshareContainers.forEach((blogshareContainer) =>
    blogShare(blogshareContainer)
);