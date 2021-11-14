import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import themeApi from "api/themeApi";

export const getAllCardPosts = createAsyncThunk(
  "themes/getAllCardPosts",
  async () => {
    const data = await themeApi.getCardPostList();
    return data;
  }
);

export const getLimitCardPost = createAsyncThunk(
  "themes/getLimitCardPost",
  async (params) => {
    const data = await themeApi.getCardPostListLimit(params);
    return data;
  }
);

const cardPostSlice = createSlice({
  name: "cardPosts",
  initialState: {
    cardPostList: [],
  },
  extraReducers: {
    [getAllCardPosts.fulfilled]: (state, action) => {
      state.cardPostList = action.payload;
    },
    [getLimitCardPost.fulfilled]: (state, action) => {
      state.cardPostList = action.payload;
    },
  },
});

export default cardPostSlice.reducer;
