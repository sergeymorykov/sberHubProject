import React, {useEffect} from 'react';
import Main from './container/main';
import useTelegram from './container/hooks/useTelegram';

const App = () => {
  const { isScriptLoaded, onClose, onToggleButton, tg, user_id, username } = useTelegram();

  useEffect(() => {
    if (isScriptLoaded && tg) {
      tg.ready(); // Инициализация WebApp после загрузки скрипта
      console.log('Telegram WebApp готов:', tg);
    }
  }, [isScriptLoaded, tg]);

  return <Main />;
};

export default App;
