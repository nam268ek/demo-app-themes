import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import themeApi from "api/themeApi";

export const getAllShowCase = createAsyncThunk(
  "themes/getAllShowCase",
  async () => {
    const data = await themeApi.showCase();
    return data;
  }
);

export const getDetail = createAsyncThunk("themes/getDetail", async () => {
  const data = await themeApi.getDetailShowCase();
  return data;
});

export const getLimitShowCase = createAsyncThunk(
  "themes/getLimitShowCase",
  async (params) => {
    const data = await themeApi.getLimitShowCase(params);
    return data;
  }
);

const showCaseSlice = createSlice({
  name: "showCases",
  initialState: {
    showCaseList: [],
    detail: [],
  },
  extraReducers: {
    [getAllShowCase.fulfilled]: (state, action) => {
      state.showCaseList = action.payload;
    },
    [getLimitShowCase.fulfilled]: (state, action) => {
      state.showCaseList = action.payload;
    },
    [getDetail.fulfilled]: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export default showCaseSlice.reducer;
