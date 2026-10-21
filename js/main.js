document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const links = document.getElementById('primary-menu');
    if (toggle && links) {
        const container = toggle.closest('.nav-container');
        const mobile = window.matchMedia('(max-width: 680px)');
        function closeMenu() {
            toggle.setAttribute('aria-expanded', 'false');
            links.classList.remove('active');
        }
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') !== 'true';
            toggle.setAttribute('aria-expanded', String(expanded));
            links.classList.toggle('active', expanded);
        });
        links.addEventListener('click', event => {
            if (event.target.closest('a')) closeMenu();
        });
        document.addEventListener('click', event => {
            if (!container.contains(event.target)) closeMenu();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
                closeMenu();
                toggle.focus();
            }
        });
        mobile.addEventListener('change', closeMenu);
        // Navigation remains visible when JavaScript is unavailable.
        container.classList.add('menu-ready');
    }

    // Keep every item in the HTML; create a native disclosure only when needed.
    const news = document.querySelector('.news-list');
    const visibleCount = Number(news?.dataset.visibleCount) || 5;
    if (news && news.children.length > visibleCount) {
        const archive = document.createElement('details');
        archive.className = 'news-archive';
        const summary = document.createElement('summary');
        summary.textContent = 'Earlier news';
        const older = document.createElement('ul');
        older.className = 'news-list';
        [...news.children].slice(visibleCount).forEach(item => older.append(item));
        archive.append(summary, older);
        news.after(archive);
    }
});
