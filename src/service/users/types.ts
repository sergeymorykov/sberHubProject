import { InterestsItem } from "../interests/types";

export interface usersItem {
    id: number;
    username: string;
    photo: string | null;
    about: string | null;
    email: string | null;
    interest: Array<InterestsItem> | null;
}

export type GetUsersResponse = Array<usersItem>;