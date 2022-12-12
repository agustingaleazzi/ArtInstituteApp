import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = props => {
  const { user } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Art Institute App
          </Typography>
          <Link style={{ textDecoration: 'none', paddingRight: '2rem'  }} to='/'>
            <Typography textAlign="center">Home</Typography>
          </Link>
          <Link style={{ textDecoration: 'none', paddingRight: '2rem'  }} to='/grid'>
            <Typography textAlign="center">Grid</Typography>
          </Link>
          <Link style={{ textDecoration: 'none', paddingRight: '2rem' }} to='/favoritas'>
            <Typography>Favoritas<IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FavoriteIcon />
            </IconButton></Typography>
            
          </Link>
          {user && (
            
          <Link style={{ textDecoration: 'none', paddingRight: '1rem' }} to='/login'>Signed in as: {user}</Link>
          ) }
          {!user && (
            <Link style={{ textDecoration: 'none', paddingRight: '1rem' }} to='/login'>Login</Link>
          ) }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Header.defaultProps = {
  user: null
};

export default Header;