import React from "react";
import "./PierPage.css";
import pier from "./Assets/pier.svg";
const PierPage = () => {
  return (
    <div className="pier_root">
      <div className="pier_title">
        <p className="pier_title_p"> התקנת מזחים</p>
      </div>
      <div className="svg_p">
        <img src={pier} />
        <p>חברתנו מתעסקת בבדיקת מזח"ים התקנת מזח"ים ותחזוקתם.</p>
      </div>
    </div>
  );
};

export default PierPage;
