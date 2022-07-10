import React from "react";
import "./Header.css";
import a_list from "./a_list";
import HeaderLogo from "./Comps/HeaderLogo";
import HrefRow from "./Comps/HrefRow";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header_item">
          <HeaderLogo />
        </div>
        <div className="header_item">
          <HrefRow />
        </div>
        <div className="header_item">
          <a href="tel:+972527808058" class="btn btn-primary call_btn"></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
