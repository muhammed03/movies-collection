import { makeAutoObservable } from 'mobx';

class FavoritesStore {
  constructor() {
    this.favorites = [];
    makeAutoObservable(this);
  }

  addFavorite(movie) {
    if (!this.favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      this.favorites.push(movie);
    }
  }

  removeFavorite(movie) {
    this.favorites = this.favorites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
  }

  isFavorite(movie) {
    return this.favorites.some((fav) => fav.imdbID === movie.imdbID);
  }
}

const favoritesStore = new FavoritesStore();
export default favoritesStore;
