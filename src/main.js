import { searchImage } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  position: 'topRight',
  iconColor: '#fff',
  messageColor: '#fff',
});

document.addEventListener('DOMContentLoaded', () => {
  const galleryHTML = document.querySelector('.gallery');
  const form = document.querySelector('.form');
  const submitButton = form.querySelector('button'); // Оновлено
  const loader = form.lastElementChild; // Індикатор завантаження

  if (!form) {
    console.error("Form element not found");
    return;
  }

  form.addEventListener('submit', handleClick);

  function handleClick(event) {
    event.preventDefault();
    
    const request = form.elements.request.value.trim();
    if (!request) {
      iziToast.warning({
        message: 'Please enter a search query!',
      });
      return;
    }

    galleryHTML.innerHTML = ''; // Очистка галереї
    form.elements.request.setAttribute('readonly', true);
    submitButton.disabled = true;
    loader.classList.remove('hidden');

    searchImage(request)
      .then(images => {
        if (images.length > 0) {
          form.elements.request.value = '';
          renderGallery(images, galleryHTML);
        } else {
          throw new Error('Sorry, no images found. Please try again!');
        }
      })
      .catch(error => {
        iziToast.error({
          iconUrl: 'img/error.svg',
          message: error.message,
        });
      })
      .finally(() => {
        form.elements.request.removeAttribute('readonly');
        submitButton.disabled = false;
        loader.classList.add('hidden');
      });
  }
});

