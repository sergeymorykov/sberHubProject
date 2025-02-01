import { network } from '../network';
import { GetGigachatResponse } from './types';

class GigachatService {
  async GetResponseGigachat(text: string) {
    const res = await network.post<GetGigachatResponse>(`/gigachat`, text);
    return res.data;
  }
}

export const gigachatService = new GigachatService();
