import { makeAutoObservable } from 'mobx';
import { fetchMovies, fetchMovieDetails } from '../api';

class MovieStore {
  constructor() {
    this.movies = [];
    this.searchQuery = '';
    this.loading = false;
    makeAutoObservable(this);
  }

  setSearchQuery(query) {
    this.searchQuery = query;
  }

  async fetchMovies() {
    this.loading = true;
    try {
      const data = await fetchMovies(this.searchQuery);
      this.movies = data || [];
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      this.loading = false;
    }
  }

  async fetchMovieDetails(movieId) {
    this.loading = true;
    try {
      const movieDetails = await fetchMovieDetails(movieId);
      return movieDetails;
    } catch (error) {
      console.error('Error fetching movie details:', error);
    } finally {
      this.loading = false;
    }
  }
}

const movieStore = new MovieStore();
export default movieStore;
