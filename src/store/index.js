import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "reducers/root";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  devToolsEnhancer()
);
