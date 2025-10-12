import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Users, Presentation, MessageCircle } from "lucide-react";
import { Award, Star } from "lucide-react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

const features = [
  {
    title: "For Student",
    description: "Join Groups, ask doubts, chat with peers.",
    icon: <Users className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "For Mentor",
    description: "Create groups, guide students, provide resources.",
    icon: <Presentation className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Real-time Chat",
    description: "Individuals & group communication with instant updates.",
    icon: <MessageCircle className="w-10 h-10 text-purple-600" />,
  },
];

const faqs = [
  {
    question: "What is TechLearn Hub?",
    answer:
      "TechLearn Hub is an online learning platform connecting students with mentors to learn technology through structured content and community support.",
  },
  {
    question: "Who is this platform for?",
    answer:
      "It’s for students, professionals, and anyone passionate about improving their technical skills with guidance from industry experts.",
  },
  {
    question: "Who are the mentors on TechLearn Hub?",
    answer:
      "Our mentors are experienced professionals from various industries, carefully selected for their expertise and teaching ability.",
  },
  {
    question: "How is content quality controlled on TechLearn Hub?",
    answer:
      "All content undergoes a strict review process by mentors and admins to ensure accuracy, clarity, and up-to-date information.",
  },
  {
    question: "What features can students use?",
    answer:
      "Students can access courses, join community discussions, track progress, and interact with mentors directly through the platform.",
  },
];

const LandingPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
   (
    <section className="relative bg-[#F3F6FF] py-16 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">
        
        {/* ---------- MENTOR CARD ---------- */}
        <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full sm:w-[300px] text-center">
          <div className="bg-[#EAD9FF] rounded-xl flex items-center justify-center">
            <img
              src={img1}
              alt="Mentor"
              className="w-56 h-56 object-contain mx-auto"
            />
          </div>
          <h3 className="text-xl font-semibold mt-3 text-gray-800">Raj Aryan</h3>
          {/* <p className="text-sm text-gray-500">Best Mentor</p> */}
          <div className="absolute mt-2 ml-20 transform -translate-x-1/2 bg-gradient-to-r from-purple-700 to-purple-500 text-white px-4 py-1 text-sm rounded-full shadow-md flex items-center gap-1">
            <Award className="w-4 h-4" /> Best Mentor · 12 Awards
          </div>
        </div>

        {/* ---------- CENTER TEXT & CONNECTOR ---------- */}
        <div className="relative flex flex-col items-center text-center max-w-xl px-2">
          {/* Curved dotted line */}
          <svg
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute hidden lg:block w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <path
              d="M10 150 C150 50, 250 50, 390 150"
              stroke="#C7A4FF"
              strokeWidth="3"
              strokeDasharray="8 10"
            />
          </svg>

          {/* Top paragraph */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            As a mentor, you have the power to inspire, guide, and shape the
            future of eager learners. Our platform allows you to share knowledge,
            connect with motivated students, and build meaningful relationships
            that go beyond classrooms.
          </p>

          {/* Middle icon */}
          <div className="mt-6 flex items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-purple-300 bg-white shadow-sm">
              <span className="text-2xl">🤝</span>
            </div>
          </div>

          {/* Bottom paragraph */}
          <p className="text-gray-700 text-base sm:text-lg mt-6 leading-relaxed">
            Learning becomes more powerful when guided by the right mentor. Here,
            students can connect with experienced teachers, gain practical skills,
            and receive constant motivation to achieve milestones.
          </p>
        </div>

        {/* ---------- STUDENT CARD ---------- */}
        <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full sm:w-[300px] text-center">
          <div className="bg-[#E6E8FF] rounded-xl flex items-center justify-center">
            <img
              src={img2}
              alt="Student"
              className="w-56 h-56 object-contain mx-auto"
            />
          </div>
          <h3 className="text-xl font-semibold mt-3 text-gray-800">Sameer Roy</h3>
          {/* <p className="text-sm text-gray-500">Best Student </p> */}
          <div className="absolute ml-20 transform -translate-x-1/2 bg-gradient-to-r from-purple-700 to-purple-500 text-white px-4 py-1 mt-2 text-sm rounded-full shadow-md flex items-center gap-1">
            <Star className="w-4 h-4" /> Best Student· 80 Points
          </div>
        </div>
      </div>
    </section>


{/* //    why join us section starts here */}

 <section className="bg-[#F3F6FF] py-16 px-4 sm:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Why <span className="text-purple-600">Join Us</span>
        </h2>
        <div className="w-24 h-1 bg-purple-400 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-8 border border-gray-100"
          >
            <div className="mb-4 bg-purple-100 p-4 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>

{/* // why join ussection ends here */}




    <section className="flex flex-col items-center bg-[#F3F6FF] py-12 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
        <span className="text-purple-600">Frequently</span> Ask Questions
      </h2>

      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-purple-200 rounded-xl shadow-md transition-all"
          >
            <button
              className="w-full flex justify-between items-center text-left p-4 sm:p-5 font-medium text-gray-900"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-base sm:text-lg">
                {index + 1}. {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-purple-600" : "text-gray-600"
                }`}
              />
            </button>

            {/* Answer Section */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-4 sm:p-5" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center mt-10">
        <p className="text-gray-800 font-semibold">Still Have Questions?</p>
        <p className="text-gray-600 mt-1">
          Reach out to us at{" "}
          <span className="text-purple-600 font-medium">tech@solution.com</span>{" "}
          or call at{" "}
          <span className="text-purple-600 font-medium">1800-123-5678</span>
        </p>
        <button className="mt-4 text-purple-700 hover:underline font-medium">
          View All
        </button>
      </div>
    </section>
    </>
  );
};

export default LandingPage;
