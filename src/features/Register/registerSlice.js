import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import themeApi from "api/themeApi";

export const postRegister = createAsyncThunk(
  "themes/postRegister",
  async (params) => {
    const data = await themeApi.postRegister(params).catch((err) => {
      return err.response.data;
    });
    return data;
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    message: [],
  },
  extraReducers: {
    [postRegister.pending]: (state, action) => {
      state.message = [];
    },
    [postRegister.fulfilled]: (state, action) => {
      state.message = action.payload;
    },
  },
});
const { actions, reducer } = registerSlice;
export default reducer;
