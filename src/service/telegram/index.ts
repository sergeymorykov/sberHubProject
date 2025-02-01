import { network } from '../network';

export interface telegramItem {
  chat_id: number | string;
  text: string;
}

class TelegramService {
  async sendMessageBot(data: telegramItem) {
    const res = await network.post<string | void>(`/telegram`, data);
    return res.data;
  }
}

export const telegramService = new TelegramService();
