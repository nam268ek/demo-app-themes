import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themesReducer from "features/Theme/themeSlice";
import showCasesReducer from "features/ShowCase/showCaseSlice";
import cardPostsReducer from "features/CardPost/cardPostSlice";
import cartReducer from "features/Cart/cartSlice";
import { loadState } from "localState/localStorage";

const reducers = combineReducers({
  themes: themesReducer,
  showCases: showCasesReducer,
  cardPosts: cardPostsReducer,
  carts: cartReducer,
});

export default configureStore({
  reducer: reducers,
  preloadedState: loadState(),
});
