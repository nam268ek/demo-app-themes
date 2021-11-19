import { configureStore } from "@reduxjs/toolkit";
import themesReducer from "features/Theme/themeSlice";
import showCasesReducer from "features/ShowCase/showCaseSlice";
import cardPostsReducer from "features/CardPost/cardPostSlice";
import cartReducer from "features/Cart/cartSlice";

export default configureStore({
  reducer: {
    themes: themesReducer,
    showCases: showCasesReducer,
    cardPosts: cardPostsReducer,
    carts: cartReducer,
  },
});
