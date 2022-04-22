import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
console.log(galleryItems);

const pictureGallery = document.querySelector('.gallery');
const pictureMarkup = createPictureMarkup(galleryItems);

pictureGallery.insertAdjacentHTML('beforeend', pictureMarkup);

function createPictureMarkup(picture) {
  return picture
    .map(
      ({ preview, original, description }) =>
        `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `,
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
