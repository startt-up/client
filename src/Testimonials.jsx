import React from "react";
import "./Testimonials.css";
import img4 from "./assets/s2.jpg";
import img5 from "./assets/s3.jpg";
import img6 from "./assets/s4.jpg";

const TestimonialCard = ({ image, quote, name, location }) => (
  <div className="testimonial-card">
    <img src={image} alt={name} className="testimonial-image" />
    <div className="quote-box">
      <span className="quote-mark">“</span>
      <p className="quote-text">{quote}</p>
      <span className="quote-mark end-quote">”</span>
    </div>
    <p className="testimonial-name">
      {name}
      <span>-</span>
      {location}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 style={{ color: "blue", fontSize: "24px", textAlign: "center" }}>
        REAL-LIFE SCENARIOS
      </h2>
      <div className="testimonials-container">
        <TestimonialCard
          image={img4} // Correct: Pass the variable
          quote="Lorem ipsum dolor sit amet consectetur, iaculis tempus dictum we wisi leo congue. Quis massa eget nisi faucibus orci, lorem ipsum risus consequat tempus in tellus vitae."
          name="Ravi Sharma"
          location="Bengaluru, Karnataka"
        />
        <TestimonialCard
          image={img5} // Correct: Pass the variable
          quote="Lorem ipsum dolor sit amet consectetur, iaculis tempus dictum we wisi leo congue. Quis massa eget nisi faucibus orci, lorem ipsum risus consequat tempus in tellus vitae."
          name="Aman Reddy"
          location="Lucknow, Uttar Pradesh"
        />
        <TestimonialCard
          image={img6} // Correct: Pass the variable
          quote="Lorem ipsum dolor sit amet consectetur, iaculis tempus dictum we wisi leo congue. Quis massa eget nisi faucibus orci, lorem ipsum risus consequat tempus in tellus vitae."
          name="Ananya Khanna"
          location="Delhi, India"
        />
      </div>
    </section>
  );
};

export default Testimonials;
