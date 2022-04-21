function imageHover(container) {
    const productImage = container.querySelector("#product-image");
    const ctaHover = container.querySelector("#cta-hover");

    container.style.cursor = 'url("' + productImage.src + '"), auto';

    ctaHover.addEventListener("mouseenter", function() {
        container.style.cursor = "pointer";
    });
    ctaHover.addEventListener("mouseleave", function() {
        container.style.cursor = 'url("' + productImage.src + '"), auto';
    });
}

const imageHoverContainers = document.querySelectorAll(".hover");
imageHoverContainers.forEach((imageHoverContainer) => imageHover(imageHoverContainer));