import React, {useEffect} from 'react';
import Main from './container/main';
import useTelegram from './hooks/useTelegram';

const App = () => { 
  const { isScriptLoaded, tg } = useTelegram();
  
  useEffect(() => {
    
    if (isScriptLoaded && tg) {
      tg.ready(); // Инициализация WebApp после загрузки скрипта
      console.log('Telegram WebApp готов:', tg);
    }

    
  }, []);

  return <Main />;
};

export default App;
