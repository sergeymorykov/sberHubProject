import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SingUpPage from '../user/signup';
import EditUserPage from '../user/edit';
import ErrorPage from '../error';
import { ErrorPageCode } from '../error/types';
import { getNavigationsValue } from '@brojs/cli';
import Layout from './components/layout';
import EventList from '../EventList';

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
        path: getNavigationsValue('sberhubproject.editUser'),
        element: <EditUserPage />
      },
      {
        path: getNavigationsValue('sberhubproject.eventList'),
        element: <EventList />
      },
      {
        path: '*',
        element: (
          <ErrorPage
            errorCode={ErrorPageCode.NOT_FOUND}
            errorTitle="Undefined app name"
            errorInfo="Вы запросили приложение по адресу undefined"
          />
        )
      }
    ]
  }
]);
