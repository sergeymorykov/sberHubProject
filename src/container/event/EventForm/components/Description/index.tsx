import React from 'react';
import { DescriptionProps } from './types';
import { DescriptionStyled } from './index.style';

const Description = ({
  rows,
  id,
  label,
  name,
  placeholder = 'Введите текст...',
  className = null,
}: DescriptionProps): React.ReactElement => {
  return (
    <DescriptionStyled
      isMultiline={true}
      rows={rows}
      id={id}
      label={label}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Description;
