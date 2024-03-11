import SimpleLightbox from 'simplelightbox';

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const imageEl = document.querySelector('.gallery');

export function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return ` 
  <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      width="360"
      height = "220"
    />
  </a>
  <p> largeImageURL: "${largeImageURL}"</p>
  <p> tags: "${tags}"</p>
      <p>likes: "${likes}"</p>
      <p> views: "${views}"</p>
      <p> comments"${comments}"</p>
      <p> downloads: "${downloads}"</p>
</li>`;
}

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}

export function renderMarkup(image, arr) {
  imageEl.insertAdjacentHTML('beforeend', imagesTemplate(arr));
}

export function refreshLightBox() {
  lightbox.refresh;
}
