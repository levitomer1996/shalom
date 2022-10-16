import React from "react";
import CarouselImgList from "../../Assets/CarouselImgList";
import Lottie from "lottie-react";
import digger from "./digger.json";
import "./Projects.css";
const ProjectsMobile = () => {
  return (
    <div className="projects_mobile">
      <div className="projects_title">
        <div className="project_title_icon_container">
          <Lottie
            style={{ width: 100, height: 100 }}
            animationData={digger}
            loop={true}
          />
          <p className="projects_title_p">הפרוייקטים שלנו </p>
          <Lottie
            style={{ width: 100, height: 100 }}
            animationData={digger}
            loop={true}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectsMobile;
