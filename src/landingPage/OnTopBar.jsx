import React, { useState, useEffect } from "react";
import { ArrowBigUp } from "lucide-react";
import styled from "styled-components";

const OnTopBar = () => {
  const [isvisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const onTopbtn = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / windowHeight) * 100;
    setScrollProgress(scrolled);

    document.querySelector(".on-top-bar");
    if (window.scrollY >  250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Render the component AS useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledCSS>
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {isvisible && (
        <div className="on-top-bar" onClick={onTopbtn}>
          <ArrowBigUp className="text-xl"/>
        </div>
      )}
    </StyledCSS>
  );
};

const StyledCSS = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .on-top-bar {
    position: fixed;
    bottom: 24px;
    right: 20px;
    background-color: #a14034;
    color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f14034;
      transform: scale(1.2);
    }
  }

  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background-color: #f14034;
    z-index: 9999;
    transition: width 0.2s ease-in-out;
  }
`;  

export default OnTopBar;
