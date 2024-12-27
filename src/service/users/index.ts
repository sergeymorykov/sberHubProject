import {network} from '../network';
import { GetUsersResponse } from './types';

class UsersService {
    async getUsers() {
        const res = await network.get<GetUsersResponse>(`/users`);
        return res.data;
    }
    async getUser(id: number | string) {
        const res = await network.get<GetUsersResponse>(`/users/${id}`);
        return res.data;
    }

    async updateUser(id: number | string, data: any) {
        const res = await network.put<GetUsersResponse>(`/users/${id}`, data);
        return res.data;
    }

    async createUser(data: any) {
        const res = await network.post<GetUsersResponse>(`/users`, data);
        return res.data;
    }
}

export const usersService = new UsersService();