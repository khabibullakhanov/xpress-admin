import React from "react";
import "./Header.css";
import email from "../../Assets/Icons/envelope-Light.svg";
import user from "../../Assets/Icons/user-Light.svg";
import alert from "../../Assets/Icons/bell-Light.svg";
import { Link } from "react-router-dom";
import userIcon from ".././../Assets/Icons/Group 135.svg"

export function Header() {
  return (
    <div id="header">
      <div id="header_left">
        <h1>Weekly sumup</h1>
        <p>Get summary of your weekly online transactions here. </p>
      </div>
      <div id="header_right">
        <Link to="/email">
          <img src={email} alt="" />
        </Link>
        <Link to="/message">
          <img src={alert} alt="" />
          <sup id="sub-basket">0</sup>
        </Link>
        <div id="header_right_user">
          <figure>
            <img src={userIcon} alt="" />
          </figure>
          <div id="header_right_user_text">
            <h3>khabibullakhanov</h3>
            <p>Admin account</p>
          </div>
        </div>
      </div>
    </div>
  );
}
