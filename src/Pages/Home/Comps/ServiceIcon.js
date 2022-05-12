import React from "react";
import "../Home.css";
const ServiceIcon = ({ title, src, size }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        width: "20%",
        height: "100px",
        paddingBottom: "10px",
      }}
    >
      <img src={src} style={{ width: size, height: size }} />
      <p className="serviceIcon_Paragraph">{title}</p>
    </div>
  );
};

export default ServiceIcon;
