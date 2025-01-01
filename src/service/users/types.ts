import { InterestsItem } from '../interests/types';

export interface userItem {
  id: number;
  username: string;
  photo: string | null;
  about: string | null;
  email?: string | null;
  interests: Array<InterestsItem> | null;
}

export type GetUserResponse = userItem;
export type GetUsersResponse = Array<userItem>;
