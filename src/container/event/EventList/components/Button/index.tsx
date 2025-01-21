import * as React from 'react';
import { ButtonContainerStyled, ButtonStyled } from './index.style';
import { ButtonProps } from './types';

const Button = ({ children }: ButtonProps): React.ReactElement => {
  return (
    <ButtonContainerStyled>
      <ButtonStyled type="submit" variant="contained">
        {children}
      </ButtonStyled>
    </ButtonContainerStyled>
  );
};

export default Button;
