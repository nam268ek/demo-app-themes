import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import themeApi from "api/themeApi";

export const getDataPurchase = createAsyncThunk(
  "theme/getDataPurchase",
  async () => {
    const data = await themeApi.getDataPurchase().catch((err) => {
      return err.response.data;
    });
    console.log(data);
    return data;
  }
);

export const getUser = createAsyncThunk("theme/getUser", async (id) => {
  const data = await themeApi.getUser(id).catch((err) => {
    return err.response.data;
  });
  console.log(data);
  return data;
});

export const updateUser = createAsyncThunk(
  "theme/updateUser",
  async (params) => {
    const data = await themeApi.updateUser(params).catch((err) => {
      return err.response.data;
    });
    console.log(data);
    return data;
  }
);

export const updatePassword = createAsyncThunk(
  "theme/updatePassword",
  async (params) => {
    const data = await themeApi.updatePassword(params).catch((err) => {
      return err.response.data;
    });
    console.log(data);
    return data;
  }
);

export const uploadFile = createAsyncThunk(
  "theme/uploadFile",
  async (formData) => {
    const data = await themeApi.uploadFile(formData).catch((err) => {
      return err.response.data;
    });
    console.log(data);
    return data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
    checkout: [],
    file: [],
    isLoading: false,
    errorMessage: null,
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [getDataPurchase.fulfilled]: (state, action) => {
      state.checkout = action.payload;
    },
    [uploadFile.fulfilled]: (state, action) => {
      state.file = action.payload;
    },
    [updateUser.fulfilled]: (state, action) => {
      if(action.payload.code === 200) {state.user = action.payload};
    },
  },
});

const { reducer, actions } = userSlice;

export default reducer;
