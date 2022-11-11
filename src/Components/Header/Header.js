import React, { useState } from "react";
import "./Header.css";
import searchIcon from "../../Assets/Icons/search-Regular.svg"
import bellIcon from "../../Assets/Icons/bell-Regular.svg"
import { useDispatch, useSelector } from "react-redux";
import { acSearch } from "../../Redux/Search"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';

export function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const products = useSelector((state) => state.sortedProduct);
  const orders = useSelector((state) => state.orders);
  const searched = useSelector((state) => state.search);

  return (
    <div id="header">
      <div id="header_right">
        <form onSubmit={(e) => {
          e.preventDefault()
        }} id="header-right-form">
          <input placeholder="Search..." onChange={(e) => {
            dispatch(acSearch(e.target.value.toLowerCase()))
            setSearch(e.target.value);
          }} name="search" type="text" />
          <img src={searchIcon} alt="" />
        </form>
        <Badge badgeContent={orders.length} color="primary">
          <img
            id="header-bell-icon"
            src={bellIcon}
            onClick={(e) => {
              navigate("/order")
            }}
            alt="" />
        </Badge>
      </div>
      <div style={search ? { display: "flex", width: "auto" } : { display: "none" }} id="header-right-bottom">
        {search ? products.filter((itemn) => itemn.name.includes(searched))
          .map((item, index) => {
            return (
              <div key={index}>
                <div id="header-right-bottom-item">
                  <p>{index + 1}</p>
                  <Link
                    onClick={() => {
                      setSearch(false);
                    }}
                    to={`/product/${item.id}`}>{item.name} {item.cost}</Link>
                </div>
              </div>
            )
          }) : ""
        }
      </div>
    </div>
  );
}
