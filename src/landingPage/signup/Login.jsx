import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
                    className="bg-slate-500 hover:bg-slate-700 text-white font-serif w-full p-2 m-2 rounded-lg border border-slate-600 text-xl"
                >
                    Login Now
                </button>
                </div>
            </form>
            <p className="mt-4">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline hover:text-orange-800">
                 Sign-Up
                </Link>
            </p>
        </div>
        </div>
    );
};

export default Login;