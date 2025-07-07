import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Container p-0 m-0 rounded-sm shadow-lg fixed w-full h-fit  z-10 ">
      <div className="row flex flex-row justify-evenly items-center  ">
        <div className="w-2/6">
          <Link to="/"><img
            src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/images-2.jpg"
            alt="logo"
            className="w-18 h-14 rounded-full"
          /></Link>
        </div>
        <div className=" rounded-lg w-3/6  ">
          <ul className="flex flex-row justify-evenly gap-x-4 text-[19px] items-center list-none ">
            <Link to="/"><li className='cursor-pointer hover:text-slate-400 font-semibold'>
              Home
            </li></Link>
            <Link to="/about"><li className='cursor-pointer hover:text-slate-400 font-semibold'>
              About
            </li></Link>
            <Link to="/blog"><li className='cursor-pointer hover:text-slate-400 font-semibold'>
             Blog
            </li></Link>
            <Link to="/fashion"><li className='cursor-pointer hover:text-slate-400 font-semibold'>
              Fashions
            </li></Link>
            <Link to="/collection"><li className='cursor-pointer hover:text-slate-400 font-semibold'>
               Collection
            </li></Link>
            <Link to="/contacts"><li className='cursor-pointer hover:text-slate-400 font-semibold'>
             Contacts
            </li></Link>
            <Link to="/support"><li className='cursor-pointer hover:text-slate-400 font-semibold '>
              Support
            </li></Link>
            <Link to="/order"><li className="text-3xl cursor-pointer hover:animate-bounce hover:text-slate-700">
              <FaShoppingCart />
            </li></Link>
            <Link to={"/login"}><li  className="text-3xl cursor-pointer hover:text-slate-600 flex float-end hover:animate-pulse" title="Login"
            >
             <FiLogIn />
              </li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
