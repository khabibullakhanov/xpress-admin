import React from "react";
import { Route, Routes } from "react-router-dom";
import { Appbar } from "./Components/Appbar/Appbar";
import { Header } from "./Components/Header/Header";
import { Advertisment } from "./Pages/Advertisment/Advertisment";
import { Brands } from "./Pages/Brands/Brands";
import { Order } from "./Pages/Order/Order";
import { Product } from "./Pages/Product/Product";
import { Reports } from "./Pages/Reports/Reports";
import { Users } from "./Pages/Users/Users";


export function Router() {
  return (
    <div id="router_container">
      <Appbar />
      <div id="router_pages">
        <Header />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/ads" element={<Advertisment />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/order" element={<Order />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </div>
  );
}
