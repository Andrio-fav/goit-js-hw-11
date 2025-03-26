import { searchImage } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Налаштування iziToast
iziToast.settings({
  position: 'topRight',
  iconColor: '#fff',
  messageColor: '#fff',
});

const galleryHTML = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more'); // Кнопка "Load More"

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', handleSearch);
loadMoreBtn.addEventListener('click', loadMoreImages);

async function handleSearch(event) {
  event.preventDefault();

  const request = form.elements['search-text'].value.trim();
  if (!request) {
    iziToast.warning({ message: 'Please enter a search query!' });
    return;
  }

  // Очищення перед новим запитом
  galleryHTML.innerHTML = '';
  currentQuery = request;
  currentPage = 1;
  loadMoreBtn.classList.add('hidden'); // Ховаємо кнопку перед пошуком

  toggleLoading(true);

  try {
    const images = await searchImage(currentQuery, currentPage);
    if (images.length === 0) {
      throw new Error('Sorry, no images found. Please try again!');
    }

    renderGallery(images, galleryHTML);
    loadMoreBtn.classList.remove('hidden'); // Показуємо кнопку, якщо є зображення
  } catch (error) {
    iziToast.error({ message: error.message });
  } finally {
    toggleLoading(false);
  }
}

async function loadMoreImages() {
  currentPage += 1;
  toggleLoading(true);

  try {
    const images = await searchImage(currentQuery, currentPage);
    if (images.length === 0) {
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
      loadMoreBtn.classList.add('hidden');
      return;
    }

    renderGallery(images, galleryHTML);

    // Прокрутка сторінки вниз після завантаження нових зображень
    const galleryItemHeight = galleryHTML.firstElementChild?.getBoundingClientRect().height || 0;
    window.scrollBy({ top: galleryItemHeight * 2, behavior: 'smooth' });
  } catch (error) {
    iziToast.error({ message: error.message });
  } finally {
    toggleLoading(false);
  }
}

function toggleLoading(isLoading) {
  const loader = document.querySelector('.loader');
  if (isLoading) {
    loader.classList.remove('hidden');
    form.elements['search-text'].setAttribute('readonly', true);
    form.elements['search-button'].disabled = true;
  } else {
    loader.classList.add('hidden');
    form.elements['search-text'].removeAttribute('readonly');
    form.elements['search-button'].disabled = false;
  }
}
