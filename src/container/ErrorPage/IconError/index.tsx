import React from 'react';
import { ErrorPageCode } from '../types';
import { Error404 } from './Error404';
import { Error500 } from './Error500';

interface IconErrorProps {
  errorCode: number;
}

const IconError = ({ errorCode }: IconErrorProps): React.ReactElement => {
  switch (errorCode) {
    case ErrorPageCode.NOT_FOUND:
      return <Error404 />;
    case ErrorPageCode.SERVER_ERROR:
      return <Error500 />;
    default:
      return <div>Undefined Error</div>;
  }
};

export default IconError;
