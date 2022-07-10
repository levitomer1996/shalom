import React from "react";
import { Helmet } from "react-helmet";
import "./Projects.css";
const Projects = () => {
  return (
    <div>
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
        <p className="projects_title_p">אודות שלום נטף</p>
        <a
          href="https://www.flaticon.com/free-icons/tractor"
          title="tractor icons"
        >
          Tractor icons created by Freepik - Flaticon
        </a>
      </div>
    </div>
  );
};

export default Projects;
