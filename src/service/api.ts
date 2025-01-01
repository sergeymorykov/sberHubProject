// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery, QueryReturnValue } from '@reduxjs/toolkit/query/react';
import { GetInterestsResponse } from './interests/types';
import { interestsService } from './interests';
import { userItem, GetUserResponse, GetUsersResponse } from './users/types';
import { usersService } from './users';

const createQueryFromPromise =
  <ARGS, RES>(fn: (...args: Array<ARGS>) => Promise<RES>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (...args): Promise<QueryReturnValue<RES, any, any>> => {
    try {
      const data = await fn(...args);
      return { data };
    } catch (e: unknown) {
      return { error: e };
    }
  };

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getInterests: builder.query<GetInterestsResponse, undefined>({
      queryFn: createQueryFromPromise(() => interestsService.getInterests())
    }),
    getUsers: builder.query<GetUsersResponse, undefined>({
      queryFn: createQueryFromPromise(() => usersService.getUsers())
    }),
    getUser: builder.query<GetUserResponse, { id: number | string }>({
      queryFn: createQueryFromPromise(({ id }) => usersService.getUser(id))
    }),
    updateUser: builder.mutation<GetUserResponse, { id: number | string; data: userItem }>({
      queryFn: createQueryFromPromise(({ id, data }) => usersService.updateUser(id, data))
    }),
    createUser: builder.mutation<GetUserResponse, { data: userItem }>({
      queryFn: createQueryFromPromise(({ data }) => usersService.createUser(data))
    })
  })
});

export const { useGetInterestsQuery, useGetUsersQuery, useGetUserQuery, useCreateUserMutation, useUpdateUserMutation } =
  api;
