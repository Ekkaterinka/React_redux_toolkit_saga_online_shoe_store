import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  errors: false,
  list: [],
};

const topSalesSlice = createSlice({
  name: "topSales",
  initialState,
  reducers: {
    getTopSales: (state) => {
      state.loading = true;
    },
    getTopSalesSuccess: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
      state.errors = false;
    },
    getTopSalesError: (state) => {
      state.loading = false;
      state.errors = true;
    }
  }
});

export const {
    getTopSales,
    getTopSalesSuccess,
    getTopSalesError
} = topSalesSlice.actions;

export default topSalesSlice.reducer;