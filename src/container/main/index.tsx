import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from './router';
import { store } from '../../store';

const Main = (): React.ReactElement => {
  localStorage.setItem(
    'user',
    JSON.stringify({
      id: 1252744945,
      username: 'Моряков Сергей',
      photo: 'https://i.pravatar.cc/150?img=50',
      about: 'Люблю путешествия и фотографию, обожаю изучать новые культуры.',
      email: 'maria.smirnova@example.com',
      interests: [
        { value: 'Путешествия и туризм', label: 'Путешествия и туризм' },
        { value: 'Искусство, фотография и дизайн', label: 'Искусство, фотография и дизайн' }
      ]
    })
  );
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default Main;
