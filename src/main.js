import { searchImage } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  position: 'topRight',
  iconColor: '#fff',
  messageColor: '#fff',
});

const galleryHTML = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more'); // Додаємо кнопку

let request = '';
let page = 1;

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', loadMoreImages);

function handleSubmit(event) {
  event.preventDefault();

  request = form.elements.request.value.trim();
  if (!request) {
    iziToast.warning({
      message: 'Please enter a search query!',
    });
    return;
  }

  page = 1;
  galleryHTML.innerHTML = '';
  form.elements.request.setAttribute('readonly', true);
  form.elements.button.disabled = true;
  form.lastElementChild.classList.remove('hidden');
  loadMoreBtn.classList.add('hidden'); // Ховаємо кнопку перед новим пошуком

  searchImage(request, page)
    .then(({ hits, totalHits }) => {
      if (hits.length === 0) {
        throw new Error('Sorry, no images found. Please try again!');
      }

      renderGallery(hits);
      if (totalHits > 15) {
        loadMoreBtn.classList.remove('hidden'); // Показуємо кнопку "Load more"
      }
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
      });
    })
    .finally(() => {
      form.elements.request.removeAttribute('readonly');
      form.elements.button.disabled = false;
      form.lastElementChild.classList.add('hidden');
    });
}

function loadMoreImages() {
  page += 1;
  loadMoreBtn.disabled = true;

  searchImage(request, page)
    .then(({ hits, totalHits }) => {
      if (hits.length === 0) {
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
        });
        loadMoreBtn.classList.add('hidden');
        return;
      }

      renderGallery(hits);

      const totalPages = Math.ceil(totalHits / 15);
      if (page >= totalPages) {
        loadMoreBtn.classList.add('hidden');
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
      });
    })
    .finally(() => {
      loadMoreBtn.disabled = false;
    });
}
