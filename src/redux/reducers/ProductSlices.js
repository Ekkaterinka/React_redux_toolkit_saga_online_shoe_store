import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  errors: false,
  data: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.errors = false;
    },
    getProductError: (state) => {
      state.loading = false;
      state.errors = true;
    }
  }
});

export const {
    getProduct,
    getProductSuccess,
    getProductError
} = productSlice.actions;

export default productSlice.reducer;