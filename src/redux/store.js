import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
  // reducers
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
