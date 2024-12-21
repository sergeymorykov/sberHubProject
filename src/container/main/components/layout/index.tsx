import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Body from './body';

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Body>
        <Outlet />
      </Body>
    </>
  );
};

export default Layout;
