import { network } from '../network';
import { GetEventsResponse } from './types';

class EventsService {
  async getEvents() {
    const res = await network.get<GetEventsResponse>('/events');
    return res.data;
  }
}

export const eventsService = new EventsService();
