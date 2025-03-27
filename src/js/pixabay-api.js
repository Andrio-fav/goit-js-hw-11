import axios from 'axios';

export function searchImage(request) {
  const API_KEY = '49486795-430aa06a6e639b9f88254bdb1';
  const URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    '&q=' +
    encodeURIComponent(request) +
    '&image_type=photo' +
    '&orientation=horizontal' +
    '&safesearch=true';

  return axios.get(URL).then(response => [...response.data.hits]);
}