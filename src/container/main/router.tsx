import React, { useState, useEffect, use } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SingUpPage from '../signup';
import ErrorPage from '../error';
import { ErrorPageCode } from '../error/types';
import { getNavigationsValue } from '@brojs/cli';
import Layout from './components/layout';

export const router = createBrowserRouter([
  {
    path: getNavigationsValue('sberhubproject.main'),
    element: <Layout />,
    children: [
      {
        path: getNavigationsValue('sberhubproject.signup'),
        element: <SingUpPage />
      },
      {
        path: '*',
        element: 
          <ErrorPage
           errorCode={ErrorPageCode.NOT_FOUND} 
           errorTitle="Undefined app name"
           errorInfo="Вы запросили приложение по адресу undefined"
          />
      }
    ]
  }
]);
