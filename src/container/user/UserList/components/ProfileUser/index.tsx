import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import { ProfileUserProps } from './types';
import { ProfileUserStyled } from './index.styled';
import Interests from './components/Interests';
import About from './components/About';
import Like from './components/Like';
import Dislike from './components/Dislike';


const ProfileUser = ({ user }: ProfileUserProps): React.ReactElement => {

    const handleLike = () => {
        // todo Переключаемся на следующего пользователя после лайка
    };

    const handleDislike = () => {
        // todo Переключаемся на следующего пользователя после дизлайка
    };

    return (
        <ProfileUserStyled>
            <Avatar alt={user.username} src={user.photo} sx={{ width: 150, height: 150 }} />
            <Typography variant="h6">{user.username}</Typography>
            <Interests interests={user?.interests} />
            <About>{user.about} </About>            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Like />
              <Dislike />
            </Box>
        </ProfileUserStyled>
    );
}

export default ProfileUser;
