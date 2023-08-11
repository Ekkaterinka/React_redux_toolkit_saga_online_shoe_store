import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  errors: false,
  list: [],
  search: '',
  page: '0',
  filter:'0',
};

const сatalogSlice = createSlice({
  name: "сatalog",
  initialState,
  reducers: {
    getCatalog: (state, action) => {
      state.loading = true;
      state.page = action.payload.page;
      state.filter = action.payload.filter;
      state.search = action.payload.search;
    },
    getCatalogSuccess: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
      state.errors = false;
    },
    getCatalogError: (state) => {
      state.loading = false;
      state.errors = true;
    },
    changeSearchField: (state, action) => {
      state.loading = true;
      state.search = action.payload.search;
      state.page = '0';
      state.filter = '0';
    },
  }
});

export const {
  getCatalog,
  getCatalogSuccess,
  getCatalogError,
  changeSearchField,
  // clearSearch
} = сatalogSlice.actions;

export default сatalogSlice.reducer;