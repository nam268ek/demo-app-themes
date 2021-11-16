import { createSlice } from "@reduxjs/toolkit";

const showCaseSlice = createSlice({
  name: "showCases",
  initialState: {
    products: [],
    amount: 0,
  },
  reducer: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeFormCart: (state, action) => {},
  },
});

export default showCaseSlice.reducer;
