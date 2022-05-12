import React from "react";
import "./About.css";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content='הצוות מונה בעלי מקצוע אמינים בעלי נסיון רב בתחום, צוות מקצועי ואדיב שעובר הכשרות מקצועיות בתחום.
ברשותנו כל האישורים והביטוחים לביצוע העבודות
בבעלותנו מיכשור מתקדם , טרקטורים , משאיות , מחפרון, גלאי נזילות, פיצוצים ועוד... התקנת מזח"ים: חברתנו מתעסקת בבדיקת מזח"ים התקנת מזח"ים ותחזוקתם
שלום נטף הינו קבלן רשום מספר 32659'
        />
        <title>שלום נטף - אודות</title>
      </Helmet>
      <div className="about_title">
        <p className="about_title_p">אודות שלום נטף</p>
      </div>
      <div className="contain">
        <div className="img_cont">
          <div className="img_div">
            <img
              className="about_img"
              src="https://i.ibb.co/Wx87QVB/4821-1ef345c2-1280w.webp"
            />
          </div>
          <div className="img_div">
            <img
              className="about_img_right"
              src="https://i.ibb.co/71GsDhV/766-4a16b5ca.jpg"
            />
          </div>
        </div>
        <div>
          <p className="about_us_title">קצת עלינו</p>
          <p className="about_us_para ">
            הצוות מונה בעלי מקצוע אמינים בעלי נסיון רב בתחום, צוות מקצועי ואדיב
            שעובר הכשרות מקצועיות בתחום.
          </p>
          <div className="para_cont">
            <p className="about_us_para ">
              ברשותנו כל האישורים והביטוחים לביצוע העבודות
            </p>
            <p className="about_us_para ">
              בבעלותנו מיכשור מתקדם , טרקטורים , משאיות , מחפרון, גלאי נזילות,
              פיצוצים ועוד... התקנת מזח"ים: חברתנו מתעסקת בבדיקת מזח"ים התקנת
              מזח"ים ותחזוקתם.
            </p>
          </div>
          <p className="about_us_para ">שלום נטף הינו קבלן רשום מספר 32659</p>
        </div>
      </div>
    </div>
  );
};

export default About;
