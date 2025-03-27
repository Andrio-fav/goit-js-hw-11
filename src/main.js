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

  if (!form || !galleryHTML) {
    console.error("Form or gallery element not found");
    return;
  }

  const submitButton = form.querySelector('button');
  const loader = form.lastElementChild; 

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

    if (galleryHTML) {
      galleryHTML.innerHTML = ''; // Очистка галереї
    }

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
