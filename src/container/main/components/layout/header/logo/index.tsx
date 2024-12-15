import React from 'react';
import styled from '@emotion/styled';
import logoPng from './logo.png';

const LogoStyled = styled.img`
  height: 40px;
  padding: 8px;
`;

const Logo = () => {
  return <LogoStyled src={logoPng} alt={'logo'} />;
};

export default Logo;
