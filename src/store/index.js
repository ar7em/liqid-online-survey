import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import createHistory from "history/createHashHistory";
import rootReducer from "reducers/root";

const initialState = {};

const persistedReducer = persistReducer({
  key: "root",
  storage,
  blacklist: [],
  stateReconciler: hardSet
}, rootReducer);

export const history = createHistory();

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export const persistor = persistStore(store);
