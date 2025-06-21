import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Qna = () => {
  return (
    <div className="   grid grid-cols-3 p-2 m-2 gap-4 ">
      <div className="flex flex-col  bg-amber-800">
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
      <div className="bg-gray-600 grid-cols-1 text-white p-2 m-2 font-serif  ">
        <div className="flex flex-col justify-center items-center p-4">
          <span className="text-xl font-bold p-2">Quick Links</span>
          <span className="text-xl font-bold p-2">Terms & Conditions</span>
          <span className="text-xl font-bold p-2">Privacy Policy</span>
          <span className="flex w-3/4 courser-pointer gap-4 justify-center items-center p-2 m-2 hover:w-fit h-fit">
            <FaInstagramSquare widths={200} />
            <IoLogoYoutube />
            <FaSquareXTwitter />
          </span>
        </div>
      </div>
      <div className="bg-green-600 grid-cols-1 text-white p-2 m-2">
        <div>
            <div>
                <h1>Contacts</h1>
            </div>
            <span className=" flex flex-row   gap-2 text-xl">
            <SlLocationPin />
            <p>HOUSE NO 38, BLOCK 4, MOTI NAGAR, Ramesh Nagar, New Delhi, West Delhi- 110015, Delhi</p>
            </span>
        
            <span className="flex flex-row gap-2 p-2 m-2 text-xl"><MdOutlineMarkEmailRead />
                <h4>contact@100xdevs.com</h4>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Qna;
