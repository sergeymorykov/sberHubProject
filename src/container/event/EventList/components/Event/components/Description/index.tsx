import React from 'react';
import { DescriptionProps } from './types';
import { DescriptionStyled } from './index.style';

const Description = ({ text }: DescriptionProps): React.ReactElement => {
  return <DescriptionStyled>{text}</DescriptionStyled>;
};

export default Description;
