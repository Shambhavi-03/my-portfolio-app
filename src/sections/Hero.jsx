import React from 'react';

const Hero = ({ personalInfo }) => {
  return (
    // Added min-h-screen to ensure it takes at least the full viewport height
    // Added flex flex-col justify-center items-center to center content vertically
    <section id="hero" className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-center flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src={personalInfo.imageUrl}
            alt={personalInfo.name}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-500 shadow-xl"
          />
        </div>
        <div className="md:w-2/3 md:ml-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Hi, I'm <span className="text-purple-400">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            {personalInfo.tagline}
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
