import React, { useState } from 'react';
import { InputStyled } from './index.style';
import { InputProps } from './types';

const Input = ({
  id,
  label,
  name,
  rows = null,
  autoComplete = null,
  placeholder = null,
  isRequired = false,
  isMultiline = false,
  className = null,
  defaultValue = null
}: InputProps): React.ReactElement => {
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isRequired && event.target.value.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (isRequired && event.target.value.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <InputStyled
      required={isRequired}
      fullWidth
      multiline={isMultiline}
      rows={rows}
      id={id}
      label={label}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={className}
      defaultValue={defaultValue}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
    />
  );
};

export default Input;
