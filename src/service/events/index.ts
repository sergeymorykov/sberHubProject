import { network } from '../network';
import { GetEventsResponse, EventItem } from './types';

class EventsService {
  async getEvents(): Promise<EventItem[]> {
    const res = await network.get<GetEventsResponse>('/events');
    return res.data;
  }

  async getPartialUsers(pageSize: number, page: number): Promise<EventItem[]> {
    const res = await network.get<GetEventsResponse>(`/users/${pageSize}/${page}`);
    return res.data;
  }

  async createEvent(data: EventItem ) {
    const res = await network.post<string | void>('/events', data);
    return res.data;
  }

  async participateEvent(user_id: string | number, id: number) {
    const res = await network.post<string | void>(`/events/${user_id}/participate/${id}`);
    return res.data;
  }
  
  async refuseEvent(user_id: string | number, id: number) {
    const res = await network.post<string | void>(`/events/${user_id}/refuse/${id}`);
    return res.data;
  }

  async deleteEvent(id: number) {
    const res = await network.delete<string | void>(`/events/${id}`);
    return res.data;
  }

}

export const eventsService = new EventsService();
