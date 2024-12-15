const burgerImages = document.querySelectorAll('.burger img');
const toggleImages = document.querySelectorAll('.burger-toggle img');
let currentIndex = 0;

toggleImages[currentIndex].classList.add('active');
burgerImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        toggleImages[currentIndex].classList.add('active');
        toggleImages[currentIndex].src = burgerImages[index].src;
        currentIndex = (currentIndex + 1) % toggleImages.length;
    });
});