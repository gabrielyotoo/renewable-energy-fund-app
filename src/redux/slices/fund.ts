import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { FundDetails } from '@app/models/fund';

interface FundState {
  id: string | null;
  type: 'wind' | 'sun' | 'biomass' | 'geothermal' | 'hydroelectric' | null;
  name: string | null;
  amount: number | null;
  priceDifferent: 'up' | 'down' | null;
  priceChangePercentage: number | null;
  priceChange: number[] | null;
  aum: number | null;
  issueDate: string | null;
  vintage: string | null;
  ter: number | null;
  priceAtClose: number | null;
  priceAtOpen: number | null;
  loading: boolean;
}

const initialState: FundState = {
  id: null,
  type: null,
  name: null,
  amount: null,
  priceDifferent: null,
  priceChangePercentage: null,
  priceChange: null,
  aum: null,
  issueDate: null,
  vintage: null,
  ter: null,
  priceAtClose: null,
  priceAtOpen: null,
  loading: false,
};

export const fundSlice = createSlice({
  name: 'fund',
  initialState,
  reducers: {
    setFund: (state, action: PayloadAction<FundDetails>) => {
      state = { ...action.payload, loading: false };
    },
    resetFund: (state) => {
      state = initialState;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setFund, resetFund, setLoading } = fundSlice.actions;

export default fundSlice.reducer;
