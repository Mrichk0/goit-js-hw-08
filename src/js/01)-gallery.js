import { galleryItems } from "./gallery-items.js";
// Change code below this line
const pictureGallery = document.querySelector(".gallery");
const pictureMarkup = createPictureMarkup(galleryItems);

pictureGallery.addEventListener("click", onPictureGalleryClick);
pictureGallery.insertAdjacentHTML("beforeend", pictureMarkup);

function createPictureMarkup(picture) {
  return picture
    .map(
      ({ preview, original, description }) =>
        `  
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div >
       `
    )
    .join("");
}

function onPictureGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance =
    basicLightbox.create(`<img src="${event.target.dataset.source}"/>
`);

  addKeyDownEventListener(instance);

  instance.show();
}

function addKeyDownEventListener(instance) {
  const listener = (event) => {
    if (instance.visible()) {
      if (event.code !== "Escape") {
        return;
      }
      instance.close();
    }
    document.removeEventListener("keydown", listener);
  };
  document.addEventListener("keydown", listener);
}
