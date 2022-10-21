import React, { useState } from "react";
import "./Appbar.css";
import { NavLink } from "react-router-dom";
import order from "../../Assets/Icons/shopping-basket-Light.svg";
import product from "../../Assets/Icons/package-Light.svg";
import ads from "../../Assets/Icons/ads (2).svg";
import brands from "../../Assets/Icons/star-Light.svg";
import signout from "../../Assets/Icons/log-out-Light.svg";
import usersLogo from "../../Assets/Icons/users-Light.svg"
import reportsLogo from "../../Assets/Icons/user-Light.svg"
import profileImg from "../../Assets/Images/photo_2022-06-16_20-17-34.jpg"
import addIcon from "../../Assets/Icons/plus-square-Regular.svg"

export function Appbar() {

  const [profileImage, setProfileImage] = useState({
    prImg: {},
  })

  const logOut = () => {
    localStorage.removeItem("server")
    localStorage.removeItem("auth")
    window.location.reload()
  }

  return (
    <>
      <aside>
        <NavLink to="/">
          <h3 id="my-logo">Khabibullakhanov</h3>
        </NavLink>

        <div id="appbar-profile-content">
          <figure id="links-container-profile-image">
            <img src={profileImage.prImg.size ? URL.createObjectURL(profileImage.prImg) : profileImg} alt="" />
            <label id="change-color">
              <input type="file"
                onChange={(e) => {
                  setProfileImage({ ...profileImage, prImg: e.target.files[0] })
                }}
              />
              Chnage Photo</label>
          </figure>
          <h3>Muhammadxon</h3>
          <p>Main Admin</p>
        </div>
        <div id="links_container">
          {navbarData.map((item, index) => {
            return (
              // <div key={index}>
              <NavLink activeclassname="active-nav" key={index} to={item.link} id="links_container-nav-link">
                <img src={item.icon} alt="" />
                {item.name}
              </NavLink>
              // </div>


            );
          })}
        </div>
        <NavLink
          onClick={logOut} id="signout">
          <img src={signout} alt="" />
          Sign out
        </NavLink>
      </aside>
    </>
  );
}

const navbarData = [
  // {
  // },
  {
    id: 1,
    link: "/product",
    name: "Product",
    icon: product,
  },
  {
    id: 2,
    link: "/ads",
    name: "Advertisment",
    icon: ads,
  },
  {
    id: 3,
    link: "/brands",
    name: "Brands",
    icon: brands,
  },
  {
    id: 4,
    link: "/order",
    name: "Order",
    icon: order,
  },
  {
    id: 5,
    link: "/users",
    name: "Users",
    icon: usersLogo,
  },
  {
    id: 6,
    link: "/reports",
    name: "Reports",
    icon: reportsLogo,
  },
  {
    id: 7,
    link: "/addUser",
    name: "Add User",
    icon: addIcon,
  },
];