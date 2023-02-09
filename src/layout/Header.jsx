import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="/svgs/icon_menu.svg" alt="menu" class="menu"></img>
      <div class="navbar-left">
        <NavLink className="header__pageName" to="/">
          <img src="/svgs/log-re.png" alt="logo" class="logo"></img>
        </NavLink>
        <ul className="header__navbar">
          <li className="header__link">
            <NavLink to="/devices">Devices</NavLink>
          </li>
        </ul>
      </div>
      <div class="navbar-right">
        <ul>
          <li class="navbar-email">Emma device</li>
          <li class="navbar-shopping-cart">
            <NavLink to="/login">
              <i className="bx bx-user"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
