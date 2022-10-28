import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Appbar } from "./Components/Appbar/Appbar";
import { Header } from "./Components/Header/Header";
import { AddUser } from "./Pages/AddUser/AddUser";
import { Advertisment } from "./Pages/Advertisment/Advertisment";
import { Brands } from "./Pages/Brands/Brands";
import { Order } from "./Pages/Order/Order";
import { Product } from "./Pages/Product/Product";
import { Reports } from "./Pages/Reports/Reports";
import { Users } from "./Pages/Users/Users";
import { NotFounded } from "./Pages/NotFounded/NotFounded";
import { ProductView } from "./Components/ProductView/ProductView";
import { useSelector } from "react-redux";

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
          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/ads" element={<Advertisment />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/order" element={<Order />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="*" element={<NotFounded />} />
            <Route path="/product/:id" element={<ProductView products={products}/>} />
            <Route path="/product/edite/:id" element={<AddUser/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}
