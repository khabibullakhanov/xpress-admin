import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reCrud } from "./Crud"
import { reLoading } from "./Loading";
import { reAdmin } from "./Admin";
import { reProducts } from "./Products";
import { reOrder } from "./Order";

const reducer = combineReducers({
  crud: reCrud,
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