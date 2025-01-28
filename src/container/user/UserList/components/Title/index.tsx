import * as React from 'react';
import { TitleStyled } from './index.style';
import { ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }): React.ReactElement => {
  return <TitleStyled>{children}</TitleStyled>;
};

export default Title;
