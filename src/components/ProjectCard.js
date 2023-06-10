import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Button from "./Button";

const ProjectCard = ({ type, name, description, onClick, tags, links }) => {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link border border-b-4 border-slate-700 shadow-lg hover:shadow-xl 
      transition-all ease-out duration-300 hover:scale-105 link 
      ${mounted && theme === "dark" ? "hover:bg-neutral-950" : "hover:bg-slate-50"}`}
    >
       <div className="p-4 rounded-lg flex items-center">
        <svg className="w-8 h-8 mr-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title/>
          <circle cx="12" cy="12" fill="#464646" r="5"/>
          <path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" fill="#464646"/>
          <path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" fill="#464646"/>
          <path d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z" fill="#464646"/>
          <path d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z" fill="#464646"/>
          <path d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z" fill="#464646"/>
          <path d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z" fill="#464646"/>
          <path d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z" fill="#464646"/>
          <path d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z" fill="#464646"/>
        </svg>
        <p className="text-gray-400 text-xl font-thin">
          {type ? type : "Project Name"}
        </p>
      </div>
      <div>
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
      <div className={`flex flex-wrap mob:flex-nowrap link`}>
      {links && links.map((link, index) => (
        <Button type="primary" key={index} onClick={() => window.open(link.url)}>
          {link.title}
        </Button>
      ))}
    </div>
    </div>
  );
};

export default ProjectCard;
