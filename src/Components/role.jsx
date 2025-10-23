import React from "react";
import { useNavigate } from "react-router-dom";
import studentIcon from "../assets/icon2.png";
import mentorIcon from "../assets/mentor.png";

const Role = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <div className="absolute top-5 left-8 text-lg font-medium text-gray-800">
          Logo
        </div>

        <div className="text-center mt-10">
          <h1 className="text-[43px] font-bold bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text mb-2">
            Choose your role
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-10">
            Select whether you are a student looking for mentorship or a mentor ready to guide.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Student Card */}
          <div
            onClick={() => navigate("/Signup")}
            className="cursor-pointer bg-purple-50 hover:bg-purple-100 transition-all duration-200 rounded-2xl shadow-md px-10 py-8 flex flex-col items-center text-center w-72"
          >
            <img src={studentIcon} alt="Student Icon" className="h-16 w-16 mb-4" />
            <h2 className="text-lg font-semibold text-black mb-1">Student</h2>
            <p className="text-gray-600 text-sm">Find guidance and support</p>
          </div>

          {/* Mentor Card */}
          <div
            onClick={() => navigate("/MentorSignup")}
            className="cursor-pointer bg-purple-50 hover:bg-purple-100 transition-all duration-200 rounded-2xl shadow-md px-10 py-8 flex flex-col items-center text-center w-72"
          >
            <img src={mentorIcon} alt="Mentor Icon" className="h-16 w-16 mb-4" />
            <h2 className="text-lg font-semibold text-black mb-1">Mentor</h2>
            <p className="text-gray-600 text-sm">Share your knowledge and experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Role;
