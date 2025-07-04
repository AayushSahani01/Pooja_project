import React ,{useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("anshu@gmail.com");
    const [password, setPassword] = useState("12345678");
    const handler = async () => {
        const response = await axios.post("http://localhost:3000/login",{
            email,
            password
        })
        console.log(response);
    } 
    
    return (
        <div className="min-h-screen bg-slate-200">
        <div className="flex flex-col items-center justify-center h-fit mt-10 ">
            <h1 className="text-3xl font-bold underline p-2">Login Your Account</h1>
            <p className="mb-10 text-gray-600">Please enter your email and password to login</p>
            <form className="w-full max-w-md">
                <div className="mb-4 p-1">
                    <label htmlFor="email" className=" block text-gray-700 font-bold mb-2">
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
                <div className="mb-4 p-1">
                    <label htmlFor="password" className="block text-gray-00 font-bold mb-2">
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
                 <div className="mb-4 p-1">
                    <label htmlFor="password" className="block text-gray-00 font-bold mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                         id="password"
                        className="w-full p-2 border border-gray-400 rounded-xl"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex justify-center ">
                <button
                    type="submit"
                    className="bg-slate-500 hover:bg-slate-700 text-white font-serif w-full p-2 m-2 rounded-lg border border-slate-600 text-xl cursor-pointer"
                 onClick={handler}>
                    Login Now
                </button>
                </div>
            </form>
            <p className="mt-4 text-xl">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-800 hover:underline hover:text-orange-800 font-mono font">
                 SignUp
                </Link>
            </p>
        </div>
        </div>
    );
};

export default Login;