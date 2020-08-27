import React from "react";
import Badge from "../components/Badge";
import Navbar from "../components/Navbar";
import logo from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

const BadgesNew = () => (
  <div>
    <Navbar />
    <div className="BadgeNew__hero">
      <img className="img-fluid" src={logo} alt="Logo" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
          <Badge
            firstName="Gilberto"
            lastName="Santamaria"
            title="Ingeniebro"
            social="twitter"
          />
        </div>
      </div>
    </div>
  </div>
);

export default BadgesNew;
