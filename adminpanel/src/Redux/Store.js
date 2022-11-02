import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reCrud } from "./Crud"
import { reLoading } from "./Loading";
import { reAdmin } from "./Admin";
import { reProducts } from "./Products";
import { reOrder } from "./Order";
import { reOpenModal } from "./OpenModal"
import { reAds } from "./Ads";


const reducer = combineReducers({
  crud: reCrud,
  reLoading,
  admin: reAdmin,
  products: reProducts,
  orders: reOrder,
  openModal: reOpenModal,
  ads: reAds
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