import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description, skills }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-neutral-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-70 text-xl">
        {description
          ? description
          : " "}
      </p>
      <div>
        <ul className="mt-5">
        {skills && skills.map((skill) => {
          return (
            <li key={skill.id} className="opacity-[0.75]">
              <b>{skill.title}</b> : {skill.data}
            </li>
          )
        })}
        </ul>
      </div>

    </div>
  );
};

export default ServiceCard;
