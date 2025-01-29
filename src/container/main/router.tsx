import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SingUpPage from '../SignUp';
import EditUser from '../EditUser';
import ErrorPage from '../ErrorPage';
import UserList from '../UserList';
import { ErrorPageCode } from '../ErrorPage/types';
import { getNavigationsValue } from '@brojs/cli';
import Layout from './components/layout';
import EventList from '../EventList';
import EventForm from '../EventForm';

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
        element: <EditUser />
      },
      {
        path: getNavigationsValue('sberhubproject.eventList'),
        element: <EventList />
      },
      {
        path: getNavigationsValue('sberhubproject.eventForm'),
        element: <EventForm />
      },
      {
        path: getNavigationsValue('sberhubproject.userList'),
        element: <UserList />
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
