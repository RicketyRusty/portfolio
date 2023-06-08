import { useRef, useEffect} from "react";
import ProjectCard from "../components/ProjectCard";

import data from "../data/portfolio.json";

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


export default Carousel;