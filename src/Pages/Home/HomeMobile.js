import React from "react";
import Swiper from "../../Components/Swiper/Swiper";
import "./Home.css";

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
      </div>
      <Swiper />
    </div>
  );
};

export default HomeMobile;
