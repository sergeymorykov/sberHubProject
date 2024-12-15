import * as React from 'react';
import { AboutStyled } from './index.style';

const About = ({rows, id, label, name, placeholder="Введите текст...", className = null}): React.ReactElement => {
    return (
        <AboutStyled
            fullWidth
            multiline
            rows={rows}        
            id={id}
            label={label}
            name={name}
            placeholder={placeholder}
            className={className}
        />
    );
}

export default About;