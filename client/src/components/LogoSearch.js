import React from "react";
import Logo from "../img/logo.png";
import "./_common.css";

export default function LogoSearch() {
  return (
    <div className="logoSearch">
      <img
        src={Logo}
        alt="Logo"
        style={{ width: "50px", borderRadius: "50%" }}
      />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <span>&#x1F50E;&#xFE0E;</span>
      </div>
    </div>
  );
}
