import * as React from 'react';
import { AboutStyled } from './index.style';
import { AboutProps } from './types';

const About = ({
  rows,
  id,
  label,
  name,
  placeholder = 'Введите текст...',
  className = null,
  defaultValue = null
}: AboutProps): React.ReactElement => {
  return (
    <AboutStyled
      isMultiline={true}
      rows={rows}
      id={id}
      label={label}
      name={name}
      placeholder={placeholder}
      className={className}
      defaultValue={defaultValue}
    />
  );
};

export default About;
