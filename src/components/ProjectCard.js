import React from "react";

const ProjectCard = ({ img, name, description, onClick, tags }) => {
  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link border border-b-4 border-slate-700 shadow-lg hover:shadow-xl">
      <div onClick={onClick}>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      </div>
      
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <div className="px-2 pt-4 pb-2">
      {tags && tags.map((tag) => {
          return (
            <span key={tag.id} className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag.name}</span>
          )
        })}
        
      </div>
    </div>
  );
};

export default ProjectCard;
