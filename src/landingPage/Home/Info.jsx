import React from "react";

const Info = () => {
  return (
    <div className="  p-2 mt-4 grid-cols-2 ">
      <div className="  flex flex-row">
        <div className="grid grid-col-1 px-28 gap-4">
          <h2 className="text-2xl font-bold">Contact-Us</h2>
          <div className="text-lg font-semibold underline">
            <p> (123) 456-7890</p>
          </div>
          <div className="text-lg font-sarif underline font-bold">
            <p>hi@mygroovydomain.com</p>
          </div>

          <div className="text-lg  underline font-extralight">
            <p>123 Example Street</p>
          </div>

          <div className=" font-serif text-xl font-light underline">
            <p>San Franciso, CA 12345</p>
          </div>
        </div>
        <div className="grid grid-cols-2 px-96 gap-4 ">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            placeholder="Your name"
            className="border border-b-gray-700 rounded-lg p-2 w-fit "
          />
          <label htmlFor="">Email:</label>
          <input
            type="text"
            placeholder="Enter E-mail"
            className="border border-b-gray-700 rounded-lg p-2 w-fit"
          />
          <label htmlFor="">Message:</label>
          <textarea id="w3review" name="" rows="4" cols="400" className="border border-slate-400 w-50  rounded-sm"> </textarea>
          <div className="w-50">
          <button
            type="button"
            className="  rounded-lg text-xl bg-gray-800 justify-self-center text-white p-2 m-4 cursor-pointer hover:bg-stone-600 "
          >
            Submit Feedback
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
