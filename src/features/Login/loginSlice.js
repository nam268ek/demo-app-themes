import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import themeApi from "api/themeApi";

export const getLogin = createAsyncThunk("themes/getLogin", async (params) => {
  const data = await themeApi.getLogin(params).catch((err) => {
    return err.response.data;
  });
  return data;
});

export const postRegister = createAsyncThunk(
  "themes/postRegister",
  async (params) => {
    const data = await themeApi.postRegister(params).catch((err) => {
      return err.response.data;
    });
    return data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: [],
    token: "",
    errorMessage: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {
    logOut: (state) => {
      state.user = [];
      state.token = "";
    },
  },
  extraReducers: {
    [getLogin.fulfilled]: (state, action) => {
      if (action.payload.auth) {
        state.token = action.payload.auth;
        state.user = action.payload._id;
        state.error = "";
      }
      if (action.payload.message) {
        state.error = action.payload.message;
      }
    },
    [postRegister.pending]: (state, action) => {
      state.error = "";
    },
    [postRegister.fulfilled]: (state, action) => {
      if (action.payload.auth) {
        state.token = action.payload;
        state.error = "";
      }
      if (action.payload.message) {
        state.error = action.payload.message;
      }
    },
  },
});
const { actions, reducer } = loginSlice;
export const { logOut } = actions;
export default reducer;
