import { createStore, combineReducers } from "redux";
import { reSearch } from "./Search"
import { reLoading } from "./Loading";

const reducer = combineReducers({
  reSearch,
  reLoading,
});

export const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
