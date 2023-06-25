<<<<<<< Updated upstream
import { useRef, useEffect} from "react";
import ProjectCard from "../components/ProjectCard";

import data from "../data/portfolio.json";
=======
import React, { useState } from 'react';
import { delay, motion } from 'framer-motion';
import { Loop } from '@/components/TextLoop';
 import { TextLoop } from '@/components/TextLoop';
import HelloLoop from '@/components/HelloAnimation';
const AnimatedSVG = () => {
>>>>>>> Stashed changes

function Carousel() {

  const listRef = useRef(null);
  
  useEffect(() => {
    const list = listRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;
    
    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - list.offsetLeft;
      scrollLeft = list.scrollLeft;
    };
    
    const handleMouseLeave = () => {
      isDown = false;
    };
    
    const handleMouseUp = () => {
      isDown = false;
    };
    
    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - list.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the scroll speed
      list.scrollLeft = scrollLeft - walk;
    };
    
    list.addEventListener('mousedown', handleMouseDown);
    list.addEventListener('mouseleave', handleMouseLeave);
    list.addEventListener('mouseup', handleMouseUp);
    list.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      list.removeEventListener('mousedown', handleMouseDown);
      list.removeEventListener('mouseleave', handleMouseLeave);
      list.removeEventListener('mouseup', handleMouseUp);
      list.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return(
    <>
      <ul ref={listRef} className="draggable">
      {data.projects && data.projects.map((project) => {
          return (
            <li key={project.id}>
            <ProjectCard
              key={project.id}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
              tags={project.tags}
            />
            </li>
          )
        })}
      </ul>
    </>
  )
}

<<<<<<< Updated upstream

export default Carousel;
=======
  // const pathVariants = {
  //   hidden: {
  //     opacity: 0,
  //     pathLength: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     pathLength: 1,
  //     transition: {
  //       duration: 1,
  //       ease: 'easeInOut',
  //       delay: 0
  //     }
  //   }
  // }
  return (
    <div>
      <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
      <HelloLoop/>
      </h1>
    </div>
  );
};

export default AnimatedSVG;
>>>>>>> Stashed changes
