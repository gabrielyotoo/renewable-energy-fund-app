import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as fundApi from '@app/api/fund';
import { FundDetails } from '@app/models/fund';

export const fetchFundDetails = createAsyncThunk(
  'fund/fetchDetails',
  async (fundId: string) => await fundApi.getFundDetails(fundId)
);

interface FundState {
  detail: FundDetails | null;
  loading: boolean;
}

const initialState: FundState = {
  detail: null,
  loading: false,
};

export const fundSlice = createSlice({
  name: 'fund',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFundDetails.pending, (state) => {
      state.loading = true;
      state.detail = null;
    });
    builder.addCase(fetchFundDetails.fulfilled, (state, action) => {
      state.detail = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchFundDetails.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default fundSlice.reducer;
