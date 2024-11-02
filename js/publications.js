document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publications = document.querySelectorAll('.publication-item');
    const yearSections = document.querySelectorAll('.year-section');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // First show all year sections
            yearSections.forEach(section => {
                section.style.display = 'block';
            });

            // Then filter publications
            publications.forEach(pub => {
                if (filter === 'all') {
                    pub.style.display = 'flex';
                } else {
                    const category = pub.getAttribute('data-category');
                    pub.style.display = category === filter ? 'flex' : 'none';
                }
            });

            // Hide year sections that have no visible publications
            yearSections.forEach(section => {
                const visiblePubs = section.querySelectorAll('.publication-item[style="display: flex"]');
                if (visiblePubs.length === 0) {
                    section.style.display = 'none';
                }
            });
        });
    });
}); 