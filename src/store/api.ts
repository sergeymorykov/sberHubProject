// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery, QueryReturnValue } from '@reduxjs/toolkit/query/react';
import { GetInterestResponse } from '../service/interest/types';
import { interestService } from '../service/interest';

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
    getInterest: builder.query<GetInterestResponse, undefined>({
      queryFn: createQueryFromPromise(() => interestService.getInterest())
    })
  })
});

export const { useGetInterestQuery } = api;
