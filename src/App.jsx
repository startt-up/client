import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css"; 
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WhyJoinUs from "./WhyJoinUs";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import Signup from "./Components/Signup";

function Home(){
  return (
    <>
     <HeroSection />
      <WhyJoinUs />
      <Testimonials />
      <FAQSection />
    </>
  );
}

function Features() { return <h2>Features Page</h2>; }
function Community() { return <h2>Community Page</h2>; }
function About() { return <h2>About Page</h2>; }
function Contact() { return <h2>Contact Page</h2>; }
function Login() { return <h2>Login Page</h2>; }


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
