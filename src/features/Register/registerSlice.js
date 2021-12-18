// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import themeApi from "api/themeApi";

// export const postRegister = createAsyncThunk(
//   "themes/postRegister",
//   async (params) => {
//     const data = await themeApi.postRegister(params).catch((err) => {
//       return err.response.data;
//     });
//     return data;
//   }
// );

// const registerSlice = createSlice({
//   name: "register",
//   initialState: {
//     user: [],
//     token: "",
//     error: "",
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//     logOutRegister: (state, action) => {
//       state.token = "";
//     },
//   },
//   extraReducers: {
//     [postRegister.pending]: (state, action) => {
//       state.error = "";
//     },
//     [postRegister.fulfilled]: (state, action) => {
//       if (action.payload.auth) {
//         state.token = action.payload;
//         state.error = "";
//       }
//       if (action.payload.message) {
//         state.error = action.payload.message;
//       }
//     },
//   },
// });
// const { actions, reducer } = registerSlice;
// export const { setUser,logOutRegister } = actions;
// export default reducer;
