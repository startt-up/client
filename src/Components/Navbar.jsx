// Navbar.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => setIsOpen(!isOpen)
  const handleLogin = () => navigate('/login')
  const handleSignUp = () => navigate('/role')

  const menuItems = ['Home', 'Features', 'Community', 'About', 'Contact']

  return (
    <div className='w-full absolute md:top-3 z-50 flex justify-center'>
      <nav className='bg-white shadow-md rounded-md  text-gray-800 w-full md:w-4/5'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <a href='/' className='text-lg font-medium'>
                Logo
              </a>
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex flex-row items-center space-x-8'>
              <ul className='flex space-x-8 text-lg font-medium'>
                {menuItems.map(item => (
                  <li
                    key={item}
                    className='cursor-pointer hover:bg-black hover:text-white py-1 px-2 rounded-xl transition-all'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Buttons */}
            <div className='hidden md:flex items-center space-x-4'>
              <button onClick={handleLogin} className='cursor-pointer font'>
                Login
              </button>
              <button onClick={handleSignUp} className='cursor-pointer font bg-gradient-to-r from-purple-600 to-blue-200 px-2 py-1 rounded-full text-white'>
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className='md:hidden flex items-center'>
              <button
                onClick={toggleMenu}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              {menuItems.map(item => (
                <a
                  key={item}
                  href='#'
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                >
                  {item}
                </a>
              ))}
            </div>
            <div className='pt-4 pb-3 border-t border-gray-200 flex flex-col space-y-2 px-5'>
              <button
                onClick={handleLogin}
                className='w-full px-3 py-2 text-indigo-600 border border-indigo-600 rounded-lg text-base font-medium hover:bg-indigo-50'
              >
                Login
              </button>
              <button
                onClick={handleSignUp}
                className='w-full px-3 py-2 bg-indigo-600 text-white rounded-lg text-base font-medium hover:bg-indigo-700 shadow'
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
