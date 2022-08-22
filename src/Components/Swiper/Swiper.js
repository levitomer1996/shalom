// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Swiper.css";
import Carousel from "../Carousel/Carousel";
export default ({ images }) => {
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
                <img src={img} />
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
