import React from 'react';
import ProfileUser from './components/ProfileUser';
import { useGetUsersQuery } from '../../../service/api';
import { PaperStyled } from './index.style';
import Title from './components/Title';
import Loading from '../../components/Loading';

const UserList = (): React.ReactElement => {
  const { data, isLoading, error } = useGetUsersQuery(undefined);

  return (
    <>
      {isLoading && <Loading />}
      {error && <div>Произошла ошибка</div>}
      {data && (
        <PaperStyled elevation={3}>
          <Title>Профиль пользователя</Title>
          <ProfileUser user={data[0]} />
        </PaperStyled>
      )}
    </>
  );
};

export default UserList;
