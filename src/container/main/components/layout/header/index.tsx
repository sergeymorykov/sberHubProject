import React from 'react';
import Logo from './Logo';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header = (): React.ReactElement => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
