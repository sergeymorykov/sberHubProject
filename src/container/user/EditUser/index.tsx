import React from 'react';
import UserForm from '../UserForm';
import useTelegram from '../../../hooks/useTelegram';
import { useGetUserQuery } from '../../../service/api';

const EditUser = (): React.ReactElement => {
  const { user_id } = useTelegram();

  const { data, isLoading, error } = useGetUserQuery({ id: user_id });
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Произошла ошибка</div>}
      {data && <UserForm user={user || data} />}
    </>
  );
};

export default EditUser;
