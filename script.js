const sliders = document.querySelector(".sliders");

const carousel = document.querySelector(".carousel-caja")
const carouselWidth = carousel.offsetWidth;

function handleClick(direction) {
    if (direction === "previous"){
        sliders.scrollBy({left: -carouselWidth, behavior: "smooth"});
    } else {
        sliders.scrollBy({left:carouselWidth, behavior: "smooth"});
    }
}