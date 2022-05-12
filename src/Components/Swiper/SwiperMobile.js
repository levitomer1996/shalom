// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Swiper.css";
export default () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper_mobile"
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co/fGq8XC7/IMG-20200329-WA0021-02c28341-640w.webp"
          style={{ width: 100, height: 100 }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/fGq8XC7/IMG-20200329-WA0021-02c28341-640w.webp"
          style={{ width: 100, height: 100 }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/fGq8XC7/IMG-20200329-WA0021-02c28341-640w.webp"
          style={{ width: 100, height: 100 }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/fGq8XC7/IMG-20200329-WA0021-02c28341-640w.webp"
          style={{ width: 100, height: 100 }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
