import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailId) {
            newErrors.emailId = "Email is required";
        } else if (!emailRegex.test(emailId)) {
            newErrors.emailId = "Please enter a valid email address";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }

        // Confirm password validation
        if (!confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handler = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/login", {
                emailId,
                password
            });
            console.log(response);
            // Handle successful login here
        } catch (error) {
            console.error("Login error:", error);
            setErrors({ general: "Login failed. Please check your credentials." });
        } finally {
            setIsLoading(false);
        }
    }; 
    
    return (
        <div className="min-h-screen bg-slate-200 text-black">
        <Navbar/>
        <div className="flex flex-col items-center justify-center h-fit ">
            <h1 className="text-3xl font-bold underline p-4 mt-14">Login Your Account</h1>
            <p className="mb-10 text-gray-600">Please enter your email and password to login</p>
            <form className="w-full max-w-md" onSubmit={handler}>
                {errors.general && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                        {errors.general}
                    </div>
                )}
                
                <div className="mb-4 p-1">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email ID: <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        className={`w-full p-2 border rounded-xl ${
                            errors.emailId ? 'border-red-400 bg-red-50' : 'border-gray-400'
                        }`}
                        placeholder="example@gmail.com"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        required
                        aria-describedby={errors.emailId ? "email-error" : undefined}
                    />
                    {errors.emailId && (
                        <p id="email-error" className="text-red-500 text-sm mt-1">
                            {errors.emailId}
                        </p>
                    )}
                </div>
                
                <div className="mb-4 p-1">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        className={`w-full p-2 border rounded-xl ${
                            errors.password ? 'border-red-400 bg-red-50' : 'border-gray-400'
                        }`}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        aria-describedby={errors.password ? "password-error" : undefined}
                    />
                    {errors.password && (
                        <p id="password-error" className="text-red-500 text-sm mt-1">
                            {errors.password}
                        </p>
                    )}
                </div>
                
                <div className="mb-4 p-1">
                    <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                        Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className={`w-full p-2 border rounded-xl ${
                            errors.confirmPassword ? 'border-red-400 bg-red-50' : 'border-gray-400'
                        }`}
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        aria-describedby={errors.confirmPassword ? "confirm-password-error" : undefined}
                    />
                    {errors.confirmPassword && (
                        <p id="confirm-password-error" className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>
                
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full p-2 m-2 rounded-lg text-xl font-serif transition-colors ${
                            isLoading 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-slate-500 hover:bg-slate-700 cursor-pointer'
                        } text-white border border-slate-600`}
                    >
                        {isLoading ? 'Logging in...' : 'Login Now'}
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