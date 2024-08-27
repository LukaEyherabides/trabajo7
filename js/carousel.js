
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

