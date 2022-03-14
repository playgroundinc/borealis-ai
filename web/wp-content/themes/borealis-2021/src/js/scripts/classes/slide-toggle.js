export function slideToggle(element) {
    if (element.classList.contains("slide-toggle--active")) {
        element.classList.remove("slide-toggle--active");
        element.style.maxHeight = "0px";
        element.style.overflow = "";
        return;
    }
    const height = element.scrollHeight;
    element.style.maxHeight = `${element.classList.contains("sidebar-accordion") ? height + 102 : height}px`;
    element.classList.add("slide-toggle--active");
    setTimeout(function() {
        element.style.overflow = "unset";
    }, 300);
}