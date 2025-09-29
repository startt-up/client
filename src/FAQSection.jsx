import React, { useState } from "react";
import "./FAQSection.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <span className={`faq-arrow ${isOpen ? "open" : ""}`}>&#x25BC;</span>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "1. What is TechLearn Hub?",
      answer:
        "TechLearn Hub is a collaborative learning platform connecting students and mentors in real-time.",
    },
    {
      question: "2. Who is this platform for?",
      answer:
        "This platform is for students, mentors, and administrators who want to engage in a collaborative learning environment.",
    },
    {
      question: "3. Who are the mentors on TechLearn Hub?",
      answer:
        "Our mentors are verified professionals with expertise in various fields.",
    },
    {
      question: "4. How is content quality controlled on TechLearn Hub?",
      answer:
        "Content is reviewed and curated by our administration team to ensure high quality.",
    },
    {
      question: "5. What features can students use?",
      answer:
        "Students can join groups, ask questions, and chat with peers and mentors.",
    },
    {
      question: "6. How can a mentor contribute to TechLearn Hub?",
      answer:
        "Mentors can create and manage learning groups, share resources, and provide guidance to students.",
    },
  ];

  return (
    <div className="faq-section">
      <h2>FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
