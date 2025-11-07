import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const steps = [
    {
      label: 'Email & Password',
      main_heading: 'Your Account',
      next_main_heading: '',
      heading: "Let's get started by creating your account",
      fields: [
        { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
        { id: 'confirmEmail', label: 'Re-enter Email', type: 'email', placeholder: 'Confirm your email' },
        { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
      ],
    },
    {
      label: 'Academics',
      main_heading: 'Your Academic',
      next_main_heading: 'Details',
      heading: "Help us understand your academic background",
      fields: [
        { id: 'university', label: 'University Name', type: 'text', placeholder: 'eg. University of Example' },
        { id: 'course', label: 'Course', type: 'text', placeholder: 'eg. Computer Science' },
      ],
    },
    {
      label: 'Finish',
      main_heading: "You're All Set!",
      next_main_heading: '',
      heading: 'Welcome! Your journey starts now.',
      fields: [],
    },
  ];

  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    university: '',
    course: '',
  });

  const [stepIndex, setStepIndex] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const totalSteps = steps.length;
  const currentStep = steps[stepIndex];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    for (let field of currentStep.fields) {
      if (!formData[field.id]) {
        setError(`Please fill in ${field.label}`);
        return;
      }
    }

    // Email confirmation
    if (stepIndex === 0 && formData.email !== formData.confirmEmail) {
      setError('Emails do not match');
      return;
    }

    // Last step -> submit to backend
    if (stepIndex === totalSteps - 1) return;

    if (stepIndex === steps.length - 2) {
      // Submit to backend on final step
      try {
        const response = await axios.post('api/student/register', {
          email: formData.email,
          password: formData.password,
          university: formData.university,
          course: formData.course,
        });
        console.log('Registration successful:', response.data);
        setSuccess(true);
        setStepIndex(stepIndex + 1);
      } catch (err) {
        console.error(err);
        setError('Server error. Please try again.');
      }
    } else {
      setStepIndex(stepIndex + 1);
    }
  };

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50 p-4'>
      <div className="w-full max-w-xl rounded-2xl shadow-2xl p-8 flex flex-col bg-white border border-gray-100">

        {/* STEP PROGRESS */}
        <div className="mb-10 w-full">
          <div className="flex justify-between items-center relative">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <div
                    className={`absolute h-1 top-4 transform -translate-y-1/2 transition-all duration-500 
                      ${idx <= stepIndex ? 'bg-purple-600' : 'bg-gray-200'}`}
                    style={{ left: `${(idx - 1) / (totalSteps - 1) * 100}%`, width: `${100 / (totalSteps - 1)}%` }}
                  />
                )}
                <div className="flex flex-col items-center z-10 w-1/3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300 
                    ${idx <= stepIndex ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 text-gray-500 border border-gray-300'}`}>
                    {idx + 1}
                  </div>
                  <div className={`mt-2 text-xs text-center transition-colors duration-300 
                    ${idx <= stepIndex ? 'font-medium text-purple-700' : 'text-gray-500'}`}>
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
          <p className="text-gray-500 text-md mt-2">{currentStep.heading}</p>
        </div>

        {/* FORM */}
        {success && stepIndex === totalSteps - 1 ? (
          <div className='flex flex-col items-center justify-center p-8 bg-purple-50 rounded-xl shadow-inner'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-medium text-gray-700">Registration Complete!</p>
          </div>
        ) : (
          <form className="flex flex-col justify-start gap-6" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {currentStep.fields.map(field => (
              <div className="flex flex-col" key={field.id}>
                <label htmlFor={field.id} className="text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none text-black focus:ring-4 focus:ring-purple-200 transition duration-150"
                  required
                />
              </div>
            ))}

            {/* NAVIGATION BUTTONS */}
            <div className='flex justify-between items-center mt-4'>
              {stepIndex > 0 && (
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
                  stepIndex === totalSteps - 1 ? 'bg-green-500 hover:bg-green-600 w-full' : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 ml-auto'
                }`}
              >
                {stepIndex === steps.length - 2 ? 'Submit' : 'Next >'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
