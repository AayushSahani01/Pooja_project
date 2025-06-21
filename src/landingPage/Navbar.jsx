import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="Container p-0 m-0 rounded-lg shadow-lg fixed w-full h-fit bg-white z-10">
      <div className="row flex flex-row justify-evenly items-center  ">
        <div className="w-1/4">
          <img
            src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/images-2.jpg"
            alt="logo"
            className="w-18 h-14 rounded-full"
          />
        </div>
        <div className=" rounded-lg w-2/4  ">
          <ul className="flex flex-row justify-evenly gap-x-8 text-[19px] items-center list-none ">
            <li className='cursor-pointer hover:text-slate-400 font-semibold"'>
              Home
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold"'>
              About
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold"'>
              New Arrivals{" "}
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold"'>
              Support
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold"'>
              Shop
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold"'>
              Weddings
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold underline-offset-4"'>
              New Collection
            </li>
            <li className="text-3xl cursor-pointer hover:text-4xl hover:text-slate-600">
              <FaShoppingCart />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
