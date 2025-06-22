import React, { useState } from 'react';

const Navbar = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-800 bg-opacity-90 z-10 shadow-lg py-4 rounded-b-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-purple-400">
          {name.split(' ')[0]}
        </a>

        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-purple-300 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="text-gray-300 hover:text-purple-300 transition duration-300 px-3 py-2 rounded-md">About</a>
          <a href="#experience" className="text-gray-300 hover:text-purple-300 transition duration-300 px-3 py-2 rounded-md">Experience</a> {/* Added Experience link */}
          <a href="#projects" className="text-gray-300 hover:text-purple-300 transition duration-300 px-3 py-2 rounded-md">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-purple-300 transition duration-300 px-3 py-2 rounded-md">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-purple-300 transition duration-300 px-3 py-2 rounded-md">Contact</a>
        </div>
      </div>

      {/* Mobile menu (conditionally rendered) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} px-4 pb-4 transition-all ease-out duration-300`}>
        <div className="flex flex-col space-y-2 pt-2">
          <a onClick={toggleMenu} href="#about" className="block text-gray-300 hover:text-purple-300 transition duration-300 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600">About</a>
          <a onClick={toggleMenu} href="#experience" className="block text-gray-300 hover:text-purple-300 transition duration-300 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600">Experience</a> {/* Added Experience link */}
          <a onClick={toggleMenu} href="#projects" className="block text-gray-300 hover:text-purple-300 transition duration-300 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600">Projects</a>
          <a onClick={toggleMenu} href="#skills" className="block text-gray-300 hover:text-purple-300 transition duration-300 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600">Skills</a>
          <a onClick={toggleMenu} href="#contact" className="block text-gray-300 hover:text-purple-300 transition duration-300 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
