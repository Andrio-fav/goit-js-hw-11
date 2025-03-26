const form = document.querySelector('.form');
const galleryHTML = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

if (!form || !galleryHTML || !loadMoreBtn || !loader) {
  console.error('❌ Помилка: один з елементів не знайдено! Перевір HTML.');
}

form.addEventListener('submit', handleClick);

function handleClick(event) {
  event.preventDefault();

  const request = form.elements.request.value.trim(); // тут доступ до поля 'request'
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
        renderGallery(images); // Тепер передається renderGallery
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
