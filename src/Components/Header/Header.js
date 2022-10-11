import React, { useEffect, useState } from "react";
import "./Header.css";
import searchIcon from "../../Assets/Icons/search-Regular.svg"
import bellIcon from "../../Assets/Icons/bell-Regular.svg"
import axios from "axios";
export function Header() {

  const [data, setData] = useState()
  const [search, setSearch] = useState()

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users",)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="header">
      <div id="header_right">
        <form onSubmit={(e) => {
          // setSearch(e.target.search.value.toLowerCase());
          // e.target.search.value = "";
          e.preventDefault()
        }} id="header-right-form">
          <input placeholder="Search..." onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
            // e.target.search.value = "";
          }} name="search" type="text" />
          <img src={searchIcon} alt="" />
        </form>
        <img src={bellIcon} alt="" />
      </div>
      {
        search ? data.filter((fil) =>
          fil.name.toLowerCase().includes(search)||
          fil.username.toLowerCase().includes(search)
          ).map((item) => {
            return (
              <p>{item.name}</p>
            )
          }) : ""
      }
    </div>
  );
}
