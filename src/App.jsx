import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero'; 
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Experience from './sections/Experience';
import { personalInfo, skillsData, projectsData, experienceData } from './data'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Tailwind CSS CDN script for local development preview, normally handled by build tools */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        /* This style block is mainly for the Canvas/Immersive preview environment
           to ensure Inter font is loaded and applied correctly if not using a full build setup.
           In a real React app with PostCSS/Tailwind, this would be handled by your build process
           via index.css and tailwind.config.js. */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      <Navbar name={personalInfo.name} />
      <Hero personalInfo={personalInfo} />
      <About personalInfo={personalInfo} />
      <Experience experience={experienceData} /> {/* New Experience section */}
      <Projects projects={projectsData} /> {/* Projects section moved up */}
      <Skills skills={skillsData} /> {/* Skills section moved down */}
      <Contact personalInfo={personalInfo} />
      <Footer name={personalInfo.name} />
    </div>
  );
}

export default App;
