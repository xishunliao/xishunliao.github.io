document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ignore if just '#'
            if (href === '#') return;
            // Only intercept on-page anchors
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                history.pushState(null, '', href);
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.getElementById('primary-menu');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            navLinks.classList.toggle('active');
        });

        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Set active nav link based on current path (basic)
    const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (!linkPath) return;
        if (linkPath.endsWith('projects.html') && currentPath.includes('/pages/projects')) {
            link.classList.add('active');
        } else if (linkPath.endsWith('publications.html') && currentPath.includes('/pages/publications')) {
            link.classList.add('active');
        } else if (linkPath.startsWith('#') && (currentPath === '/' || currentPath.endsWith('/xishunliao.github.io/'))) {
            // Home anchors considered active only on homepage; optional enhancement
        }
    });
}); 