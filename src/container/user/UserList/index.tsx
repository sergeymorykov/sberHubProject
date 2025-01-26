import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';
import ProfileUser from './components/ProfileUser';
import { useGetUsersQuery } from '../../../service/api';
import useTelegram from '../../../hooks/useTelegram';
import Title from './components/Title';

const ListUsers = (): React.ReactElement => {
    const { data, isLoading, error } = useGetUsersQuery(undefined);
    const { user_id } = useTelegram();
    
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
      <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Произошла ошибка</div>}
      {data && 
        <Paper elevation={3} sx={{ p: 1, borderRadius: '15px'}}>
          <Box
            sx={{
              display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
              <Title>Профиль пользователя</Title>
              <ProfileUser user={data[0]} />
          </Box>
        </Paper>
      }
      </>
      
    );
}

export default ListUsers;
