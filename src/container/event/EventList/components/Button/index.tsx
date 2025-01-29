import * as React from 'react';
import { ButtonContainerStyled, ButtonStyled } from './index.style';
import { ButtonProps } from './types';

const Button = ({ children, onClick }: ButtonProps): React.ReactElement => {
  return (
    <ButtonContainerStyled>
      <ButtonStyled onClick={onClick} type="submit" variant="contained">
        {children}
      </ButtonStyled>
    </ButtonContainerStyled>
  );
};

export default Button;
