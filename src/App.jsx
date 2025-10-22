import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import LandingPage from "./Components/LandingPage";
import Role from "./Components/role";
import Login from "./Components/Login";
import MentorSignup from "./Components/MentorSignup";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/role" element={<Role />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/mentorsignup" element={<MentorSignup />} />
      </Routes>
    </>
  );
};

export default App;
