import React, { useState, useEffect, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Body from './body';
import useTelegram from '../../../../hooks/useTelegram';
import ErrorPage from '../../../error';
import { ErrorPageCode } from '../../../error/types';
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
      errorCode={ErrorPageCode.NOT_FOUND}
      errorTitle="Undefined Source"
      errorInfo="Предназначено только для Telegram"
    />
  );
};


const Layout = (): React.ReactElement => {

  return (
    <ThemeProvider theme={telegramTheme}>
      <Header />
      <Body>
        <CheckUserId>
          <Outlet />
        </CheckUserId>
      </Body>
    </ThemeProvider>
  );
};

export default Layout;
