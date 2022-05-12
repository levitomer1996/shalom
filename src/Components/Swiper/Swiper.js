// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Swiper.css";
export default () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper_pc"
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co/fGq8XC7/IMG-20200329-WA0021-02c28341-640w.webp"
          style={{ width: 300, height: 300 }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/fGq8XC7/IMG-20200329-WA0021-02c28341-640w.webp"
          style={{ width: 300, height: 300 }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/fGq8XC7/IMG-20200329-WA0021-02c28341-640w.webp"
          style={{ width: 300, height: 300 }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/fGq8XC7/IMG-20200329-WA0021-02c28341-640w.webp"
          style={{ width: 300, height: 300 }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
