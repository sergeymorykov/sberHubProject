import * as React from 'react';;
import { InfoStyled } from './index.style';

const Info = ({children}): React.ReactElement => {
    return (
        <InfoStyled>
            {children}
        </InfoStyled>
    );
}

export default Info;