const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))




const thumbnails = document.querySelectorAll('.thumbnail');
const overlay = document.getElementById('overlay');
const overlayInner = document.getElementById('overlay-inner');
const overlayImage = document.getElementById('overlay-image');
const closeButton = document.getElementById('close-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentIndex = 0;

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    overlay.style.display = 'flex';
  });
});

closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  showImage();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  showImage();
});

function showImage() {
  overlayImage.src = thumbnails[currentIndex].src;
}















