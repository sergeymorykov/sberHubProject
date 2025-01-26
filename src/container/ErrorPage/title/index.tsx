import React, { ReactNode } from 'react';
import { TitleStyled } from './index.style';

const Title = ({ children }: { children: ReactNode }): React.ReactElement => {
  return <TitleStyled>{children}</TitleStyled>;
};

export default Title;
