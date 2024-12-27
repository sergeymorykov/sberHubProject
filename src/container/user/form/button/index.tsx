import * as React from 'react';
import { ButtonStyled } from './index.style';

const Button = ({children, id = null, name = null, className = null}): React.ReactElement => {
    return (
        <ButtonStyled
            id={id}
            name={name}
            className={className}
            type="submit"
            fullWidth
            variant="contained"
        >
            {children}
        </ButtonStyled>
    );
}

export default Button;