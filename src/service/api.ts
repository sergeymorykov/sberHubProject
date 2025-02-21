// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery, QueryReturnValue } from '@reduxjs/toolkit/query/react';
import { GetInterestsResponse } from './interests/types';
import { interestsService } from './interests';
import { userItem, GetUserResponse, GetUsersResponse } from './users/types';
import { usersService } from './users';
import { EventItem, GetEventsResponse } from './events/types';
import { eventsService } from './events';
import { GetGigachatResponse } from './gigachat/types';
import { gigachatService } from './gigachat';
import { telegramService } from './telegram';

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
    getPartialUsers: builder.query<GetUsersResponse, { pageSize: number; page: number }>({
      queryFn: createQueryFromPromise(({ pageSize, page }) => usersService.getPartialUsers(pageSize, page))
    }),
    getUser: builder.query<GetUserResponse, { id: number | string }>({
      queryFn: createQueryFromPromise(({ id }) => usersService.getUser(id))
    }),
    updateUser: builder.mutation<string | void, { id: number | string; data: userItem }>({
      queryFn: createQueryFromPromise(({ id, data }) => usersService.updateUser(id, data))
    }),
    createUser: builder.mutation<string | void, { data: userItem }>({
      queryFn: createQueryFromPromise(({ data }) => usersService.createUser(data))
    }),
    like: builder.mutation<string | void, { from_id: number | string; to_id: number | string }>({
      queryFn: createQueryFromPromise(({ from_id, to_id }) => usersService.like(from_id, to_id))
    }),
    dislike: builder.mutation<string | void, { from_id: number | string; to_id: number | string }>({
      queryFn: createQueryFromPromise(({ from_id, to_id }) => usersService.dislike(from_id, to_id))
    }),
    getEvents: builder.query<GetEventsResponse, undefined>({
      queryFn: createQueryFromPromise(() => eventsService.getEvents())
    }),
    getPartialEvents: builder.query<GetEventsResponse, { pageSize: number; page: number }>({
      queryFn: createQueryFromPromise(({ pageSize, page }) => eventsService.getPartialEvents(pageSize, page)),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
    }),
    createEvent: builder.mutation<string | void, { data: EventItem }>({
      queryFn: createQueryFromPromise(({ data }) => eventsService.createEvent(data))
    }),
    deleteEvent: builder.mutation<string | void, { id: number }>({
      queryFn: createQueryFromPromise(({ id }) => eventsService.deleteEvent(id))
    }),
    participateEvent: builder.mutation<string | void, { user_id: string | number; id: number }>({
      queryFn: createQueryFromPromise(({ user_id, id }) => eventsService.participateEvent(user_id, id))
    }),
    refuseEvent: builder.mutation<string | void, { user_id: string | number; id: number }>({
      queryFn: createQueryFromPromise(({ user_id, id }) => eventsService.refuseEvent(user_id, id))
    }),
    getResponseGigachat: builder.query<GetGigachatResponse, { text: string }>({
      queryFn: createQueryFromPromise(({ text }) => gigachatService.GetResponseGigachat(text))
    }),
    sendMessageBot: builder.mutation<string | void, { chat_id: number | string; text: string }>({
      queryFn: createQueryFromPromise(({ chat_id, text }) => telegramService.sendMessageBot({ chat_id, text }))
    })
  })
});

export const {
  useGetInterestsQuery,
  useGetUsersQuery,
  useGetPartialUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useLikeMutation,
  useDislikeMutation,
  useGetEventsQuery,
  useGetPartialEventsQuery,
  useCreateEventMutation,
  useDeleteEventMutation,
  useParticipateEventMutation,
  useRefuseEventMutation,
  useGetResponseGigachatQuery,
  useSendMessageBotMutation
} = api;
