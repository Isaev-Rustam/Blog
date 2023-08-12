import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { articlesApi } from '@/store/articles/articles.slice.ts';
import { rootReducer } from '@/store/rootReducer.ts';
import { authApi } from '@/store/authentication/auth.api.ts';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
