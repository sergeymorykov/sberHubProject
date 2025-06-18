import React, { useState, useEffect, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Body from './body';
import useTelegram from '../../../../hooks/useTelegram';
import ErrorPage from '../../../ErrorPage';
import { ErrorPageCode } from '../../../ErrorPage/types';
import { ThemeProvider } from '@mui/material/styles';
import { telegramTheme } from './theme/TelegramTheme';

const Layout = (): React.ReactElement => {
  const outerTheme = {
    palette: {
      mode: 'dark'
    }
  };

  return (
    <ThemeProvider theme={outerTheme}>
      <ThemeProvider theme={telegramTheme}>
        <Header />
        <Body>
          <Outlet />
        </Body>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default Layout;
