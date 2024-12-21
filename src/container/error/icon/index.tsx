import React, { useState, useEffect } from 'react';
import Gif404 from './404.gif';
import Png500 from './500.png';
import { ErrorPageCode } from '../types';
import { IconErrorStyled } from './index.style';

interface IconErrorProps {
    errorCode: number;
  }

const IconError = ({errorCode} : IconErrorProps): React.ReactElement => {

    const [icon, SetIcon] = useState<string|null>(null);
    const [isError, SetIsError] = useState<boolean>(false);

    useEffect(() => {
        switch (errorCode) {
            case ErrorPageCode.NOT_FOUND:
                SetIcon(Gif404);
                SetIsError(true);
                break;
            case ErrorPageCode.SERVER_ERROR:
                SetIcon(Png500);
                SetIsError(true);
                break;
            default:
                break;
        }
    }, []);
    if(isError){
        return <IconErrorStyled src={icon} alt="Error Icon" />;
    }
    else {
        return <div>Undefined Error</div>;
    }
};

export default IconError;

