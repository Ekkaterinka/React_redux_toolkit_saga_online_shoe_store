import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
  loading: false,
  errors: false,
  count: 0,
  data: [],
  order: {}
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCart: (state, action) => {
      state.loading = true;
      state.count = state.count + action.payload.count;
      const todo = state.data.findIndex((todo) => todo.id === action.payload.id && todo.size === action.payload.size);
      todo >= 0 ?
        state.data[todo].count += action.payload.count
        :
        state.data =
        [
          ...state.data,

          {
            count: action.payload.count,
            size: action.payload.size,
            title: action.payload.title,
            price: action.payload.price,
            id: action.payload.id,
          }
        ]
    },
    deleteCart: (state, action) => {
      const index = state.data.map(x => {
        return x.id;
      }).indexOf(action.payload.id);
      state.data.splice(index, 1);
      state.count = state.count - action.payload.count;
    },
    getCartError: (state) => {
      state.loading = false;
      state.errors = true;
    },
    postCart: (state) => {
      state.loading = true;
    },
    postSucessCart: (state,{ payload }) => {
      state.loading = false;
      state.errors = false;
      state.order = payload;
      state.data = [];
      state.count = 0;
    }
  }
});

export const {
  getCart,
  deleteCart,
  getCartError,
  postCart,
  postSucessCart
} = cartSlice.actions;

export default cartSlice.reducer;