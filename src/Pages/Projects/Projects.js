import React from "react";
import { Helmet } from "react-helmet";
import "./Projects.css";
import img2 from "./Assets/2.png";
import img1 from "./Assets/Untitled.png";
import img3 from "./Assets/Untitled3.png";
import img5 from "./Assets/Untitled5.png";
import img4 from "./Assets/Untitled4.png";
import img6 from "./Assets/Untitled7.png";
import img7 from "./Assets/Untitled8.png";
import img8 from "./Assets/Untitled9.png";
import Lottie from "lottie-react";
import digger from "./digger.json";

const Projects = () => {
  const imagesList = [img1, img2, img3, img4, img5, img6, img7, img8];
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
        {imagesList.map((item) => {
          return <img src={item} className={"imageList"} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
