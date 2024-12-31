import React from 'react';
import UserForm from '../form';
import useTelegram from '../../../hooks/useTelegram';
import { useGetUserQuery } from '../../../service/api';
import ErrorPage from '../../error';
import { ErrorPageCode } from '../../error/types';

const EditUserPage = (): React.ReactElement => {

  const {user_id} = useTelegram();

  const {data, isLoading, error} = useGetUserQuery({id: user_id});
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Произошла ошибка</div>}
      {data && <UserForm user={data} />}
    </>
  );  
  
};

export default EditUserPage;