import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import movieStore from '../store/MovieStore';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import { Container, Typography, CircularProgress, Box } from '@mui/material';

const HomePage = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    movieStore.fetchMovies();
  }, [movieStore.searchQuery]);

  const handleSelectMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#333' }}
      >
        Movie Collection
      </Typography>
      <SearchBar />
      {movieStore.loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <MovieList movies={movieStore.movies} onSelect={handleSelectMovie} />
      )}
    </Container>
  );
});

export default HomePage;
