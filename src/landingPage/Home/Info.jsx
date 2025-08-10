import React from "react";

const Info = () => {
  return (
    <div className="contact grid grid-cols-2">
      <div className=" flex flex-row justify-baseline text-center items-baseline-center ">
        <div className="grid-col-1 p-2">
        
          <h2 className="text-2xl font-bold p-2">Contact-Us</h2>
      
            <p className="text-lg font-semibold underline pt-4"> (123) 456-7890</p>
    
     
            <p className="text-lg font-sarif underline font-bold pt-4">hi@mygroovydomain.com</p>
       

     
            <p className="text-lg  underline font-extralight pt-4">123 Example Street</p>
     

         
            <p  className=" font-serif text-xl font-light underline pt-4">San Franciso, CA 12345</p>
          
        </div>
        <div className="grid grid-cols-2 gap-2 justify-center items-baseline-center">
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
          <textarea id="w3review" name="" rows="4" cols="400" className="border border-slate-400 w-50  rounded-sm"  placeholder="Enter your message...!!" value="">  </textarea>
          
          <button
            type="button"
            className="text-xl bg-gray-800  text-white p-2 m-4 cursor-pointer hover:bg-stone-600 justify-center items-baseline-center transition-colors duration-300 rounded-full text-center"
          >
            Submit Feedback
          </button>
          </div>
        </div>
      </div>
 
  );
};

export default Info;
