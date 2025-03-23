import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallary(images, galleryHTML) {
  let markup = images
    .map(
      image => `
      <li>
        <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" width="360" height="200" /></a>
        <table class="caption">
          <thead>
            <tr>
              <th>Likes</th>
              <th>Views</th>
              <th>Comments</th>
              <th>Downloads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${image.likes}</td>
              <td>${image.views}</td>
              <td>${image.comments}</td>
              <td>${image.downloads}</td>
            </tr>
          </tbody>
        </table>
      </li>`
    )
    .join('');

  galleryHTML.innerHTML = markup;

  const gallery = new SimpleLightbox('.gallery a');
  gallery.refresh();
}