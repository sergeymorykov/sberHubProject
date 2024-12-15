import * as React from 'react';;
import { TitleStyled } from './index.style';

const Title = ({children}): React.ReactElement => {
    return (
        <TitleStyled>
            {children}
        </TitleStyled>
    );
}

export default Title;