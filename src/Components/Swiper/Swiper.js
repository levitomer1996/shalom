// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Swiper.css";
import Carousel from "../Carousel/Carousel";
import RecommendationCard from "../Card/RecommendationCard";
export default ({ images, type, comments }) => {
  return (
    <>
      <div className="swiper_pc">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((img) => {
            return (
              <SwiperSlide>
                <img src={img} style={{ width: 400, height: 400 }} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="swiper_mobile">
        <Carousel images={images} />
      </div>
    </>
  );
};
