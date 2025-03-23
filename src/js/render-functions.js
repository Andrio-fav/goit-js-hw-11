import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

export function renderGallery(images) {
  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy">
        </a>
        <div class="info">
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
      </li>`
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}
