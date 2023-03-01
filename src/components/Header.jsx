import React from "react";
import "./Header.css";
import globe from "../images/globe-icon.png";

const Header = () => {
  return (
    <div className="header">
      <img src={globe} alt="globe icon" />
      <h4 className="header--title">my travel journal</h4>
    </div>
  );
};

export default Header;
