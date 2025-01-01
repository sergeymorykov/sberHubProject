import * as React from 'react';
import { ButtonStyled } from './index.style';
import { ButtonProps } from './types';

const Button = ({ children, id = null, name = null, className = null }: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled id={id} name={name} className={className} type="submit" fullWidth variant="contained">
      {children}
    </ButtonStyled>
  );
};

export default Button;
