import { configureStore } from "@reduxjs/toolkit";
import themesReducer from "features/Theme/themeSlice";
import showCasesReducer from "features/ShowCase/showCaseSlice";
import cardPostsReducer from "features/CardPost/cardPostSlice";

export default configureStore({
  reducer: {
    themes: themesReducer,
    showCases: showCasesReducer,
    cardPosts: cardPostsReducer,
  },
});
