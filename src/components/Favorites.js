import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';
import favoritesStore from '../store/FavoritesStore';
import MovieList from './MovieList';

const Favorites = observer(() => {
  const favorites = favoritesStore.favorites;
  const navigate = useNavigate();
  const handleSelectMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div>
      <Typography variant="h4">Избранные фильмы</Typography>
      {favorites.length === 0 ? (
        <Typography variant="body1">Нет избранных фильмов</Typography>
      ) : (
        <MovieList movies={favorites} onSelect={handleSelectMovie} />
      )}
    </div>
  );
});

export default Favorites;
