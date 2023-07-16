import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as homeApi from '@app/api/home';
import { FundPreview } from '@app/models/fund';

export const fetchFunds = createAsyncThunk(
  'home/fetchFunds',
  async () => await homeApi.getFundsPreview()
);

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFunds.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFunds.fulfilled, (state, action) => {
      state.funds = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchFunds.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default homeSlice.reducer;
