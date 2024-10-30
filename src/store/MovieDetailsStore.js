import { makeAutoObservable } from 'mobx';
import { fetchMovieDetails } from '../api';

class MovieDetailsStore {
  constructor() {
    this.currentMovie = null;
    this.loading = false;
    makeAutoObservable(this);
  }

  async fetchMovieDetails(movieId) {
    this.loading = true;
    try {
      const details = await fetchMovieDetails(movieId);
      this.currentMovie = details;
    } catch (error) {
      console.error('Error fetching movie details:', error);
    } finally {
      this.loading = false;
    }
  }
}

const movieDetailsStore = new MovieDetailsStore();
export default movieDetailsStore;
