import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'; // for navigation

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // navigation hook

  const togglePassword = () => setShowPassword(!showPassword);

  // Redirect to role page on Sign Up
  const handleSignUpTab = () => {
    navigate('/role');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

        {/* Tabs */}
        <div className="flex justify-center mb-6 bg-gray-100 rounded-full p-1">
          <button
            className="flex-1 text-center py-2 rounded-full font-medium transition-colors duration-300
                       bg-indigo-500 text-white shadow-sm"
          >
            Login
          </button>
          <button
            onClick={handleSignUpTab} // redirect on click
            className="flex-1 text-center py-2 rounded-full font-medium transition-colors duration-300
                       text-gray-600 hover:bg-gray-200"
          >
            Sign Up
          </button>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Mentor Login</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 text-gray-500 hover:text-indigo-500 transition bg-gray-100 rounded-full shadow-sm"
            >
              {showPassword ? <AiOutlineEye size={22} /> : <AiOutlineEyeInvisible size={22} />}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm sm:text-base">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-indigo-500 hover:underline">Forgot password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-indigo-500 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">Or continue with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Login */}
        <button className="w-full py-2 border border-indigo-400 text-indigo-600 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-50 transition">
          <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
            <path fill="#4285F4" d="M533.5 278.4c0-18.3-1.5-36-4.4-53.2H272v100.8h146.9c-6.3 34-25 62.9-53.2 82.2v68h85.8c50.2-46.3 79-114.6 79-197.8z"/>
            <path fill="#34A853" d="M272 544.3c71.8 0 132.1-23.6 176.1-64.2l-85.8-68c-23.8 16-54.2 25.5-90.3 25.5-69.3 0-128-46.7-149.1-109.6h-88.5v68.7c44 87 133 148.6 237.6 148.6z"/>
            <path fill="#FBBC05" d="M122.6 337.7c-10.1-30.3-10.1-62.8 0-93.1v-68.7h-88.5c-38.5 75-38.5 163.4 0 238.4l88.5-68.7z"/>
            <path fill="#EA4335" d="M272 107.2c37 0 70.1 12.7 96.3 33.8l72.2-72.2C404.1 24 343.8 0 272 0 167.4 0 78.4 61.6 34.4 148.6l88.5 68.7C144 153.9 202.7 107.2 272 107.2z"/>
          </svg>
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
