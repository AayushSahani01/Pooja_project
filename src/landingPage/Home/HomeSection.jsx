import React from "react";
import ImageSlider from "./ImageSlider";
import ThemeToggle from "../ThemeToggle";
import { SearchIcon } from "lucide-react";
 

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
    <>
      <div className="pt-18 p-1 m-2">
        <div className="pt-4 flex justify-between items-center ">
          <h1 className="text-3xl pl-12 font-serif font-bold underline decoration-slate-600 ">
            {" "}
            Pooja Designer Boutique
          </h1>
          <span className="flex items-center gap-4 pr-4">
          <form className="flex border-2 border-gray-300 rounded-full p-2 hover:border-stone-600">
          
            <input
              type="Search"
              placeholder="Enter your Text here..."
              name="search"
              aria-label="Search"
              className=" focus:outline-none m-"
            />
   
            <SearchIcon className="w-6 h-6 hover:cursor-pointer hover:text-stone-600 "/>
          
          </form>
         
             <ThemeToggle />
       </span>
       
      
      
       </div>
       </div>
        <div className="w-full h-screen bg-cover rounded-2xl  shadow-lg relative overflow-hidden ">
          <ImageSlider slides={slides} />
      </div>
    </>
  );
};

export default HomeSection;
