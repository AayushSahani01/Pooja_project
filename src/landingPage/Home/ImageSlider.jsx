import React, { useState, useEffect, useRef } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (!isPaused) {
        goToNext();
      }
    }, 3000);

    return () => resetTimeout();
  }, [currentIndex, isPaused]);

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
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={slideStyles}>
        <div
          className="text-3xl absolute top-1/2 left-0.2 border bg-slate-400 cursor-pointer text-center"
          onClick={goToPrev}
        >
          <FaAnglesLeft />
        </div>
        <div
          className="text-3xl absolute top-1/2 right-2 border bg-slate-400 cursor-pointer text-center"
          onClick={goToNext}
        >
          <FaAnglesRight />
        </div>

        <img
          src={slides[currentIndex].url}
          alt="images"
          style={{ width: "100%", height: "550px", objectFit: 'cover' }}
        />
         <div className="dots">
          {slides.map((slide, slideIndex) => (
            <div
              className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
