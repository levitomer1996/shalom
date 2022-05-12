import React, { useState } from "react";
import Carousel from "../../Components/Carousel/Carousel";

import { Parallax } from "react-scroll-parallax";
import { Helmet } from "react-helmet";
import "./Home.css";
import ServiceIcon from "./Comps/ServiceIcon";
import Swiper from "../../Components/Swiper/Swiper";
import ServiceIconMobile from "./Comps/ServiceIconMobile";
import SwiperMobile from "../../Components/Swiper/SwiperMobile";

const Home = () => {
  const [iconSize, setIconSize] = useState(100);
  const [parallaxDirection, setParallaxDirection] = useState("top");

  const handleIconSize = (progress) => {
    const para = document.getElementById("pc_parallax").getAttribute("display");
    if (iconSize < 170 && parallaxDirection == "top" && para != "none") {
      setIconSize(iconSize + 0.25);
    }
  };

  const icons_img_list = [
    {
      title: " צוות חירום לעבודות דחופות 24 שעות ביממה ",
      link: "https://i.ibb.co/bBj3SJ5/24-hours-phone-service.png",
    },
    {
      title: 'התקנת מזח"ים ותחזוקתם',
      link: "https://i.ibb.co/3h982B5/pressure-gauge.png",
    },
    {
      title: "איתור פיצוצי מים ותיקונם",
      link: "https://i.ibb.co/T2HDXNb/natural-gas-1.png",
    },
    {
      title: "תשתיות מים ביוב וניקוז",
      link: "https://i.ibb.co/DCMjd30/2823606.png",
    },
  ];
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content='חברתנו עוסקת במתן שירותים עם ותק של כ-40 שנה בתשתיות מים ביוב וניקוז, איתור פיצוצי מים ותיקונם ע"י מכשירים מתקדמים מהטובים בשוק. שלום נטף הינו קבלן רשום מספר 32659'
        />
      </Helmet>
      <Carousel />
      <div className="home_about">
        <div className="home_about_header">שלום נטף</div>
        <div className="home_about_sub_header">
          תיקונים והנחת קווי מים, עבודות טרקטור
        </div>
        <div className="home_about_para_cont">
          <p className="home_about_para_text">
            חברתנו עוסקת במתן שירותים עם ותק של כ-40 שנה בתשתיות מים ביוב
            וניקוז, איתור פיצוצי מים ותיקונם ע"י מכשירים מתקדמים מהטובים בשוק.
            שלום נטף הינו קבלן רשום מספר 32659
          </p>
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <a
            href="/about"
            class="btn btn-primary"
            style={{ backgroundColor: "#2e3cb6" }}
          >
            קרא עוד
          </a>
        </div>
      </div>
      <Parallax
        id="pc_parallax"
        speed={1}
        onProgressChange={(progress) => handleIconSize(progress)}
        onExit={() => {
          setIconSize(100);
        }}
      >
        <div className="service_icon_container">
          {icons_img_list.map(({ title, link }) => {
            return <ServiceIcon title={title} src={link} size={100} />;
          })}
        </div>
      </Parallax>

      <div className="service_icon_container_mobile">
        {icons_img_list.map(({ title, link }) => {
          return <ServiceIconMobile title={title} src={link} />;
        })}
      </div>
      <div className="swiper_container">
        <p className="swiper_title">הפרוייקטים שלנו</p>
        <Swiper />
        <SwiperMobile />
        <a
          href="/projects"
          class="btn btn-primary"
          style={{ backgroundColor: "#2e3cb6" }}
        >
          לעוד פרוייקטים
        </a>
      </div>
    </div>
  );
};

export default Home;
