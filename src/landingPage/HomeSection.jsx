import React from "react";
import { FaSearch } from "react-icons/fa";

const HomeSection = () => {
  return (
    <div className="  p-12 m-0  rounded-lg shadow-lg">
      <div className="flex flex-col p-1 m-2  ">
        <div className="p-2 m-1 flex items-start justify-between text-2xl font-bold font-mono">
          Pooja Designer Boutique
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Search..."
              className="p-2  rounded-lg border border-gray-500 ml-4"
            />
            <FaSearch />
          </div>
        </div>
        <div className="p-1 m-2 flex justify-center ">
          <img
            loading="lazy"
            src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/pooja-butique.png"
          />
          <img src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/butique.png" />
          <img src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/pooja-butique.png" />
          <img src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/butique.png" />
          <img src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/pooja-butique.png" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
