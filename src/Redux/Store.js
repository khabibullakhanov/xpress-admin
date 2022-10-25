import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reCrud } from "./Crud"
import { reLoading } from "./Loading";
import { reSearch } from "./Search";
import { reAdmin } from "./Admin";
import { reProducts } from "./Product";
import { reOrder } from "./Order";

const reducer = combineReducers({
  crud: reCrud,
  reSearch,
  reLoading,
  admin: reAdmin,
  products: reProducts,
  orders: reOrder,
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