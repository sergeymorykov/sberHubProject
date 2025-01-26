import React, { ReactNode } from 'react';
import { InfoStyled } from './index.style';

const Info = ({ children }: { children: ReactNode }): React.ReactElement => {
  return <InfoStyled>{children}</InfoStyled>;
};

export default Info;
