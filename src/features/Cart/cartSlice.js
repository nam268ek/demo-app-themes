import { createSlice } from "@reduxjs/toolkit";

// const onChangeItem = (itemId) => {
//   return state;
// };

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    products: [],
    qty: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      const index = state.products.indexOf(item);
      const isItem = item ? true : false;
      isItem
        ? (state.products[index].qty += 1)
        : state.products.push(action.payload);
      state.qty += 1;
    },
    removeFormCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      const index = state.products.indexOf(item);
      const qtyItem = state.products[index].qty;
      state.products.splice(index, 1);
      state.qty -= qtyItem;
    },
    inCreaseQty: (state, action) => {
      return {
        ...state,
        qty: action.payload.qty + 1,
      };
    },
    deCreaseQty: (state, action) => {
      return {
        ...state,
        qty: action.payload.qty - 1,
      };
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addToCart, removeFormCart, inCreaseQty, deCreaseQty } = actions;
export default reducer;
