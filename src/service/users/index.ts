import { network } from '../network';
import { GetUsersResponse, GetUserResponse } from './types';
import { userItem } from './types';

class UsersService {
  async getUsers(): Promise<userItem[]> {
    const res = await network.get<GetUsersResponse>(`/users`);
    return res.data;
  }

  async getPartialUsers(pageSize: number, page: number): Promise<userItem[]> {
    const res = await network.get<GetUsersResponse>(`/users/${pageSize}/${page}`);
    return res.data;
  }

  async getUser(id: number | string): Promise<userItem> {
    const res = await network.get<GetUserResponse>(`/users/${id}`);
    return res.data;
  }

  async updateUser(id: number | string, data: userItem) {
    const res = await network.put<string | void>(`/users/${id}`, data);
    return res.data;
  }

  async createUser(data: userItem) {
    const res = await network.post<string | void>(`/users`, data);
    return res.data;
  }

  async like(from_id: number | string, to_id: number | string) {
    const res = await network.post<void>(`/users/${from_id}/like/${to_id}`);
    return res.data;
  }

  async dislike(from_id: number | string, to_id: number | string) {
    const res = await network.post<void>(`/users/${from_id}/dislike/${to_id}`);
    return res.data;
  }
}

export const usersService = new UsersService();
