import React from "react";
import { Helmet } from "react-helmet";
import "./Projects.css";

import Lottie from "lottie-react";
import digger from "./digger.json";
import Carousel from "../../Components/Carousel/Carousel";
import CarouselImgList from "../../Assets/CarouselImgList";
import Swiper from "../../Components/Swiper/Swiper";

const Projects = () => {
  return (
    <div className="projects">
      <Helmet>
        <meta
          name="description"
          content="בין לקוחותנו נימנות מועצות אזוריות כגון:
          שוהם,חבל מודיעין, גזר ועוד...
          כמו כן ניתנים שירותים לאזורי תעשייה מושבים ויישובים.
          "
        />
        <title>שלום נטף - פרוייקטים</title>
      </Helmet>
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
      <div className="project_clients">
        <p className="project_clients_title">בין לקוחותינו</p>
        <p className="project_clients_p">
          בין לקוחותנו נימנות מועצות אזוריות כגון: שוהם,חבל מודיעין, גזר ועוד...
          כמו כן ניתנים שירותים לאזורי תעשייה מושבים ויישובים.
        </p>
      </div>
      <div className="images_container">
        {CarouselImgList.map((item) => {
          return <img src={item} className={"imageList"} />;
        })}
      </div>
      <div className="images_container_mobile">
        <Swiper images={CarouselImgList} />
      </div>
    </div>
  );
};

export default Projects;
