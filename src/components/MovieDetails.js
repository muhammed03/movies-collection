import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import movieDetailsStore from '../store/MovieDetailsStore';
import {
  Typography,
  CircularProgress,
  Button,
  Box,
  CardMedia,
} from '@mui/material';

const MovieDetails = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    movieDetailsStore.fetchMovieDetails(id);
  }, [id]);

  const { currentMovie, loading } = movieDetailsStore;

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!currentMovie) {
    return (
      <Typography variant="h6" align="center">
        Фильм не найден
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        {currentMovie.Title}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        {currentMovie.Year}
      </Typography>

      {/* Display Movie Poster */}
      <CardMedia
        component="img"
        alt={currentMovie.Title}
        image={currentMovie.Poster}
        sx={{ maxWidth: 400, margin: '0 auto', marginBottom: 2 }}
      />

      <Typography variant="body1" paragraph>
        {currentMovie.Plot}
      </Typography>
      <Typography variant="body1">
        <strong>Жанр:</strong> {currentMovie.Genre}
      </Typography>
      <Typography variant="body1">
        <strong>Режиссер:</strong> {currentMovie.Director}
      </Typography>
      <Typography variant="body1">
        <strong>Рейтинг:</strong> {currentMovie.imdbRating}
      </Typography>

      {currentMovie.Trailer && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6" gutterBottom>
            Трейлер:
          </Typography>
          <iframe
            title="Movie Trailer"
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${currentMovie.Trailer}`}
            allowFullScreen
          ></iframe>
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={() => window.history.back()}
        sx={{ marginTop: 2 }}
      >
        Назад
      </Button>
    </Box>
  );
});

export default MovieDetails;
