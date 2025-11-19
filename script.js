fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-place').innerHTML = data;
        
        // Initialize hamburger menu after header is loaded
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking on nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }

        // Update navigation for index.html (single page navigation)
        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
            updateNavigationForIndex();
        }
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer-place').innerHTML = data);

// Navigation functions for index.html
function updateNavigationForIndex() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Update navigation links to use anchor navigation
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html' || href === '#about') {
            link.setAttribute('href', '#about');
            link.addEventListener('click', function(e) {
                e.preventDefault();
                navigateToSection('about');
            });
        } else if (href === 'projects.html') {
            link.setAttribute('href', '#projects');
            link.addEventListener('click', function(e) {
                e.preventDefault();
                navigateToSection('projects');
            });
        } else if (href === 'graphic-design.html') {
            link.setAttribute('href', '#design');
            link.addEventListener('click', function(e) {
                e.preventDefault();
                navigateToSection('design');
            });
        } else if (href === 'community.html') {
            link.setAttribute('href', '#community');
            link.addEventListener('click', function(e) {
                e.preventDefault();
                navigateToSection('community');
            });
        }
    });

    // Add "What I'm Up To" link if it doesn't exist
    const navMenu = document.getElementById('nav-menu');
    if (navMenu && !document.querySelector('.nav-link[href="#currently"]')) {
        const currentlyLink = document.createElement('a');
        currentlyLink.href = '#currently';
        currentlyLink.className = 'nav-link';
        currentlyLink.textContent = "What I'm Up To";
        currentlyLink.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToSection('currently');
        });
        
        // Insert after "About Me" link
        const aboutLink = Array.from(navLinks).find(link => link.getAttribute('href') === '#about');
        if (aboutLink && aboutLink.nextSibling) {
            navMenu.insertBefore(currentlyLink, aboutLink.nextSibling);
        } else if (aboutLink) {
            navMenu.appendChild(currentlyLink);
        }
    }

    // Smooth scroll navigation
    function navigateToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 60;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Active section detection on scroll
    let activeSection = 'about';
    
    function updateActiveSection() {
        const sections = ['about', 'news', 'currently', 'projects', 'design', 'community'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const headerHeight = 60;

        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                const sectionTop = offsetTop - headerHeight;
                const sectionBottom = sectionTop + offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    if (activeSection !== sectionId) {
                        activeSection = sectionId;
                        updateActiveNavLink(sectionId);
                    }
                    break;
                }
            }
        }
    }

    function updateActiveNavLink(sectionId) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${sectionId}`) {
                link.classList.add('active');
            }
        });

        // Also update the name link
        const nameLink = document.querySelector('#top-bar h1');
        if (nameLink) {
            nameLink.addEventListener('click', function(e) {
                e.preventDefault();
                navigateToSection('about');
            });
        }
    }

    // Initial active section
    updateActiveSection();

    // Update on scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(updateActiveSection);
    });
}

// Currently Section Carousel Navigation
function initCurrentlyCarousel() {
    const grid = document.getElementById('currently-grid');
    const prevButton = document.getElementById('currently-prev');
    const nextButton = document.getElementById('currently-next');
    
    if (!grid || !prevButton || !nextButton) return;
    
    const cards = grid.querySelectorAll('.activity-card');
    if (cards.length === 0) return;
    
    let currentIndex = 0;
    
    // Initialize: Set first card as active
    cards.forEach((card, index) => {
        if (index === 0) {
            card.classList.add('active');
        } else {
            card.classList.remove('active', 'prev');
        }
    });
    
    // Update button states
    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === cards.length - 1;
    }
    
    // Update card positions
    function updateCards() {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'prev');
            
            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index < currentIndex) {
                card.classList.add('prev');
            }
        });
        updateButtons();
    }
    
    // Next card
    nextButton.addEventListener('click', function() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCards();
        }
    });
    
    // Previous card
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCards();
        }
    });
    
    // Initialize button states
    updateButtons();
}

// Initialize carousel when DOM is ready
function initCarouselAfterLoad() {
    // Wait a bit for header to load, then initialize carousel
    setTimeout(() => {
        initCurrentlyCarousel();
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarouselAfterLoad);
} else {
    initCarouselAfterLoad();
}