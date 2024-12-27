import * as React from 'react';
import { TextFieldStyled } from './index.style';

const Name = ({id, label, name, autoComplete, className = null, defaultValue = null}): React.ReactElement => {
    return (
        <TextFieldStyled
            isRequired={true}
            id={id}
            label={label}
            name={name}
            autoComplete={autoComplete}
            className={className}
            defaultValue={defaultValue}
        />
    );
}

export default Name;