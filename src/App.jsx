import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import LandingPage from "./Pages/LandingPage";
import Role from "./Components/role";
import Login from "./Components/Login";
import MentorSignup from "./Components/Mentorsignup";
import StudentLogin from "./Components/StudentLogin";
import MentorDashboard from "./Components/MentorDashboard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/role" element={<Role />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/MentorSignup" element={<MentorSignup />} />
        <Route path="student-login" element={<StudentLogin/>} />
        <Route path="mentor-dashboard" element={<MentorDashboard/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/chatroom" element={<Chatroom />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
