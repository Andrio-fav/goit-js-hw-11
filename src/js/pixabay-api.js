import axios from 'axios';

const API_KEY = '49486795-430aa06a6e639b9f88254bdb1';  

export async function searchImage(query) {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`;
  
  try {
    const response = await axios.get(URL);
    return response.data.hits;  // Повертає масив зображень
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Failed to fetch images.');
  }
}
