import React from 'react';
import ProfileUser from './components/ProfileUser';
import { PaperStyled } from './index.style';
import Title from './components/Title';

const UserList = (): React.ReactElement => {
  return (
    <PaperStyled elevation={3}>
      <Title>Профиль пользователя</Title>
      <ProfileUser />
    </PaperStyled>
  );
};

export default UserList;
