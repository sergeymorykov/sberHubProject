import React, {use, useEffect} from 'react';
import Main from './container/main';
import useTelegram from './hooks/useTelegram';
import Header from './container/main/components/layout/header';
import Body from './container/main/components/layout/body';
import ErrorPage from './container/error';
import { ErrorPageCode } from './container/error/types';

const App = () => { 
  const { isScriptLoaded, tg, user_id } = useTelegram();
  const [isTelegram, setIsTelegram] = React.useState(false);
  
  useEffect(() => {
    if (isScriptLoaded && tg) {
      tg.ready(); // Инициализация WebApp после загрузки скрипта
      console.log('Telegram WebApp готов:', tg);
      setIsTelegram(true);      
    }
    
    if(user_id) {
      setIsTelegram(true);
    }

  }, []);
  if (isTelegram) {
    return <Main />;
  }
  else {
    return(
      <>
        <Body>
          <ErrorPage 
            errorCode={ErrorPageCode.NOT_FOUND}
            errorTitle="Undefined Source"
            errorInfo="Предназначено только для Telegram"
          />
        </Body>
      </>
    );
  }
};

export default App;
