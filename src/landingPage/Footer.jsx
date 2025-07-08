import React from "react";

const Footer = () => {
  return (
    <div className="p-2 mb-20 gap-5 ">
      <div className="grid grid-cols-2">
        <div className="">
          <h1 className="text-center text-3xl font-bold">
            Pooja Designer Boutique
          </h1>
          <p className="p-4 m-3 font-light text-gray-500 font-serif">
            Visit us at our Boutique shop in Noida to discover the perfect
            outfit for any occasion.
          </p>
          <input
            type="text"
            value=""
            placeholder="Please enter your email...!"
            className="border border-gray-400 rounded-sm p-4 m-2   w-3/4"
          />
          <button
            type="submit"
            className="border border-gray-500 rounded-sm p-4 m-3 bg-stone-950 text-white font-bold cursor-pointer hover:bg-stone-600 transition-colors duration-300"
          >
            Subscribe
          </button>
        </div>
        <div className=" m-2 px-48 flex-wrap text-xl font-semibold flex ">
          <div className="flex-row justify-between grid grid-cols-2 ">
            <div className="grid grid-cols-1">
              <div className=" cursor-pointer hover:text-stone-600 transition-colors duration-300 hover:underline">Blog</div>
              <div className=" cursor-pointer hover:text-stone-600 transition-colors duration-300 hover:underline">Home</div>
              <div className=" cursor-pointer hover:text-stone-600 transition-colors duration-300 hover:underline">About</div>
              <div className=" cursor-pointer hover:text-stone-600 transition-colors duration-300 hover:underline">Contract</div>
            </div>
            <div className="grid grid-cols-2">
              <div className=" cursor-pointer hover:text-stone-600 transition-colors duration-300 hover:underline">Support</div><br/>
              <div className=" cursor-pointer hover:text-stone-600 transition-colors duration-300 hover:underline">Policy</div><br/>
              <div className=" cursor-pointer hover:text-stone-600 transition-colors duration-300 hover:underline">visit-Us</div><br/>
              <div className=" cursor-pointer hover:text-stone-600 transition-colors duration-300 hover:underline">Shopping</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
