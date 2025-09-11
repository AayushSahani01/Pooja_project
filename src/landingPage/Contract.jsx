import React from "react";

const Contract = () => {
  return (
    <div className="flex flex-col text-center ">
      <div className="text-4xl font-bold font-sans ">
        <h1>What are you looking for ?</h1>
      </div>
      <div className="flex flex-row p-6 m-4">
        <input
          type="search"
          name="Search"
          id=""
          placeholder="Hey,Typing here..."
          className="w-5/6 border border-stone-500 p-2 m-2 rounded-full focus:outline-slate-600 focus:border-stone-900"
        />
        <button
          type="button"
          className="px-4 m-2 border border-stone-500 rounded-full text-xl bg-gray-800 text-amber-50 text-center line-clamp-5  w-1/6 h-12 hover:bg-stone-600 transition-colors duration-300"
        >
          Search Now
        </button>
      </div>
    </div>
  );
};

export default Contract;
