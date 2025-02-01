import React, { useState } from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import { Grid2Styled } from './index.styled';
import Interests from './components/Interests';
import About from './components/About';
import Like from './components/Like';
import Dislike from './components/Dislike';
import {
  useGetPartialUsersQuery,
  useLikeMutation,
  useDislikeMutation,
  useSendMessageBotMutation
} from '../../../../service/api';
import Compatibility from './components/Compatibility';
import Loading from '../../../components/Loading';
import useTelegram from '../../../../hooks/useTelegram';

const ProfileUser = (): React.ReactElement => {
  const { tg } = useTelegram();
  const liker = JSON.parse(localStorage.getItem('user') || '{}');
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
  const [sendMessageBot] = useSendMessageBotMutation();
  const handleActionClick = async (action: 'like' | 'dislike') => {
    const mutation = action === 'like' ? like : dislike;
    const result = await mutation({ from_id: liker?.id, to_id: user.id });
    if (!result.error) {
      SetPage((page) => {
        const newPage = page + 1;
        localStorage.setItem('page', String(newPage));
        return newPage;
      });
      if (action === 'like') {
        await sendMessageBot({
          chat_id: user.id,
          text: `К вам проявил интерес пользователь @${tg?.initDataUnsafe?.user}`
        });
      }
    }
  };

  const handleLikeClick = () => handleActionClick('like');
  const handleDislikeClick = () => handleActionClick('dislike');

  return (
    <>
      {isLoading && <Loading />}
      {error && <div>Произошла ошибка</div>}
      {user && (
        <Grid2Styled>
          <Avatar alt={'фотография пользователя'} src={user.photo} sx={{ width: 150, height: 150 }} />
          <Typography variant="h6" sx={{ p: 1 }}>
            {user.username}
          </Typography>
          <Interests interests={user?.interests} />
          <About>{user.about} </About>
          <Compatibility infoUser1={liker?.interests?.join(', ')} infoUser2={user?.interests?.join(', ')} />
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
