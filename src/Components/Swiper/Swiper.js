// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Swiper.css";
import Carousel from "../Carousel/Carousel";
import RecommendationCard from "../Card/RecommendationCard";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
export default ({ images, type, comments }) => {
  SwiperCore.use([Autoplay, EffectFade]);
  return (
    <>
      <div className="swiper_pc">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          fadeEffect={{
            crossFade: true, // enables slides to cross fade
          }}
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
