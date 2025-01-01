import WebApp from '@twa-dev/sdk';

const useTelegram = () => {
  const tg = WebApp;

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
    tg,
    onClose,
    onToggleButton,
    user_id: tg?.initDataUnsafe?.user?.id,
    user: tg?.initDataUnsafe?.user,
    username: tg?.initDataUnsafe?.user?.username,
    queryId: tg?.initDataUnsafe?.query_id
  };
};

export default useTelegram;
