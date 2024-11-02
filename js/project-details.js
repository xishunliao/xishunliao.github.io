document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.querySelector('.project-image-gallery > img');
    const thumbnails = document.querySelectorAll('.image-thumbnails img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Swap main image with clicked thumbnail
            const tempSrc = mainImage.src;
            const tempAlt = mainImage.alt;
            
            mainImage.src = this.src;
            mainImage.alt = this.alt;
            
            this.src = tempSrc;
            this.alt = tempAlt;

            // Add animation
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 50);
        });
    });
}); 