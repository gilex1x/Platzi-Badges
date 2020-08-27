import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/badges.css";
import avatar from "../images/logo.jpg";

const Badge = ({ firstName, lastName, title, social }) => (
  <div className="badges">
    <div className="badge_header">
      <img src={confLogo} alt="CONF" />
    </div>
    <div className="badge_section-name">
      <img src={avatar} alt="AVATAR" className="badge_avatar" />
      <h1>
        {firstName} <br /> {lastName}
      </h1>
    </div>
    <div className="badge_section-info">
      <p>{title}</p>
      <p>{social}</p>
    </div>
    <div className="badge_footer">
      <p>#PlatziConf</p>
    </div>
  </div>
);

export default Badge;
