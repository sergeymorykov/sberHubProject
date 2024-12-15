import React from 'react';
import Logo from './logo';
import { AppBarStyled } from './index.style';
import Toolbar from '@mui/material/Toolbar';

const Header = (): React.ReactElement => {
  return (
    <header>
      <AppBarStyled position="static">
        <Toolbar>
          <Logo />
        </Toolbar>          
      </AppBarStyled>
    </header>
  );
};

export default Header;