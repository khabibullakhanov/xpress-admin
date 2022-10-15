import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reUserCrud } from "./Crud"
import { reLoading } from "./Loading";
import { reSearch } from "./Search";

const reducer = combineReducers({
  crud: reUserCrud,
  reSearch,
  reLoading,

});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});