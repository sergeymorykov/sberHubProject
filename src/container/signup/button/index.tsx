import * as React from 'react';
import { RegisterButtonStyled } from './index.style';

const RegisterButton = ({children, id = null, name = null, className = null}): React.ReactElement => {
    return (
        <RegisterButtonStyled
            id={id}
            name={name}
            className={className}
            type="submit"
            fullWidth
            variant="contained"
        >
            {children}
        </RegisterButtonStyled>
    );
}

export default RegisterButton;