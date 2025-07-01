import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Qna = () => {
 
   
  return (
    <div className=" grid grid-cols-3 p-2 m-2 gap-4 border-t-2 border-gray-300 shadow-lg">
      <div className="flex flex-col ">
        <span className=" flex flex-coljustify-center items-center p-2 m-1 ">
          <img
            src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/images-2.jpg"
            alt="logo.imgage"
            srcset=""
            width={150}
            className="flex justify-center items-center rounded-full"
          />
          <h2 className="text-2xl font-bold p-2 m-2">
            Pooja Designer Boutique
          </h2>
        </span>
        <div className="text-xl font-light p-2 m-2">
          <p>
            Welcome to Pooja Designer Boutique, your one-stop destination for
            top-quality Designing clothes. We’re committed to great prices, fast
            delivery, and excellent customer service.
          </p>
        </div>
      </div>
      <div className="  grid-cols-1 p-2 m-2 font-serif  ">
        <div className="flex flex-col justify-center items-center p-4 ">
          <span className="text-xl font-bold p-2 cursor-pointer">
            Quick Links
          </span>
          <span className="text-xl font-bold p-2 cursor-pointer">
            Terms & Conditions
          </span>
          <span className="text-xl font-bold p-2 cursor-pointer">
            Privacy Policy
          </span>
          <span className="flex flex-row cursor-pointer gap-7 justify-center items-center p-2 m-2 hover:text-slate-500 text-5xl">
            <FaInstagramSquare />
            <FaFacebookSquare />
            <IoLogoYoutube />
            <FaSquareXTwitter />
            <FaLinkedin />
          </span>
          <span className="text-xl p-2 m-2 text-center">
            <p>Copyright &copy; 2025 Pooja Designer Boutique</p>
          </span>
          <div>
            <p className="text-xl p-2 m-2">
              All rights reserved. Designed by <b>Pooja Designer Boutique.</b>
            </p>
          </div>
        </div>
      </div>
      <div className="  grid-cols-1  p-2 m-2">
        <div>
          <div className="text-center p-2 m-2 text-2xl font-bold">
            <h1 className="underline ">Contacts</h1>
          </div>
          <span className=" flex flex-row gap-2 text-4xl p-2 m-2">
            <SlLocationPin />
            <p className="text-xl">
              HOUSE NO 38, BLOCK 4, MOTI NAGAR, Ramesh Nagar, New Delhi, West
              Delhi- 110015, Delhi
            </p>
          </span>

          <span className="flex flex-row gap-2 p-2 m-2 text-3xl">
            <MdOutlineMarkEmailRead />
            <h4 className="text-xl cursor-pointer underline hover:text-slate-600">
              contact@100xdevs.com
            </h4>
          </span>
          <div className="flex flex-row gap-2 p-2 m-2 text-xl">
            <h1><u>Phone No: +91 9999999999</u></h1>
          </div>
          <div className="text-center p-2 m-2 text-sm font-bold">
            <p >Made 🇮🇳 India ❤️ </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;
