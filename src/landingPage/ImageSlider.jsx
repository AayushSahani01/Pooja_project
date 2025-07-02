import React, { useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import HomeSection from "./HomeSection";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 0.5s ease-in-out",
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  setTimeout(() => {
    goToNext();
  }, 3000);
  return (
    <div
      className="slider"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        padding: "8px",
        margin: "0",
      }}
    >
      <div style={{ slideStyles }}>
        <div
          className="text-3xl text-white bg-yellow-900 absolute top-1/2 left-0 cursor-pointer text-center"
          onClick={goToPrev}
        >
          <FaAnglesLeft />
        </div>
        <div
          className="text-3xl text-white bg-yellow-900 absolute top-1/2 right-0 cursor-pointer text-center"
          onClick={goToNext}
        >
          <FaAnglesRight />
        </div>

        <img
          src={slides[currentIndex].url}
          alt="images"
          srcset=""
          style={{ width: "100%", height: 960 }}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
