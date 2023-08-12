import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IArticle, IArticles } from '@/types/articles.ts';
import { Routs } from '@/types/routes.ts';
import { baseUrl } from '@/utils/base-url.ts';

export const articlesApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Article'],
  endpoints: (build) => ({
    getArticles: build.query<IArticles, void>({
      query: () => `${Routs.ARTICLES}`,
      providesTags: ['Article'],
    }),

    getArticle: build.query<{ article: IArticle }, string>({
      query: (payload) => `${Routs.ARTICLES}/${payload}`,
      providesTags: ['Article'],
    }),
    // FIXME: Нужно обозначить типы
    editArticle: build.mutation<any, any>({
      query: ({ slug, article }) => ({
        url: `${Routs.ARTICLES}/${slug}`,
        method: 'PUT',
        body: article,
        headers: {
          authorization:
            'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzhjNzQ4NjBjNjc1MWIwMGI3N2Y4OSIsInVzZXJuYW1lIjoiaW9pb2lvaW9pb3AiLCJleHAiOjE2OTQ5MDQzNjcsImlhdCI6MTY4OTcyMDM2N30.eOGY75cMSQFVKCISAjIA688WwFd_J-ScINnaeLK9FUE',
        },
      }),
      invalidatesTags: ['Article'],
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleQuery, useEditArticleMutation } = articlesApi;
