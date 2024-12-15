import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    };
  }
}

const useTelegram = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Проверяем, был ли скрипт уже загружен
    if (!window.Telegram) {
      // Если Telegram API еще не доступен, загружаем скрипт
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-web-app.js';
      script.async = true;
      script.onload = () => {
        setIsScriptLoaded(true); // Скрипт загружен
      };
      script.onerror = () => {
        console.error('Ошибка при загрузке Telegram Web App SDK');
      };
      document.body.appendChild(script);
    } else {
      // Если Telegram Web App уже доступен, просто обновляем состояние
      setIsScriptLoaded(true);
    }
  }, []);

  // Логика, которая будет выполняться, когда скрипт загружен
  const tg = window.Telegram?.WebApp;

  const onClose = () => {
    tg?.close();
  };

  const onToggleButton = () => {
    if (tg?.MainButton?.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    isScriptLoaded,
    onClose,
    onToggleButton,
    tg,
    user_id: tg?.initDataUnsafe?.user?.id,
    user: tg?.initDataUnsafe?.user,
    username: tg?.initDataUnsafe?.user?.username,
    queryId: tg?.initDataUnsafe?.query_id,
  };
};

export default useTelegram;
