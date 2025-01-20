import * as React from 'react';
import { TextFieldStyled } from './index.style';
import { NameProps } from './types';

const Name = ({
  id,
  label,
  name,
  className = null
}: NameProps): React.ReactElement => {
  return (
    <TextFieldStyled
      isRequired={true}
      id={id}
      label={label}
      name={name}
      className={className}
    />
  );
};

export default Name;
