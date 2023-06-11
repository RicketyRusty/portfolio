import { useRef, useEffect} from "react";
import ProjectCard from "./ProjectCard";

import data from "../data/portfolio.json";

function Carousel() {

  const listRef = useRef(null);
  
  useEffect(() => {
    const list = listRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleStart = (pageX) => {
      isDown = true;
      startX = pageX - list.offsetLeft;
      scrollLeft = list.scrollLeft;
    };

    const handleMove = (pageX) => {
      if (!isDown) return;
      const x = pageX - list.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the scroll speed
      list.scrollLeft = scrollLeft - walk;
    };

    const handleEnd = () => {
      isDown = false;
    };

    //Mouse
    const handleMouseDown = (e) => {
      handleStart(e.pageX);
    };

    const handleMouseMove = (e) => {
      handleMove(e.pageX);
    };

    const handleMouseUp = () => {
      handleEnd();
    };
    
    const handleMouseLeave = () => {
      handleEnd();
    };

    //Touch
    const handleTouchStart = (e) => {
      handleStart(e.touches[0].pageX);
    };

    const handleTouchMove = (e) => {
      handleMove(e.touches[0].pageX);
    };

    const handleTouchEnd = () => {
      handleEnd();
    };
    

    // Mouse events
    list.addEventListener('mousedown', handleMouseDown);
    list.addEventListener('mouseleave', handleMouseLeave);
    list.addEventListener('mouseup', handleMouseUp);
    list.addEventListener('mousemove', handleMouseMove);

    // Touch events
    list.addEventListener("touchstart", handleTouchStart);
    list.addEventListener("touchmove", handleTouchMove);
    list.addEventListener("touchend", handleTouchEnd);
    
    return () => {
      // Clean up the listener
      list.removeEventListener('mousedown', handleMouseDown);
      list.removeEventListener('mouseleave', handleMouseLeave);
      list.removeEventListener('mouseup', handleMouseUp);
      list.removeEventListener('mousemove', handleMouseMove);

      list.removeEventListener("touchstart", handleTouchStart);
      list.removeEventListener("touchmove", handleTouchMove);
      list.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
  
  return(
    <>
      <ul ref={listRef} className="draggable projectList">
      {data.projects && data.projects.map((project) => {
          return (
            <li key={project.id} className="projectListItem">
            <ProjectCard
              key={project.id}
              type={project.type}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
              tags={project.tags}
              links={project.links}
            />
            </li>
          )
        })}
      </ul>
    </>
  )
}


export default Carousel;