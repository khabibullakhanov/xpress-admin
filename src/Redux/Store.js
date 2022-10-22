import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reCrud } from "./Crud"
import { reLoading } from "./Loading";
import { reSearch } from "./Search";
import { reAdmin } from "./Admin";

const reducer = combineReducers({
  crud: reCrud,
  reSearch,
  reLoading,
  admin: reAdmin,
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