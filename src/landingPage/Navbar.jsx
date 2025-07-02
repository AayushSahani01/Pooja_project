import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="Container p-0 m-0 rounded-sm shadow-lg fixed w-full h-fit bg-slate-100 z-10">
      <div className="row flex flex-row justify-evenly items-center  ">
        <div className="w-1/5">
          <img
            src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/images-2.jpg"
            alt="logo"
            className="w-18 h-14 rounded-full"
          />
        </div>
        <div className=" rounded-lg w-2/5  ">
          <ul className="flex flex-row justify-evenly gap-x-8 text-[19px] items-center list-none ">
            <li className='cursor-pointer hover:text-slate-400 font-semibold'>
              Home
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold'>
              About
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold'>
              Fashions{" "}
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold'>
              Shop
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold'>
              Weddings
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold'>
              Collection
            </li>
            <li className='cursor-pointer hover:text-slate-400 font-semibold '>
              Support
            </li>
            <li className="text-3xl cursor-pointer hover:text-2xl hover:text-slate-800">
              <FaShoppingCart />
            </li>
            <li  className="text-3xl cursor-pointer hover:text-slate-800 flex float-end"
            ><FiLogIn /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
