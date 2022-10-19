import React from "react";
import Swiper from "../../Components/Swiper/Swiper";
import "./Home.css";
import Button from "@mui/material/Button";
import CarouselImgList from "../../Assets/CarouselImgList";
import IconImgList from "./assets/IconImgList";
import ServiceIconMobile from "./Comps/ServiceIconMobile";
import Margin from "../../Components/Margin";
import SwiperComments from "../../Components/Swiper/SwiperComments";
import comments from "./comments";
const HomeMobile = () => {
  return (
    <div className="home_root_mobile">
      <div className="home_about_mobile">
        <p className="home_about_header_mobile">שלום נטף</p>
        <p className="home_about_secondHeader_mobile">
          תיקונים והנחת קווי מים, עבודות טרקטור
        </p>
        <p className="home_about_p_mobile">
          חברתנו עוסקת במתן שירותים עם ותק של כ-40 שנה בתשתיות מים ביוב וניקוז,
          איתור פיצוצי מים ותיקונם ע"י מכשירים מתקדמים מהטובים בשוק. שלום נטף
          הינו קבלן רשום מספר 32659
        </p>
        <Button
          href="/about"
          variant="contained"
          style={{ backgroundColor: "#2e3cb6" }}
        >
          קרא עוד
        </Button>
      </div>
      <Margin bottom={10} />
      <div>
        {IconImgList.map(({ title, link }) => {
          return <ServiceIconMobile title={title} src={link} />;
        })}
      </div>
      <SwiperComments comments={comments} />
    </div>
  );
};

export default HomeMobile;
