import React from 'react';
import SectionTitle from '../components/SectionTitle.jsx'; // Explicitly using .jsx extension
import Card from '../components/Card.jsx'; // Explicitly using .jsx extension

const Projects = ({ projects }) => {
  return (
    // Added min-h-screen, flex, flex-col, justify-center, items-center to make it cover the entire screen
    <section id="projects" className="min-h-screen py-16 bg-gray-900 flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle title="My Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
