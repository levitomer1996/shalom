import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Digger from "./digger.json";

const LottieAnimation = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Digger,
    });
  }, []);
  return <div style={{ height: 250, width: 300 }} ref={anime}></div>;
};

export default LottieAnimation;
