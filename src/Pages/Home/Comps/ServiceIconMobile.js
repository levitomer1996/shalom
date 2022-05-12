import React from "react";

const ServiceIconMobile = ({ title, src }) => {
  return (
    <div style={{}}>
      <img src={src} style={{ width: 50, height: 50 }} />
      <p className="serviceIcon_Paragraph">{title}</p>
    </div>
  );
};

export default ServiceIconMobile;
