import React from "react";

const ServiceIconMobile = ({ title, src }) => {
  return (
    <div
      style={{
        padding: 10,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={src} style={{ width: 100, height: 100 }} />
      <div style={{ width: "80%" }}>
        <p className="serviceIcon_Paragraph">{title}</p>
      </div>
    </div>
  );
};

export default ServiceIconMobile;
