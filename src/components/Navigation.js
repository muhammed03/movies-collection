import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', color: '#fff' }}
        >
          Movie App
        </Typography>
        <Box>
          <Button
            component={Link}
            to="/"
            sx={{ color: '#fff', marginRight: 2 }}
          >
            Главная
          </Button>
          <Button component={Link} to="/favorites" sx={{ color: '#fff' }}>
            Избранные
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
