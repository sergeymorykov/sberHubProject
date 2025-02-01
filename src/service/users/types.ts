export interface userItem {
  id: number;
  username: string;
  photo: string;
  about: string;
  email?: string;
  interests: string[];
}

export type GetUserResponse = userItem;
export type GetUsersResponse = Array<userItem>;
