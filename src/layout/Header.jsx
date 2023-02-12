import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import "./styles/header.css";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const handelclikMenu = () => {
    setToggle(!toggle);
  };
  return (
    <main className="header">
      <nav>
        <div
          className={toggle ? "bxmenu bx bx-menu" : "bxmenu bx bx-x"}
          onClick={handelclikMenu}
        ></div>
        <div className="navbar-left">
          <NavLink className="header__pageName" to="/">
            <img src="/svgs/log-re.png" alt="logo" className="logo"></img>
          </NavLink>
          <ul className="header__navbar">
            <li className="header__link">
              <NavLink to="/devices">Devices</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email">Emma device</li>
            <li className="navbar-login">
              <NavLink to="/login">
                <i className="bx bx-user"></i>
              </NavLink>
            </li>
          </ul>
        </div>
        {toggle ? "" : <Menu setToggle={setToggle} tggle={toggle} />}
      </nav>
    </main>
  );
};

export default Header;
