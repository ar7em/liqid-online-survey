import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createHashHistory";
import rootReducer from "reducers/root";

const initialState = {};

export const history = createHistory();

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);
