import React from 'react';
import { InterestsItem } from '../../../../../../../service/interests/types';
import { BoxStyled } from './index.style';
import { Typography } from '@mui/material';

interface InterestsProps {
  interests?: InterestsItem[];
}

const Interests = ({ interests }: InterestsProps): React.ReactElement => {
  return (
    <BoxStyled>
      {interests?.map((interest, index) => (
        <Typography key={index}>{interest.value}</Typography>
      ))}
    </BoxStyled>
  );
};

export default Interests;
