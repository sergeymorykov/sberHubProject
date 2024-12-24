import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from './router';
import { store } from '../../store';

const Main = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  );
};

export default Main;
