let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item img');

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
    setLightboxImage();
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function setLightboxImage() {
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = images[currentImageIndex].src;
    const caption = document.getElementById('caption');
    caption.innerHTML = images[currentImageIndex].alt;
}

function setCurrentImage(index) {
    currentImageIndex = index;
    setLightboxImage();
}

window.onclick = function(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.target === lightbox) {
        closeLightbox();
    }
}
