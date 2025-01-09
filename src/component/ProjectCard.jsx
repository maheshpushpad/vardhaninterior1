import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-lg hover:scale-95 duration-300 overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <p className="text-sm text-gray-600">Location: {project.location}</p>
        <p className="text-sm text-gray-600">Completed: {project.completionDate}</p>
        <p className="text-sm text-gray-600">Client: {project.clientName}</p>
        <blockquote className="italic text-gray-500 mt-4">"{project.testimonial}"</blockquote>
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
  <button className="text-white bg-[#65422e] px-4 py-2 rounded hover:bg-[#c5762c] w-full sm:w-auto">View Details &rarr;</button>
</div>

      </div>
    </div>
  );
};

export default ProjectCard;
