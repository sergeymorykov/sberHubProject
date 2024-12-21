import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Main from './main';

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
