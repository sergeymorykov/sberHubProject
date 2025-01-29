import { Container } from '@mui/material';
import { ErrorPageProps } from './types';
import React from 'react';
import Title from './components/Title';
import Info from './components/Info';
import IconError from './components/IconError';

const ErrorPage = ({ errorCode, errorTitle, errorInfo }: ErrorPageProps): React.ReactElement => {
  return (
    <Container>
      <Title>{errorTitle}</Title>
      <Info>{errorInfo}</Info>
      <IconError errorCode={errorCode} />
    </Container>
  );
};

export default ErrorPage;
