import { searchImage } from './js/pixabay-api';  
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryHTML = document.querySelector('.gallery');
const form = document.querySelector('.form');

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

  galleryHTML.innerHTML = ''; // Clear previous results
  form.elements.request.setAttribute('readonly', true); // Disable input
  form.elements.button.disabled = true; // Disable submit button
  form.lastElementChild.classList.remove('hidden'); // Show loader

  searchImage(request)  // Тепер викликається searchImage
    .then(images => {
      if (images.length > 0) {
        form.elements.request.value = ''; // Clear the input field
        renderGallery(images); // Рендеримо зображення
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
      form.elements.request.removeAttribute('readonly'); // Restore input
      form.elements.button.disabled = false; // Enable button
      form.lastElementChild.classList.add('hidden'); // Hide loader
    });
}