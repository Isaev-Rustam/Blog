import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/types/user.ts';
import { LocalStorage } from '@/services';

const getUserFromStorage = (): User | null => LocalStorage.get('user');

interface CounterState {
  user: User | null;
}

const initialState: CounterState = {
  user: getUserFromStorage(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User | null>) => {
      state.user = payload;
    },
  },
});

export const { setUser } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
