import React from "react";
import "./Appbar.css";
import { NavLink } from "react-router-dom";
import signout from "../../Assets/Icons/log-out-Light.svg";
import myLogo from "../../Assets/Images/My Logo.png"
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useSelector } from "react-redux";
export function Appbar() {

  const logOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload()
  }
  const openBar = useSelector((state) => state.openAppBar)

  return (
    <>
      <aside style={openBar ? { width: "90%" } : {}}>
        {/* <div style={openMenu ? { display: "flex", transition: "0.5s ease-in-out" } : {}} id="appbar-profile-content">
          <figure id="links-container-profile-image">
            <img src={profileImg} alt="" />
          </figure>
          <h3>Muhammadxon</h3>
          <p>Main Admin</p>
        </div> */}
       
        <figure id="mylogo-img">
          <img src={myLogo} alt="" />
        </figure>
        <div id="links_container">
          {navbarData.map((item, index) => {
            return (
              // <div key={index}>
              <NavLink activeclassname="active-nav" key={index} to={item.link} id="links_container-nav-link">
                <p>{item.icon}</p>
                <span style={openBar ? { display: "block" } : {}}>{item.name}</span>
              </NavLink>
              // </div>


            );
          })}
        </div>
        <NavLink
          style={openBar ? { display: "flex", alignItems: "center", position: "relative", top: "20px" } : {}}
          onClick={logOut} id="signout">
          <img src={signout} alt="" />
          <span
            style={openBar ? { display: "block" } : {}}
          >Sign out</span>
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
    name: "Products",
    icon: <CategoryIcon />,
  },
  {
    id: 2,
    link: "/informations",
    name: "Information",
    icon: <InfoIcon />,
  },
  {
    id: 3,
    link: "/statistics",
    name: "Statistics",
    icon: <LeaderboardIcon />,
  },
  {
    id: 4,
    link: "/order",
    name: "Order",
    icon: <ViewModuleIcon />,
  },
  {
    id: 5,
    link: "/ads",
    name: "Advertises",
    icon: <AutoModeIcon />,
  },
  {
    id: 6,
    link: "/addProduct",
    name: "Add Product",
    icon: <AddBoxIcon />,
  },
];