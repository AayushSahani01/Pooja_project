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
    <div className="flex flex-col py-4 m-0 rounded-lg shadow-lg">
      <div className="flex flex-col p-1 m-1  ">
        <div className="p-12 m-0 flex items-start justify-between w-full font-mono ">
          <h1 className="text-2xl font-serif font-bold underline decoration-amber-600">
            {" "}
            Pooja Designer Boutique
          </h1>
          <div className="flex items-center gap-4 pr-4">
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
       </div>
       
      
      
       </div>
       </div>
        <div className="w-full h-fit relative overflow-hidden rounded-lg shadow-lg">
          <ImageSlider slides={slides} />
        </div>
      </div>
    
  );
};

export default HomeSection;
