import React from 'react';

const Card = ({ imageUrl, title, description, technologies, githubLink, liveLink }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover object-center"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/6B46C1/FFFFFF?text=Image+Unavailable'; }}
      />
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4 text-left">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, techIndex) => (
              <span key={techIndex} className="bg-purple-600 text-purple-100 text-xs font-semibold px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-start space-x-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 rounded-lg"
          >
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 rounded-lg"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
