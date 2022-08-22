import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Navigation } from "swiper";

export default function Carousel({ images }) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map((img) => {
          return (
            <SwiperSlide>
              <img src={img} style={{ maxHeight: "100%", height: "500px" }} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
