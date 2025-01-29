import React from 'react';
import { DescriptionProps } from './types';
import { DescriptionStyled } from './index.style';

const Description = ({ children }: DescriptionProps): React.ReactElement => {
  return <DescriptionStyled>{children}</DescriptionStyled>;
};

export default Description;
