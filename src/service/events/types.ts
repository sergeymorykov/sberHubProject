export interface EventItem {
  name: string;
  description: string;
  date: number | string | Date;
}

export type GetEventsResponse = Array<EventItem>;
