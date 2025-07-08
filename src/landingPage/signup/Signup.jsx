import React ,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Signup = () => {
  const [firstName , setFirstName ] = useState("");
const [email , setEmail ] = useState("");
const [password , setPassword ] = useState("");
const handler = async () => {
  const response = await axios.post("http://localhost:3000/signup",{
    firstName,
    email,
    password
  })
  console.log(response);
}
  return (
    <div className="min-h-screen bg-orange-100 ">
      <div className="flex flex-col items-center justify-center h-fit p-8  ">
        <h1 className="text-3xl font-bold underline p-1">Create an Account</h1>
        <p className="mt-4">
          Already!! have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline hover:text-orange-800"
          >
            Login Now
          </Link>
        </p>
        <form className="w-full max-w-md">
          <div className="mb-2 p-1">
            <label
              htmlFor="name"
              className=" block text-gray-700 font-bold mb-2"
            >
              FirstName:
            </label>
            <input
              type="text"
              id="text"
              className="w-full p-2 border border-gray-400 rounded-xl"
              placeholder="Enter your name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-2 p-1">
            <label htmlFor="name" className="block text-gray-00 font-bold mb-2">
              LastName:
            </label>
            <input
              type="text"
              id=""
              className="w-full p-2 border border-gray-400 rounded-xl"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-2 p-1">
            <label
              htmlFor="email"
              className=" block text-gray-700 font-bold mb-2"
            >
              Email ID:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-400 rounded-xl"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2 p-1">
            <label
              htmlFor="password"
              className="block text-gray-00 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-400 rounded-xl"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <div>
            <input type="checkbox" className="text-center m-2 mt-5 border-0 cursor-pointer " style={{width:"20px",height:"20px", marginRight:"10px", position:"relative", top:"6px"}}  />
              
                I agree to the {" "}
                <span className="text-blue-500 hover:underline hover:text-blue-800">
                  Terms and Conditions
                </span>
              
          
          </div>

          <div className="flex justify-center ">
            <button
              type="submit"
              className="bg-slate-500 hover:bg-slate-700 text-white font-serif w-full p-2 m-2 rounded-lg border border-slate-600 text-xl cursor-pointer"
              onClick={handler}
            >
              Create an Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
