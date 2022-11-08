import React from "react";
import { Route, Routes } from "react-router-dom";
import { Appbar } from "./Components/Appbar/Appbar";
import { Header } from "./Components/Header/Header";
import { AddProduct } from "./Pages/AddProduct/AddProduct";
import { Advertisment } from "./Pages/Information/Information";
import { Brands } from "./Pages/Statistics/Statistics";
import { Order } from "./Pages/Order/Order";
import { Product } from "./Pages/Product/Product";
import { Reports } from "./Pages/Advertises/Advertises";
import { NotFounded } from "./Pages/NotFounded/NotFounded";
import { ProductView } from "./Components/ProductView/ProductView";
import { useSelector } from "react-redux";
import { Config } from "./Config/Config"
import { EnoughProduct } from "./Pages/EnoughProduct/EnoughProduct";

export function Router() {
  const products = useSelector((state) => state.products);

  return (
    <>
      <div id="router_container">
        <div>
          <Appbar />
        </div>
        <div id="router_pages">
          <Header />
          <Routes >
            <Route path="/product" element={<Product />} />
            <Route path="/informations" element={<Advertisment />} />
            <Route path="/statistics" element={<Brands />} />
            <Route path="/order" element={<Order />} />
            <Route path="/enough-product" element={<EnoughProduct />} />
            <Route path="/ads" element={<Reports />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="*" element={<NotFounded />} />
            <Route path="/product/:id" element={<ProductView products={products} />} />
            <Route path="/product/edite/:id" element={<AddProduct />} />

          </Routes>
        </div>
      </div>
      <Config />
    </>
  );
}
