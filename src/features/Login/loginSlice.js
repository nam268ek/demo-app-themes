import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import themeApi from "api/themeApi";

export const getLogin = createAsyncThunk("themes/getLogin", async (params) => {
  const data = await themeApi.getLogin(params).catch((err) => {
    return err.response.data;
  });
  console.log(data);
  return data;
});

export const getRefreshToken = createAsyncThunk(
  "themes/getRefreshToken",
  async (params) => {
    const data = await themeApi.getRefreshToken(params).catch((err) => {
      return err.response.data;
    });
    console.log(data);
    return data;
  }
);

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
    errorMessage: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {
    logOut: (state) => {
      state.user = [];
      // remove token and refresh_token from localStorage
      localStorage.clear();
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: {
    //-------------login-----------------
    [getLogin.pending]: (state) => {
      state.errorMessage = "";
    },
    [getLogin.fulfilled]: (state, { payload }) => {
      if (payload.code === 200) {
        localStorage.setItem("token", JSON.stringify(payload.data.token));
        localStorage.setItem(
          "refresh_token",
          JSON.stringify(payload.data.refreshToken)
        );

        state.user = payload.data._id;
        state.error = "";
      }
      if (payload.code === 401) {
        state.errorMessage = payload.message;
      }
    },
    // ----------register request------------------
    [postRegister.pending]: (state, action) => {
      state.error = "";
    },
    [postRegister.fulfilled]: (state, action) => {
      if (action.payload.auth) {
        state.auth = action.payload;
        state.error = "";
      }
      if (action.payload.message) {
        state.error = action.payload.message;
      }
    },
    //--------------------------------------
  },
});
const { actions, reducer } = loginSlice;
export const { logOut, setUser } = actions;
export default reducer;
