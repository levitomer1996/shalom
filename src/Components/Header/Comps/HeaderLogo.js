import React, { useState } from "react";
import logo from "./excavator.png";
import "../Header.css";

const HeaderLogo = () => {
  return (
    <a href="/" style={{ textDecoration: "none" }}>
      <div className="header_logo_container">
        <img src={logo} className="header_logo_img" />
        <p className="header_logo_title">שלום נטף</p>
      </div>
      <p className="header_logo_para">תיקונים והנחת קווי מים, עבודות טרקטור</p>
    </a>
  );
};

export default HeaderLogo;
