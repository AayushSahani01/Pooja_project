import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../Navbar";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // First name validation
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters long";
    }

    // Last name validation
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters long";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Terms agreement validation
    if (!agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the Terms and Conditions";
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
      const response = await axios.post("http://localhost:3000/signup", {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email,
        password
      });
      console.log(response);
      // Handle successful signup here
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ general: "Signup failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=" bg-orange-100 text-black ">
      <NavBar/>
      <div className="flex flex-col items-center justify-center h-fit p-16  ">
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
        <form className="w-full max-w-md" onSubmit={handler}>
          {errors.general && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl">
              {errors.general}
            </div>
          )}
          
          <div className="mb-2 p-1">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              First Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className={`w-full p-2 border rounded-xl ${
                errors.firstName ? 'border-red-400 bg-red-50' : 'border-gray-400'
              }`}
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-red-500 text-sm mt-1">
                {errors.firstName}
              </p>
            )}
          </div>
          
          <div className="mb-2 p-1">
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
              Last Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className={`w-full p-2 border rounded-xl ${
                errors.lastName ? 'border-red-400 bg-red-50' : 'border-gray-400'
              }`}
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
            />
            {errors.lastName && (
              <p id="lastName-error" className="text-red-500 text-sm mt-1">
                {errors.lastName}
              </p>
            )}
          </div>
          
          <div className="mb-2 p-1">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email ID: <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className={`w-full p-2 border rounded-xl ${
                errors.email ? 'border-red-400 bg-red-50' : 'border-gray-400'
              }`}
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>
          
          <div className="mb-2 p-1">
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
              minLength={8}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && (
              <p id="password-error" className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Password must be at least 8 characters long and contain uppercase, lowercase, and numbers.
            </p>
          </div>
          
          <div className="mb-2 p-1">
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
              aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
            />
            {errors.confirmPassword && (
              <p id="confirmPassword-error" className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          
          <div className="mb-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className={`mt-1 w-4 h-4 ${
                  errors.agreeToTerms ? 'border-red-400' : 'border-gray-400'
                }`}
                required
              />
              <span className="text-sm">
                I agree to the{" "}
                <Link to="#" className="text-blue-500 hover:underline hover:text-blue-800">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-blue-500 hover:underline hover:text-blue-800">
                  Privacy Policy
                </Link>
                <span className="text-red-500"> *</span>
              </span>
            </label>
            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm mt-1 ml-7">
                {errors.agreeToTerms}
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
              {isLoading ? 'Creating Account...' : 'Create an Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
