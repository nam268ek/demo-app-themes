import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import themeApi from 'api/themeApi';

export const getAllTheme = createAsyncThunk('themes/getAllTheme', async () => {
  const data = await themeApi.getAll();
  return data;
});

export const getLimitTheme = createAsyncThunk('themes/getLimitTheme', async (params) => {
  const data = await themeApi.getLimit(params);
  return data;
});

const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    themeList: [],
  },
  extraReducers: {
    [getAllTheme.fulfilled]: (state, action) => {
      state.themeList = action.payload;
    },
    [getLimitTheme.fulfilled]: (state, action) => {
      state.themeList = action.payload;
    },
  },
});

export default themesSlice.reducer;
