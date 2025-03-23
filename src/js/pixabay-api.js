import axios from 'axios';

const API_KEY = '49486795-430aa06a6e639b9f88254bdb1';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    return response.data.hits; // Повертаємо масив зображень
  } catch (error) {
    console.error('Error request to Pixabay:', error);
    return [];
  }
}