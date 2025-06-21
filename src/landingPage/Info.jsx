import React from "react";

const Info = () => {
  return (
    <div className="  p-4 mt-4 grid-cols-2 ">
      <div className="  flex flex-row">
        <div className="grid grid-col-1 px-28 gap-4">
          <h2 className="text-2xl font-bold">Contact-Us</h2>
          <div className="text-lg font-semibold underline">
            <p> (123) 456-7890</p>
          </div>
          <div className="text-lg font-sarif underline font-bold">
            <p>hi@mygroovydomain.com</p>
          </div>

          <div className="text-lg   underline font-extralight">
            <p>123 Example Street</p>
          </div>

          <div className=" font-serif">
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
          <label htmlFor="">Email:(required)</label>
          <input
            type="text"
            placeholder="Enter E-mail"
            className="border border-b-gray-700 rounded-lg p-2 w-fit"
          />
          <label htmlFor="">Message:</label>
          <input
            type="text"
            placeholder="Type your message here..."
            className="border border-b-gray-700 p-4 rounded-lg w-fit"
          />
          <button
            type="button"
            className=" border border-stone-500 rounded-full text-2xl bg-gray-800 flex justify-self-center text-white p-2 m-6 "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
