import React from "react";
import ImageSlider from "./ImageSlider";
 

const slides = [
  {
    url: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/pooja-butique.png",
    title: "first",
  },
  {
    url: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/butique.png",
    title: "second",
  },
  {
    url: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/pooja-butique.png",
    title: "third",
  },
  {
    url: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/butique.png",
    title: "forth",
  },
  {
    url: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/pooja-butique.png",
    title: "fifth",
  },
];
const HomeSection = () => {
  return (
    <div className="  p-1 m-0  rounded-lg shadow-lg">
      <div className="flex flex-col p-1 m-1  ">
        <div className="p-14 m-0 flex items-start justify-between w-full font-mono ">
          <h1 className="text-2xl font-serif font-bold underline decoration-amber-800">
            {" "}
            Pooja Designer Boutique
          </h1>

          <form action="" className="flex justify-end">
            <span className="text-gray-500">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="p-1.5 text-xl rounded-lg border border-gray-500 "
              name="search"
            />
          </form>
       
      
       </div>
       </div>
        <div className="w-full h-fit relative overflow-hidden rounded-lg shadow-lg">
          <ImageSlider slides={slides} />
        </div>
      </div>
    
  );
};

export default HomeSection;
