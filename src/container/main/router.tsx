import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SingUpPage from '../signup';
import { getNavigationsValue } from '@brojs/cli';
import Layout from './components/layout';

export const router = createBrowserRouter([
  {
    path: getNavigationsValue('sberhubproject.signup'),
    element: <Layout />,
    children: [
      {
        path: getNavigationsValue('sberhubproject.signup'),
        element: <SingUpPage />
      }
    ]
  }
]);
