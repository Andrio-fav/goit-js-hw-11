import { searchImage } from './js/pixabay-api';
import { renderGallary } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  position: 'topRight',
  iconColor: '#fff',
  messageColor: '#fff',
});

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

  searchImage(request)
    .then(images => {
      if (images.length > 0) {
        form.elements.request.value = ''; // Clear the input field
        renderGallary(images, galleryHTML);
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
