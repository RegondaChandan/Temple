document.addEventListener('DOMContentLoaded', function () {
    // Get all the gallery images
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeLightbox = document.querySelector('.close');

    // Open lightbox when an image is clicked
    galleryImages.forEach(image => {
        image.addEventListener('click', function () {
            lightbox.style.display = 'flex'; // Display the lightbox
            lightboxImg.src = image.src; // Set the source of the lightbox image
        });
    });

    // Close the lightbox when close button is clicked
    closeLightbox.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    // Close the lightbox when clicking anywhere outside the image
    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navLinksContainer.classList.toggle('nav-open');
        });
    }

    // Close the nav on link click for better UX on mobile
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinksContainer.classList.remove('nav-open');
        });
    });
});
