import React from "react";
import logo from "../images/badge-header.svg";
import "./styles/Navbar.css";
const Navbar = () => (
  <div className="Navbar">
    <div className="container-fluid">
      <a href="/" className="Navbar__brand">
        <img className="Navbar__brand-logo" src={logo} alt="PlatziConf-Logo" />
        <span>PLATZI CONF</span>
      </a>
    </div>
  </div>
);

export default Navbar;
