import axios from 'axios';

const API_KEY = '7e59b8de';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (searchQuery) => {
  const response = await axios.get(BASE_URL, {
    params: {
      s: searchQuery,
      apikey: API_KEY,
    },
  });
  return response.data.Search;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(BASE_URL, {
    params: {
      i: movieId,
      apikey: API_KEY,
    },
  });
  return response.data;
};
