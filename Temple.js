document.addEventListener('DOMContentLoaded', function () {
    // Handle internal links smoothly
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (href.startsWith("#")) {
                event.preventDefault();
                const targetId = href.slice(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Accordion functionality for sidebar
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');
            const panelContent = this.nextElementSibling;
            if (panelContent.style.display === 'block') {
                panelContent.style.display = 'none';
            } else {
                panelContent.style.display = 'block';
            }
        });
    });

    // Scroll-to-Top Button Logic
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Carousel Functionality
    const carouselElement = document.getElementById('carousel');
    if (carouselElement) {
        const images = ['DD1.jpeg', 'DDurga.jpeg', 'Shiva.jpeg', 'ss1.jpeg'];
        let currentIndex = 0;

        function changeImage() {
            currentIndex = (currentIndex + 1) % images.length;
            carouselElement.src = images[currentIndex];
        }

        // Change image every 4 seconds
        setInterval(changeImage, 4000);
    }

    // Mobile menu toggle
    
    
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

