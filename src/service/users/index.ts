import { network } from '../network';
import { GetUsersResponse, GetUserResponse } from './types';
import { userItem } from './types';

class UsersService {
  async getUsers(): Promise<userItem[]> {
    const res = await network.get<GetUsersResponse>(`/users`);
    return res.data;
  }

  async getUser(id: number | string): Promise<userItem> {
    const res = await network.get<GetUserResponse>(`/users/${id}`);
    return res.data;
  }

  async updateUser(id: number | string, data: userItem) {
    const res = await network.put<GetUserResponse>(`/users/${id}`, data);
    return res.data;
  }

  async createUser(data: userItem) {
    const res = await network.post<GetUserResponse>(`/users`, data);
    return res.data;
  }
}

export const usersService = new UsersService();
