import { combineReducers } from '@reduxjs/toolkit';

import { articlesApi } from '@/store/articles/articles.slice.ts';
import { authApi } from '@/store/authentication/auth.api.ts';
import authReducer from '@/store/authentication/auth.slice.ts';

export const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [articlesApi.reducerPath]: articlesApi.reducer,
});
