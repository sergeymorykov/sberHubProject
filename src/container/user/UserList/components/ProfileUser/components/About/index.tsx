import React from 'react';
import { AboutStyled } from './index.style';

interface AboutProps {
  children: React.ReactNode;
}

const About = ({children}: AboutProps): React.ReactElement => {
  return <AboutStyled variant="body2">{children}</AboutStyled>;
}

export default About;