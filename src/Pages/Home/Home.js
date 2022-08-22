import React, { useState } from "react";
import Carousel from "../../Components/Carousel/Carousel";

import { ParallaxBanner } from "react-scroll-parallax";
import { Helmet } from "react-helmet";
import "./Home.css";
import ServiceIcon from "./Comps/ServiceIcon";
import Swiper from "../../Components/Swiper/Swiper";
import ServiceIconMobile from "./Comps/ServiceIconMobile";
import Margin from "../../Components/Margin";
import HomeMobile from "./HomeMobile";
import IconImgList from "./assets/IconImgList";
import CarouselImgList from "../../Assets/CarouselImgList";
import Parallex from "../../Components/Parallex/Parallex";

const Home = () => {
  const [iconSize, setIconSize] = useState(100);
  const [parallaxDirection, setParallaxDirection] = useState("top");

  return (
    <div className="home_root">
      <Helmet>
        <meta
          name="description"
          content='חברתנו עוסקת במתן שירותים עם ותק של כ-40 שנה בתשתיות מים ביוב וניקוז, איתור פיצוצי מים ותיקונם ע"י מכשירים מתקדמים מהטובים בשוק. שלום נטף הינו קבלן רשום מספר 32659'
        />
      </Helmet>

      <Carousel images={CarouselImgList} />
      <div className="home_pc">
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

        <div className="service_icon_container">
          {IconImgList.map(({ title, link }) => {
            return <ServiceIcon title={title} src={link} size={100} />;
          })}
        </div>

        <div className="swiper_container">
          <p className="swiper_title">הפרוייקטים שלנו</p>

          <Swiper images={CarouselImgList} />

          <Margin bottom={10} />
          <a
            href="/projects"
            class="btn btn-primary"
            style={{ backgroundColor: "#2e3cb6" }}
          >
            לעוד פרוייקטים
          </a>
        </div>
      </div>
      <HomeMobile />
    </div>
  );
};

export default Home;
