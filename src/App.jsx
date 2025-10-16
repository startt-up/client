import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import LandingPage from "./Components/LandingPage";
import Role from "./Components/role";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/role" element={<Role />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/mentor-signup" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
