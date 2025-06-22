import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Contact = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle title="Get In Touch" />
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
        <a
          href={`mailto:${personalInfo.contactEmail}`}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          Email Me
        </a>
        <div className="mt-8 flex justify-center space-x-6 text-gray-400">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300">
            {/* LinkedIn Icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300">
            {/* GitHub Icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1 0-2 1a7.6 7.6 0 0 0-6 0c-1-1-2-1-2-1a4.8 4.8 0 0 0-.78 3.46c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
