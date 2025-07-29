import React, { useState, useEffect } from "react";
import { ArrowBigUp } from "lucide-react";
 

const OnTopBar = () => {
  
  const [isvisible, setIsVisible] = useState(false);

  const onTopbtn = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

   
  const handleScroll = () => {
    document.querySelector(".on-top-bar");
    if (window.scrollY > 50) {
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
    <nav className="fixed bottom-4 right-4 z-50">
      {isvisible && (
        <div className="bg-slate-800 p-3 rounded-full" onClick={onTopbtn}>
          <ArrowBigUp />
        </div>
      )}
    </nav>
  );
};
 
export default OnTopBar;
