import React from 'react';
import { TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import movieStore from '../store/MovieStore';

const SearchBar = observer(() => {
  const handleChange = (event) => {
    movieStore.setSearchQuery(event.target.value);
    movieStore.fetchMovies();
  };

  return (
    <TextField
      label="Поиск фильмов"
      variant="outlined"
      fullWidth
      value={movieStore.searchQuery}
      onChange={handleChange}
      sx={{ marginBottom: 3 }}
    />
  );
});

export default SearchBar;
