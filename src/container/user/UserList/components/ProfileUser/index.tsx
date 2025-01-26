import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import { ProfileUserProps } from './types';
import { Grid2Styled } from './index.styled';
import Interests from './components/Interests';
import About from './components/About';
import Like from './components/Like';
import Dislike from './components/Dislike';

const ProfileUser = ({ user }: ProfileUserProps): React.ReactElement => {
  return (
    <Grid2Styled>
      <Avatar alt={user.username} src={user.photo} sx={{ width: 150, height: 150 }} />
      <Typography variant="h6" sx={{ p: 1 }}>
        {user.username}
      </Typography>
      <Interests interests={user?.interests} />
      <About>{user.about} </About>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Like />
        <Dislike />
      </Box>
    </Grid2Styled>
  );
};

export default ProfileUser;
