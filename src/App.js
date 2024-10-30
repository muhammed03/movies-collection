import React from 'react';
import { Provider } from 'mobx-react';
import rootStore from './store/RootStore';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import FavoritesPage from './pages/FavoritesPage';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Provider rootStore={rootStore}>
      <Navigation />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
