import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardPostsReducer from "features/CardPost/cardPostSlice";
import cartReducer from "features/Cart/cartSlice";
import loginReducer from "features/Login/loginSlice";
import registerReducer from "features/Register/registerSlice";
import showCasesReducer from "features/ShowCase/showCaseSlice";
import themesReducer from "features/Theme/themeSlice";
import usersReducer from "features/User/userSlice";
import { loadState } from "localState/localStorage";

const reducers = combineReducers({
  themes: themesReducer,
  showCases: showCasesReducer,
  cardPosts: cardPostsReducer,
  carts: cartReducer,
  login: loginReducer,
  register: registerReducer,
  users: usersReducer,
});

export default configureStore({
  reducer: reducers,
  preloadedState: loadState(),
});
