export interface EventItem {
  id?: number;
  name: string;
  description: string;
  date: number | string | Date;
}

export type GetEventsResponse = Array<EventItem>;
