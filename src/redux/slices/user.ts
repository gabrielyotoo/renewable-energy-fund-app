import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  account: number;
  portfolio: number;
  loading: boolean;
}

const initialState: UserState = {
  account: 0,
  portfolio: 0,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<number>) => {
      state.account = action.payload;
      state.loading = false;
    },
    setPortfolio: (state, action: PayloadAction<number>) => {
      state.account = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setAccount, setPortfolio, setLoading } = userSlice.actions;

export default userSlice.reducer;
