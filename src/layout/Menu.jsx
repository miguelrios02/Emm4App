import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Menu.css";
const Menu = ({ setToggle, toggle }) => {
  const handleclik = () => {
    setToggle(!toggle);
  };
  return (
    <div className="menu-main">
      <ul>
        <li>
          <NavLink to="/devices" onClick={handleclik}>
            Devices
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
