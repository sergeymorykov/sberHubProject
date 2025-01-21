import React from 'react';
import { TitleProps } from './types';
import { TitleStyled } from './index.style';

const Title = ({ children }: TitleProps): React.ReactElement => {
  return <TitleStyled>{children}</TitleStyled>;
};

export default Title;
