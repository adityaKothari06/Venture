let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    updateSliderPosition();

}

function updateSliderPosition() {
    slider.style.width = `${totalSlides * 100}%`;
    const imageWidthPercentage = 100 / totalSlides;
    slides.forEach(img => img.style.width = `${imageWidthPercentage} %`);
    slider.style.transform = `translateX(-${currentSlide * imageWidthPercentage} %)`;
}

// // Auto-slide every 3 seconds
// setInterval(() => moveSlide(1), 3000);

updateSliderPosition();

setInterval(() => moveSlide(1), 3000);

// Toggle login popup visibility
function toggleLoginPopup() {
    const popup = document.getElementById('login-popup');
    popup.classList.toggle('active');
}

function showTab(tabName) {

    document.getElementById('login-form').classList.remove('active');

    document.getElementById('signup-form').classList.remove('active');

    document.querySelector('.tab-link[onclick="showTab(\'login\')"]').classList.remove('active');

    document.querySelector('.tab-link[onclick="showTab(\'signup\')"]').classList.remove('active');

    document.getElementById(tabName + '-form').classList.add('active');

    document.querySelector('.tab-link[onclick="showTab(\'' + tabName + '\')"]').classList.add('active');

}

// Close the login popup when clicking outside the popup content
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('login-popup')) {
        toggleLoginPopup();
    }
});