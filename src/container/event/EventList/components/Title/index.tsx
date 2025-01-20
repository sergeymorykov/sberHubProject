import React from 'react';
import { TitleProps } from './types';
import { TitleStyled } from './index.style';

const Title = ({ text }: TitleProps): React.ReactElement => {
  return <TitleStyled>{text}</TitleStyled>;
};

export default Title;
