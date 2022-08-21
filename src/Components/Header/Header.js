import React from "react";
import "./Header.css";
import a_list from "./a_list";
import HeaderLogo from "./Comps/HeaderLogo";
import HrefRow from "./Comps/HrefRow";
import phone from "./phone.json";
import Lottie from "lottie-react";

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
          <a href="tel:+972527808058" style={{ textDecoration: "none" }}>
            <div className="phone_container">
              <Lottie
                style={{ width: 50, height: 50 }}
                animationData={phone}
                loop={true}
              />
              <p className="phone_container_p">התקשר 052-7808058</p>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
