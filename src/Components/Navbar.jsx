import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-white shadow-lg sticky top-0 z-50 text-gray-800'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex-shrink-0'>
                        <a href="#" className='text-2xl font-bold text-indigo-600 tracking-wider'>
                            Logo
                        </a>
                    </div>

                    <div className='hidden md:flex flex-row items-center space-x-8'>
                        <ul className='flex space-x-8 text-lg font-medium'>
                
                            <li className='cursor-pointer p-1 rounded-lg transition duration-200 hover:bg-indigo-600 hover:rounded-3xl hover:py-2 hover:px-3 hover:text-white'>Home</li>
                            <li className='cursor-pointer p-1 rounded-lg transition duration-200 hover:bg-indigo-600 hover:rounded-3xl hover:py-2 hover:px-3 hover:text-white'>Features</li>
                            <li className='cursor-pointer p-1 rounded-lg transition duration-200 hover:bg-indigo-600 hover:rounded-3xl hover:py-2 hover:px-3 hover:text-white'>Community</li>
                            <li className='cursor-pointer p-1 rounded-lg transition duration-200 hover:bg-indigo-600 hover:rounded-3xl hover:py-2 hover:px-3 hover:text-white'>About</li>
                            <li className='cursor-pointer p-1 rounded-lg transition duration-200 hover:bg-indigo-600 hover:rounded-3xl hover:py-2 hover:px-3 hover:text-white'>Contact</li>
                        </ul>
                    </div>

                    
                    <div className='hidden md:flex items-center space-x-4'>
                        <button className='px-4 py-2 text-indigo-600 border border-indigo-600 rounded-full text-sm font-semibold transition duration-200 hover:bg-indigo-50'>
                            Login
                        </button>
                        <button className='px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold transition duration-200 hover:bg-indigo-700 shadow-lg'>
                            Sign Up
                        </button>
                    </div>

                    
                    <div className='md:hidden flex items-center'>
                        <button
                            onClick={toggleMenu}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                            aria-expanded={isOpen}
                        >

                            {isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

           
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                   
                    <a href="#" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'>Home</a>
                    <a href="#" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'>Features</a>
                    <a href="#" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'>Community</a>
                    <a href="#" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'>About</a>
                    <a href="#" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'>Contact</a>
                </div>
                <div className='pt-4 pb-3 border-t border-gray-200 flex flex-col space-y-2 px-5'>
                    <button className='w-full px-3 py-2 text-indigo-600 border border-indigo-600 rounded-lg text-base font-medium hover:bg-indigo-50'>
                        Login
                    </button>
                    <button className='w-full px-3 py-2 bg-indigo-600 text-white rounded-lg text-base font-medium hover:bg-indigo-700 shadow'>
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;