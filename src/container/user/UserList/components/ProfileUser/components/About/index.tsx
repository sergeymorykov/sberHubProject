import React from 'react';
import { TypographyStyled } from './index.style';

interface AboutProps {
  children: React.ReactNode;
}

const About = ({ children }: AboutProps): React.ReactElement => {
  return <TypographyStyled variant="body2">{children}</TypographyStyled>;
};

export default About;
