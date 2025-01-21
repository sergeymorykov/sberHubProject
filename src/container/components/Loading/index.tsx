import React from 'react';
import { LoadingStyled, LoadingBoxStyled } from './index.style';

const Loading = (): React.ReactElement => {
  return (
    <LoadingBoxStyled>
      <LoadingStyled></LoadingStyled>
    </LoadingBoxStyled>
  );
};

export default Loading;
