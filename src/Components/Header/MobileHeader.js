import React from "react";
import "./Header.css";
import a_list from "./a_list";
import HeaderLogo from "./Comps/HeaderLogo";
const MobileHeader = () => {
  return (
    <header className="header_mobile">
      <div className="header_mobile_container">
        <div className="header_item_mobile">
          <HeaderLogo />
        </div>
        <div className="header_item_mobile">
          <div className="header_item_mobile header_buttons">
            <div class="dropdown" style={{ paddingRight: "10px" }}>
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                style={{ backgroundColor: "#2e3cb6" }}
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                תפריט
              </button>
              <ul class="dropdown-menu " aria-labelledby="dropdownMenu2">
                {a_list.map(({ title, link }) => {
                  return (
                    <li>
                      <a
                        class="dropdown-item d-flex flex-row-reverse drop_a"
                        href={link}
                      >
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="header_item_mobile">
          <button>Tomer</button>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
