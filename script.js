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
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer-place').innerHTML = data);