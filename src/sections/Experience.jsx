import React from 'react';
import SectionTitle from '../components/SectionTitle.jsx'; // Re-added .jsx extension for consistent resolution

const Experience = ({ experience }) => {
  return (
    // Added min-h-screen, flex, flex-col, justify-center, items-center
    <section id="experience" className="min-h-screen py-16 bg-gray-800 flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle title="Experience" />
        <div className="space-y-6 max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-lg text-left transform transition duration-300 hover:scale-105 hover:bg-gray-600 border border-gray-700">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  {job.title}
                  {/* Display category dynamically */}
                  {job.category && (
                    <span className="ml-3 bg-purple-600 text-purple-100 text-xs font-semibold px-3 py-1 rounded-full">
                      {job.category}
                    </span>
                  )}
                </h3>
              </div>

              <div className="flex justify-between items-center mb-2">
                <p className="text-lg">
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 underline">
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-purple-300">{job.company}</span>
                  )}
                </p>
                <p className="text-md text-gray-400">{job.years}</p>
              </div>

              <p className="text-sm text-gray-400 mb-4">{job.location}</p>

              {job.skillsLearned && job.skillsLearned.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skillsLearned.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-purple-700 text-purple-200 text-sm font-medium px-3 py-0.5 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                {job.description.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
