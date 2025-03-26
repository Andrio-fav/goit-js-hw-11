import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderGallery(images, isNewSearch = false) {
  const galleryContainer = document.querySelector('.gallery');

  // Якщо це новий пошук, очищуємо галерею
  if (isNewSearch) {
    galleryContainer.innerHTML = '';
  }

  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" width="360" height="200">
        </a>
        <div class="image-info">
          <p><strong>Likes:</strong> ${image.likes}</p>
          <p><strong>Views:</strong> ${image.views}</p>
          <p><strong>Comments:</strong> ${image.comments}</p>
          <p><strong>Downloads:</strong> ${image.downloads}</p>
        </div>
      </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  gallery.refresh(); // Оновлюємо SimpleLightbox
}