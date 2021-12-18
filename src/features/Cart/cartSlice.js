import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import themeApi from "api/themeApi";

export const asyncProductForUser = createAsyncThunk(
  "theme/asyncProductForUser",
  async (params) => {
    const data = await themeApi.asyncProductForUser(params).catch((err) => {
      return err.response.data;
    });
    console.log(data);
    return data;
  }
);

export const asyncCartFromDatabase = createAsyncThunk(
  "themes/asyncCartFromDatabase",
  async () => {
    const data = await themeApi.asyncCartFromDatabase().catch((err) => {
      return err.response.data;
    });
    return data;
  }
);

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    products: [],
    qty: 0,
    total: 0,
    isLoading: false,
    errorMessage: null,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.products.find((item) => item._id === payload._id);
      const index = state.products.indexOf(item);
      const isItem = item ? true : false;

      isItem ? (state.products[index].qty += 1) : state.products.push(payload);
      state.qty += 1;
      state.total = state.products.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0);
    },
    removeFormCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      const index = state.products.indexOf(item);
      const qtyItem = state.products[index].qty;
      state.products.splice(index, 1);
      state.qty -= qtyItem;
    },
    deCreaseQty: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      const index = state.products.indexOf(item);
      state.products[index].qty -= 1;
      state.products[index].qty === 0 && state.products.splice(index, 1);
      state.qty -= 1;
    },
    updateItem: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      const index = state.products.indexOf(item);
      state.products[index].qty = action.payload.qty;

      //get total qty
      state.qty = state.products.reduce((total, item) => {
        return total + item.qty;
      }, 0);
    },
    checkOut: (state) => {
      state.products = [];
      state.qty = 0;
      state.total = 0;
    },
    getTotal: (state) => {
      state.total = state.products.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0);
    },
  },
  extraReducers: {
    [asyncProductForUser.fulfilled]: (state, action) => {
      // if (action.payload) state.products = action.payload;
    },
    [asyncCartFromDatabase.fulfilled]: (state, action) => {
      const isItem = Object.keys(action.payload).length > 0 ? true : false;

      if (isItem) {
        state.products = action.payload.products;
        state.total = action.payload.total;
        state.qty = action.payload.products.reduce((total, item) => {
          return total + item.qty;
        }, 0);
      }
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  addToCart,
  removeFormCart,
  deCreaseQty,
  getTotal,
  updateItem,
  checkOut,
} = actions;
export default reducer;
