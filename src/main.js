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
const loadMoreBtn = document.querySelector('.load-more'); // Кнопка Load More
const loader = document.querySelector('.loader'); // Індикатор завантаження

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

// **Обробка сабміту форми**
function handleSubmit(event) {
  event.preventDefault();

  const query = form.elements.request.value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
    });
    return;
  }

  // Очищаємо попередні результати та скидаємо сторінку
  galleryHTML.innerHTML = '';
  currentPage = 1;
  currentQuery = query;
  loadMoreBtn.classList.add('hidden'); // Ховаємо кнопку Load More
  form.elements.request.setAttribute('readonly', true); // Блокуємо введення
  form.elements.button.disabled = true; // Деактивуємо кнопку сабміту
  loader.classList.remove('hidden'); // Показуємо лоадер

  fetchImages();
}

// **Обробка натискання Load More**
function handleLoadMore() {
  currentPage++;
  fetchImages();
}

// **Функція отримання зображень**
function fetchImages() {
  searchImage(currentQuery, currentPage)
    .then(images => {
      if (images.length > 0) {
        renderGallery(images, currentPage === 1); // Передаємо true тільки при першому запиті

        if (images.length < 15) {
          iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
          });
          loadMoreBtn.classList.add('hidden'); // Ховаємо кнопку Load More
        } else {
          loadMoreBtn.classList.remove('hidden'); // Показуємо кнопку Load More
        }

        smoothScroll(); // Викликаємо функцію плавного скролінгу
      } else {
        throw new Error('Sorry, no images found. Please try again!');
      }
    })
    .catch(error => {
      iziToast.error({
        iconUrl: './img/error.svg', // Шлях має бути правильним (перевір у проєкті)
        message: error.message,
      });
    })
    .finally(() => {
      form.elements.request.removeAttribute('readonly');
      form.elements.button.disabled = false;
      loader.classList.add('hidden');
    });
}

// **Функція плавного скролінгу**
function smoothScroll() {
  const { height: cardHeight } = galleryHTML.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
