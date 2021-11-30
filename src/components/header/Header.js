import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";


  
function Header() {
  const { isDark } = useContext(StyleContext);
  
  

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"} id="header">
        <a href="#home" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"  
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutUs">About Us</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#screenshot">Screenshots</a>
          </li>
          <li>
            <a href="#categories">Categories</a>
          </li>
          <li>
            <a href="#vendors">Vendors</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>

          <li>
            <div className="toggle_switch">
              <ToggleSwitch />
            </div>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
