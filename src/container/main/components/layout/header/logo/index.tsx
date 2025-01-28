import React from 'react';
import styled from '@emotion/styled';
import logoPng from './logo.png';

const ImgStyled = styled.img`
  height: 40px;
  padding: 8px;
`;

const Logo = () => {
  return <ImgStyled src={logoPng} alt={'logo'} />;
};

export default Logo;
