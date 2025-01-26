import React, { ReactNode } from 'react';
import { BoxStyled } from './index.style';
import { Container } from '@mui/material';

export const Body = ({ children }: { children: ReactNode }): React.ReactElement => {
  return (
    <Container component="main" maxWidth="xs">
      <BoxStyled>{children}</BoxStyled>
    </Container>
  );
};

export default Body;
