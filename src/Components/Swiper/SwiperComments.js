import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Swiper.css";
import Carousel from "../Carousel/Carousel";
import RecommendationCard from "../Card/RecommendationCard";
export default ({ comments }) => {
  return (
    <>
      <div className="swiper_pc">
        <Swiper spaceBetween={10} slidesPerView={3}>
          {comments.map(({ name, avatar_link, content }) => {
            console.log({ name, avatar_link, content });
            return (
              <SwiperSlide key={name} style={{ padding: 10 }}>
                <RecommendationCard
                  name={name}
                  avatar_link={avatar_link}
                  content={content}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
