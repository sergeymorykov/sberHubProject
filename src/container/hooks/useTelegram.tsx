
declare global {
    interface Window {
      Telegram: {
        WebApp: any;
      };
    }
  }

const useTelegram = () => {

    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user_id: tg.initDataUnsafe?.user?.id,
        user: tg.initDataUnsafe?.user,
        username: tg.initDataUnsafe?.user?.username,
        queryId: tg.initDataUnsafe?.query_id
    }
}

export default useTelegram;