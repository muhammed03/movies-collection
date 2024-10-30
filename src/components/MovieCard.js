import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import favoritesStore from '../store/FavoritesStore';

const MovieCard = observer(({ movie, onSelect }) => {
  const isFavorite = favoritesStore.isFavorite(movie);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      favoritesStore.removeFavorite(movie);
    } else {
      favoritesStore.addFavorite(movie);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 3,
        transition: '0.3s',
        '&:hover': { boxShadow: 6 },
        marginBottom: 2,
      }}
    >
      <CardMedia
        component="img"
        alt={movie.Title}
        height="150"
        image={movie.Poster}
      />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.Year}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => onSelect(movie.imdbID)}
            sx={{ marginTop: 1 }}
          >
            Подробнее
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleFavoriteToggle}
            sx={{ marginTop: 1, marginLeft: 1 }}
          >
            {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
});

export default MovieCard;
