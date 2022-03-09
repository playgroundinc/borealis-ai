import LazyImages from "./classes/class-lazy-images";

export default function animate() {
    /* All animated elements must have the class animated-element
     */
    let animatedElements = [...document.querySelectorAll(".animated-element")];
    const bodyCopyChildren = [...document.querySelectorAll(".body-copy > *")];
    if (bodyCopyChildren.length) {
        animatedElements = animatedElements.concat(bodyCopyChildren);
    }

    // First check if it exists so we don't error out in IE
    if (typeof IntersectionObserver !== "undefined") {
        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // every animated element needs to start transparent
                    const LazyImageLoad = new LazyImages(entry.target);
                    if (entry.intersectionRatio > 0) {
                        // when on screen
                        LazyImageLoad.loadImages();
                        if (entry.target.offsetHeight >= window.innerHeight) {
                            console.log("in here");
                            entry.target.style.opacity = "1";
                            entry.target.style.top = "0px";
                        } else if (
                            entry.intersectionRect.bottom >= window.innerHeight &&
                            entry.intersectionRect.height > entry.target.offsetHeight / 3
                        ) {
                            entry.target.style.opacity = "1";
                            entry.target.style.top = `0px`;
                        } else {
                            entry.target.style.opacity = "1";
                            entry.target.style.top = `0px`;
                        }
                    }
                });
            }, {
                rootMargin: "0px",
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );
        // Only run observer when window has loaded : images etc
        animatedElements.forEach((element) => {
            observer.observe(element);
        });
    } else {
        // We have JS but not the intersection observer, turn opacity for all data-animate elements back to 1
        animatedElements.forEach((item) => {
            item.style.opacity = "1";
            item.style.top = "0";
            const LazyImageLoad = new LazyImages(item);
            LazyImageLoad.loadImages();
        });
    }
}