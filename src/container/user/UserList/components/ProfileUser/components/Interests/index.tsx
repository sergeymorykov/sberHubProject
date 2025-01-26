import React from 'react';
import { InterestsItem } from '../../../../../../../service/interests/types';
import { InterestsStyled } from './index.style';
import { Typography } from '@mui/material';

interface InterestsProps {
  interests: InterestsItem[];
}

const Interests = ({ interests }: InterestsProps): React.ReactElement => {

  return (
    <InterestsStyled>
      {interests.map((interest, index) => (
        <Typography key={index}>
          {interest.value}
        </Typography>
      ))}
    </InterestsStyled>
  );

};

export default Interests;