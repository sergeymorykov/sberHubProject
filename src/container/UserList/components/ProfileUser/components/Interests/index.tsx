import React from 'react';
import { BoxStyled } from './index.style';
import { Typography } from '@mui/material';

interface InterestsProps {
  interests?: string[];
}

const Interests = ({ interests }: InterestsProps): React.ReactElement => {
  return <BoxStyled>{interests?.map((interest, index) => <Typography key={index}>{interest}</Typography>)}</BoxStyled>;
};

export default Interests;
