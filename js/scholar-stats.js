// Scholar statistics
const scholarStats = {
    publications: 33    // From Google Scholar
};

// Update the numbers in the HTML
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('publication-count').textContent = scholarStats.publications;
}); 