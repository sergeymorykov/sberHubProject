import React, { useState, useEffect, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import useTelegram from '../../../../hooks/useTelegram';
import ErrorPage from '../../../ErrorPage';
import { ErrorPageCode } from '../../../ErrorPage/types';
import { ThemeProvider } from '@mui/material/styles';
import { telegramTheme } from './theme/TelegramTheme';

const CheckUserId = ({ children }: { children: ReactNode }) => {
  const [isUserValid, setIsUserValid] = useState(null);
  const { user_id } = useTelegram();
  useEffect(() => {
    const initTelegram = async () => {
      if (user_id) {
        setIsUserValid(true);
      } else {
        setIsUserValid(false);
      }
    };

    initTelegram();
  });

  if (isUserValid === null) {
    return <h1>Loading...</h1>;
  }

  if (isUserValid) {
    return children;
  }

  return (
    <ErrorPage
      errorCode={ErrorPageCode.SERVER_ERROR}
      errorTitle="Undefined Source"
      errorInfo="Предназначено только для Telegram"
    />
  );
};

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
          <CheckUserId>
            <Outlet />
          </CheckUserId>
        </Body>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default Layout;
