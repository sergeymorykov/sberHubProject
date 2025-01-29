import React, { useState } from 'react';
import { Avatar, Typography, Box, CircularProgress } from '@mui/material';
import { Grid2Styled } from './index.styled';
import Interests from './components/Interests';
import About from './components/About';
import Like from './components/Like';
import Dislike from './components/Dislike';
import { useGetPartialUsersQuery, useLikeMutation, useDislikeMutation } from '../../../../service/api';

const ProfileUser = (): React.ReactElement => {
  const user_id = JSON.parse(localStorage.getItem('user') || '{}')?.id;
  const [page, SetPage] = useState(Number(localStorage.getItem('page')) || 1);
  const { user, isLoading, error } = useGetPartialUsersQuery(
    { pageSize: 1, page: page },
    {
      selectFromResult: (result) => ({
        user: result.data?.[0],
        isLoading: result.isLoading,
        error: result.error
      })
    }
  );

  const [like] = useLikeMutation();
  const [dislike] = useDislikeMutation();
  const handleActionClick = async (action: 'like' | 'dislike') => {
    const mutation = action === 'like' ? like : dislike;
    const result = await mutation({ from_id: user_id, to_id: user.id });
    if (!result.error) {
      SetPage((page) => {
        const newPage = page + 1;
        localStorage.setItem('page', String(newPage));
        return newPage;
      });
    }
  };

  const handleLikeClick = () => handleActionClick('like');
  const handleDislikeClick = () => handleActionClick('dislike');

  return (
    <>
      {isLoading && <CircularProgress />}
      {error && <div>Произошла ошибка</div>}
      {user && (
        <Grid2Styled>
          <Avatar alt={'фотография пользователя'} src={user.photo} sx={{ width: 150, height: 150 }} />
          <Typography variant="h6" sx={{ p: 1 }}>
            {user.username}
          </Typography>
          <Interests interests={user?.interests} />
          <About>{user.about} </About>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Like onClick={handleLikeClick} />
            <Dislike onClick={handleDislikeClick} />
          </Box>
        </Grid2Styled>
      )}
    </>
  );
};

export default ProfileUser;
