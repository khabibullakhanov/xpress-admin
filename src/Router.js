import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Appbar } from "./Components/Appbar/Appbar";
import { Header } from "./Components/Header/Header";
import { AddProduct } from "./Pages/AddProduct/AddProduct";
import { Advertisment } from "./Pages/Information/Information";
import { Brands } from "./Pages/Statistics/Statistics";
import { Order } from "./Pages/Order/Order";
import { Product } from "./Pages/Product/Product";
import { Reports } from "./Pages/Advertises/Advertises";
import { Users } from "./Pages/ProductList/ProductList";
import { NotFounded } from "./Pages/NotFounded/NotFounded";
import { ProductView } from "./Components/ProductView/ProductView";
import { useSelector } from "react-redux";
import { Config } from "./Config/Config"
import { EnoughProduct } from "./Pages/EnoughProduct/EnoughProduct";

export function Router() {
  const [openAppbar, setOpenAppbar] = useState(false)
  const products = useSelector((state) => state.products);

  return (
    <>
      <label id="open-menu-content">
        <span style={openAppbar ? { display: "none" } : { position: "absolute", left: "30px", top: "50px" }} id="open-appbar" onClick={() => {
          setOpenAppbar(true);
        }}><i className="fa-solid fa-bars"></i></span>
        <span
          onClick={() => {
            setOpenAppbar(false);
          }}
          style={openAppbar ? {
            display: "block", fontSize: "25px", position: "relative", right: "100px", top: "30px"
          } : {}} id="close-appbar"><i className="fa-regular fa-rectangle-xmark"></i></span>
      </label>
      <div id="router_container">
        <div style={openAppbar ? { width: "70%", } : {}}>
          <Appbar openMenu={openAppbar} menuIcon={<i class="fa-solid fa-bars"></i>} />
        </div>
        <div id="router_pages">
          <Header />
          <Routes >
            <Route path="/product" element={<Product />} />
            <Route path="/informations" element={<Advertisment />} />
            <Route path="/statistics" element={<Brands />} />
            <Route path="/order" element={<Order />} />
            <Route path="/enough-product" element={<EnoughProduct />} />
            <Route path="/productAbout" element={<Users />} />
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
