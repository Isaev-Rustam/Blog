import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '@/utils/base-url.ts';
import { User } from '@/types/user.ts';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['authApi'],
  endpoints: (build) => ({
    login: build.mutation<User, Pick<User['user'], 'email' | 'password'>>({
      query: (payload) => ({
        url: 'users/login',
        method: 'POST',
        body: { user: payload },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
