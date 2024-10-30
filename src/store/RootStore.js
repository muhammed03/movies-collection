import movieStore from './MovieStore';
import favoritesStore from './FavoritesStore';
import movieDetailsStore from './MovieDetailsStore';

class RootStore {
  constructor() {
    this.movieStore = movieStore;
    this.favoritesStore = favoritesStore;
    this.movieDetailsStore = movieDetailsStore;
  }
}

const rootStore = new RootStore();
export default rootStore;
