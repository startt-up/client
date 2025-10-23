import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import LandingPage from "./Components/LandingPage";
import Role from "./Components/Role";
import Login from "./Components/Login";
import MentorSignup from "./Components/Mentorsignup";
import StudentLogin from "./Components/StudentLogin";
import MentorDashboard from "./Components/MentorDashboard";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/role" element={<Role />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/MentorSignup" element={<MentorSignup />} />
        <Route path="student-login" element={<StudentLogin/>} />
        <Route path="mentor-dashboard" element={<MentorDashboard/>} />
      </Routes>
    </>
  );
};

export default App;
