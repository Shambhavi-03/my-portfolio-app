import React from 'react';
import SectionTitle from '../components/SectionTitle.jsx'; // Added .jsx extension

const Skills = ({ skills }) => {
  // Group skills by category
  const categorizedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill.name);
    return acc;
  }, {});

  return (
    // Added min-h-screen, flex, flex-col, justify-center, items-center
    <section id="skills" className="min-h-screen py-16 bg-gray-700 flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle title="My Skills" />
        <div className="space-y-12"> {/* Space between skill categories */}
          {Object.entries(categorizedSkills).map(([category, skillNames], index) => (
            <div key={index}>
              <h3 className="text-3xl font-semibold text-purple-300 mb-8">{category}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skillNames.map((skillName, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-800 px-6 py-3 rounded-full shadow-lg flex items-center justify-center transform transition duration-300 hover:scale-105 hover:bg-gray-600 border border-gray-700 whitespace-nowrap"
                  >
                    <p className="text-lg font-medium text-gray-200">{skillName}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
