function blogModal(sidebar) {
    const closeBtn = document.getElementById("close-cite");
    const openBtn = sidebar.querySelector(".open-cite");
    const modal = document.getElementById("modal");
    const container = document.querySelector("body");

    const closeModal = () => {
        modal.classList.add("hidden");
        container.classList.remove("overflow-hidden", "bg-shade-black-400", "bg-opacity-70");
    };

    const openModal = () => {
        modal.classList.remove("hidden");
        container.classList.add("overflow-hidden", "bg-shade-black-400", "bg-opacity-70");
    };

    if (closeBtn && openBtn) {
        closeBtn.addEventListener("click", closeModal);
        openBtn.addEventListener("click", openModal);
    }
}

const sidebarContainers = document.querySelectorAll(".sidebar");
sidebarContainers.forEach((sidebarContainer) => blogModal(sidebarContainer));