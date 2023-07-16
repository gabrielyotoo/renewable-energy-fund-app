import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { FundPreview } from '@app/models/fund';

interface HomeState {
  funds: FundPreview[];
  loading: boolean;
}

const initialState: HomeState = {
  funds: [],
  loading: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addFund: (state, action: PayloadAction<FundPreview>) => {
      state.funds = [...state.funds, action.payload];
    },
    setFunds: (state, action: PayloadAction<FundPreview[]>) => {
      state.funds = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { addFund, setFunds, setLoading } = homeSlice.actions;

export default homeSlice.reducer;
