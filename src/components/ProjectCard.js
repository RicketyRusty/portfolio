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
    <div className={`flex flex-col w-[20rem] laptop:w-[40rem] h-[48rem] laptop:h-[32rem] overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link 
      border border-b-4 border-slate-700 shadow-lg hover:shadow-xl 
      transition-all ease-out duration-300 hover:scale-105 link 
      ${mounted && theme === "dark" ? "hover:bg-neutral-900" : "hover:bg-slate-50"}`}
    >
      <div className="p-4 rounded-lg flex items-center">
        <img className="w-8 h-8 mr-4 flex-shrink-0" src={theme === "dark" ? `./icons/${type}_dark.png` : `./icons/${type}.png`}></img>
        <p className="text-xl font-thin opacity-70">
          {type ? type : "Project"}
        </p>
      </div>
      <div>
        <h1 className="mt-5 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
      </div>
      <h2 className="text-xl opacity-70">
        {description ? description : "Description"}
      </h2>
      <div className="px-2 pt-4 pb-2">
        {tags && tags.map((tag) => {
          return (
            <span key={tag.id} className="inline-block rounded-full border border-gray-500 px-3 py-1 text-sm mr-2 mb-2">
              {tag.name}
            </span>
          )
        })} 
      </div>
      <div className={`flex flex-wrap mob:flex-nowrap mt-auto justify-center link`}>
      {links && links.map((link, index) => (
        <Button type="withIcon" icon={link.title} key={index} onClick={() => window.open(link.url)}>
          {link.title}
        </Button>
      ))}
      </div>
    </div>
  );
};

export default ProjectCard;
