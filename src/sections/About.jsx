import React from 'react';
import SectionTitle from '../components/SectionTitle'; // Removed .jsx extension

const About = ({ personalInfo }) => {
  return (
    // Added min-h-screen to ensure it takes at least the full viewport height
    // Added flex flex-col justify-center items-center to center content vertically
    <section id="about" className="min-h-screen py-16 bg-gray-900 flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle title="About Me" />
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.bio}
        </p>
      </div>
    </section>
  );
};

export default About;
