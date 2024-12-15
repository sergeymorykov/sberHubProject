import * as React from 'react';
import { TextFieldStyled } from './index.style';

const Name = ({id, label, name, autoComplete, className = null}): React.ReactElement => {
    return (
        <TextFieldStyled
            required
            fullWidth
            id={id}
            label={label}
            name={name}
            autoComplete={autoComplete}
            className={className}
        />
    );
}

export default Name;