import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    products: [],
    qty: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.products.find((item) => item.id === payload.id);
      const index = state.products.indexOf(item);
      const isItem = item ? true : false;
      isItem ? (state.products[index].qty += 1) : state.products.push(payload);
      state.qty += 1;
    },
    removeFormCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      const index = state.products.indexOf(item);
      const qtyItem = state.products[index].qty;
      state.products.splice(index, 1);
      state.qty -= qtyItem;
    },
    deCreaseQty: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      const index = state.products.indexOf(item);
      state.products[index].qty -= 1;
      state.products[index].qty === 0 && state.products.splice(index, 1);
      state.qty -= 1;
    },
    updateItem: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      const index = state.products.indexOf(item);
      state.products[index].qty = action.payload.qty;

      //get total qty
      state.qty = state.products.reduce((total, item) => {
        return total + item.qty;
      }, 0);
    },
    getTotal: (state) => {
      state.total = state.products.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0);
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addToCart, removeFormCart, deCreaseQty, getTotal, updateItem } =
  actions;
export default reducer;
