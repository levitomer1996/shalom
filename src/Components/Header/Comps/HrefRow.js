import React from "react";
import a_list from "../a_list";
import "../Header.css";

const HrefRow = () => {
  return (
    <div className="d-flex flex-row header_item ">
      {a_list.map(({ title, link, icon }) => {
        return (
          <a href={link} className="href_a">
            <img style={{ width: 50, height: 50 }} src={icon} />
            <p className="href_header" href={link}>
              {title}
            </p>
          </a>
        );
      })}
    </div>
  );
};

export default HrefRow;
