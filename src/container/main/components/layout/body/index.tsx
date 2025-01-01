import React, { ReactNode } from 'react';
import { BodyStyled } from './index.style';
import { Container } from '@mui/material';

export const Body = ({ children }: { children: ReactNode }): React.ReactElement => {
  return (
    <Container component="main" maxWidth="xs">
      <BodyStyled>{children}</BodyStyled>
    </Container>
  );
};

export default Body;
