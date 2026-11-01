'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', function (event) {
    // Reponds only when an image is clicked.
    if (event.target.tagName === 'IMG') {
        const previewImage = document.querySelector('.preview-img');
        const caption = document.querySelector('.preview figcaption');

        // Update preview image.
        previewImage.src = event.target.src;
        previewImage.alt = event.target.alt;

        // Update caption.
        caption.textContent = event.target.alt;
    }
});