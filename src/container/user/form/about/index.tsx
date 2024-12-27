import * as React from 'react';
import { AboutStyled } from './index.style';

const About = ({rows, id, label, name, placeholder="Введите текст...", className = null, defaultValue = null}): React.ReactElement => {
    return (
        <AboutStyled
            isMultiline={true}
            rows={rows}        
            id={id}
            label={label}
            name={name}
            placeholder={placeholder}
            className={className}
            defaultValue={defaultValue}
        />
    );
}

export default About;