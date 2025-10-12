import React, { useState } from 'react';
import axios from "axios";
const Signup = () => {
  // Define the data for each form step
  const data = [
    {
      label: "Basic Info",
      main_heading: "Your Basic",
      next_main_heading: "information",
      heading: "Let's get started by creating your account",
      id: "email",
      id1: "email1",
      labelInput: "Email",
      label1: "Re-enter Email",
      inputType: "email",
      buttonName: "Next >",
      placeholder: "Enter your email",
      placeholder1: "Re-enter your email"
    },
    {
      label: "Password",
      main_heading: "Create Your",
      next_main_heading: "Password",
      heading: "Choose a strong password to protect your account",
      id: "password",
      id1: "confirm_password",
      labelInput: "Password",
      label1: "Confirm Password",
      inputType: "password",
      buttonName: "Next >",
      placeholder: "Enter your password",
      placeholder1: "Confirm your password"
    },
    {
      label: "Academics",
      main_heading: "Your Academic",
      next_main_heading: "Details",
      heading: "Help us understand your academic background",
      id: "university",
      id1: "course",
      labelInput: "University Name",
      label1: "Course",
      inputType: "text",
      buttonName: "Next >",
      placeholder: "eg. University of Example",
      placeholder1: "eg. Computer Science"
    },
    {
      label: "Finish",
      main_heading: "You're All Set!",
      next_main_heading: "",
      heading: "Welcome to TechLearnHub! Your journey to connect with mentors and enhance your tech skills starts now.",
      id: "",
      id1: "",
      labelInput: "",
      label1: "",
      inputType: "",
      buttonName: "Go to Dashboard >",
      placeholder: "",
      placeholder1: ""
    },
  ];

  // State to hold the form data
  const [formData, setFormData] = useState({
    email: "",
    email1: "",
    password: "",
    confirm_password: "",
    university: "",
    course: ""
  });

  // State to track the current step index
  const [index, setIndex] = useState(0);
  const totalSteps = data.length;
  const currentStep = data[index];

  // Handler for form submission (Next/Go to Dashboard)
  const handleSubmit = (e) => {
    e.preventDefault();

   axios.post("api/student/register",formData)
   .then((res)=>{console.log(res.data)
   }).catch((err)=>{
    console.log(err)
   })

    if (index === totalSteps - 1) {
      console.log("Form submitted with data:", formData);
      // In a real app, you would send data to an API here.
    } else {
      // Basic validation check (e.g., ensure fields are not empty before proceeding)
      if (
        (currentStep.id && !formData[currentStep.id]) ||
        (currentStep.id1 && !formData[currentStep.id1])
      ) {
        // IMPORTANT: In a real app, replace alert() with a custom modal or inline error message.
        alert("Please fill in both fields before proceeding.");
        return;
      }
      setIndex(index + 1);
    }
  }

  // Handler for input changes
  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    setFormData(prevData => ({
      ...prevData,
      [id]: val
    }));
  }

  // Handler for going back a step
  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  // --- Render the Component ---
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50 p-4'>
      <div className="w-full max-w-xl rounded-2xl shadow-2xl p-8 flex flex-col bg-white border border-gray-100">

        {/* STEP SLIDER / PROGRESS BAR */}
        <div className="mb-10 w-full">
          <div className="flex justify-between items-center relative">
            {data.map((step, stepIndex) => (
              <React.Fragment key={stepIndex}>
                {/* Connecting Line */}
                {stepIndex > 0 && (
                  <div
                    className={`absolute h-1 top-4 transform -translate-y-1/2 transition-all duration-500 
                                ${stepIndex <= index ? 'bg-purple-600' : 'bg-gray-200'}`}
                    style={{ left: `${(stepIndex - 1) / (totalSteps - 1) * 100}%`, width: `${100 / (totalSteps - 1)}%` }}
                  ></div>
                )}

                {/* Step Circle and Label */}
                <div className={`flex flex-col items-center z-10 w-1/${totalSteps}`}>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300 
                                ${stepIndex <= index 
                                    ? 'bg-purple-600 text-white shadow-md' 
                                    : 'bg-gray-200 text-gray-500 border border-gray-300'}`}
                  >
                    {stepIndex + 1}
                  </div>
                  <div className={`mt-2 text-xs text-center transition-colors duration-300 
                                   ${stepIndex <= index ? 'font-medium text-purple-700' : 'text-gray-500'}`}>
                    {step.label}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* HEADER */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            {currentStep.main_heading} <span className='text-purple-600'>{currentStep.next_main_heading}</span>
          </h2>
          <p className="text-gray-500 text-md mt-2">
            {currentStep.heading}
          </p>
        </div>


        {/* FORM CONTENT */}
        <form className="flex flex-col justify-start gap-6" onSubmit={handleSubmit}>

          {index === totalSteps - 1 ? (
            // Final Step Content (Success Screen)
            <div className='flex flex-col items-center justify-center p-8 bg-purple-50 rounded-xl shadow-inner'>
              {/* You can replace this with an actual SVG icon or image */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg font-medium text-gray-700">Registration Complete!</p>
            </div>
          ) : (
            // Form Input Fields
            <div className='flex flex-col gap-4'>
              {/* FIRST INPUT */}
              <div className="flex flex-col">
                <label htmlFor={currentStep.id} className="text-sm font-medium text-gray-700 mb-1">{currentStep.labelInput}</label>
                <input
                  value={formData[currentStep.id]}
                  id={currentStep.id}
                  onChange={handleInputChange}
                  type={currentStep.inputType}
                  placeholder={currentStep.placeholder}
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none text-black focus:ring-4 focus:ring-purple-200 transition duration-150"
                  required
                />
              </div>

              {/* SECOND INPUT */}
              <div className="flex flex-col">
                <label htmlFor={currentStep.id1} className="text-sm font-medium text-gray-700 mb-1">{currentStep.label1}</label>
                <input
                  value={formData[currentStep.id1]}
                  id={currentStep.id1}
                  onChange={handleInputChange} 
                  type={currentStep.inputType}
                  placeholder={currentStep.placeholder1}
                  className="border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-4 focus:ring-purple-200 transition duration-150"
                  required
                />
              </div>
            </div>
          )}

          {/* NAVIGATION BUTTONS */}
          <div className='flex justify-between items-center mt-4'>
            {index > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                &lt; Back
              </button>
            )}
            
            <button
              type="submit"
              className={`py-3 px-6 rounded-xl text-white font-semibold transition duration-300 shadow-lg ${
                index === 0 ? 'ml-auto' : '' // Push 'Next' to the right on step 1
              } ${
                index === totalSteps - 1 
                  ? 'bg-green-500 hover:bg-green-600 w-full'
                  : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600'
              }`}
            >
              {currentStep.buttonName}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
