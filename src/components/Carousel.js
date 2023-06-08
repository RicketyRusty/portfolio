import { motion } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import ProjectCard from "./ProjectCard";

import data from "../data/portfolio.json";

function Carousel() {

// const [leftConstraint, setLeftConstraint] = useState(0);
// const [container, setContainer] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])


  // const handleLeftConstraint = useCallback(() => {
  //   const el = document.getElementById("carousel_id");
  //   if (el) {
  //     setLeftConstraint(el.scrollWidth - el.offsetWidth);
  //     console.log("left constraint");
  //     console.log(el.scrollWidth - el.offsetWidth);
  //   }
  // }, ["carousel_id"]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setContainer((prev) => prev + 1);
  //     handleLeftConstraint();
  //     console.log("resize");
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [handleLeftConstraint]);

  return(
    <>
      {/* <motion.div key={container} id="carousel_id" className="carousel_o"> */}
      <motion.div ref={carousel} className="outer">
        <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner">
        {data.projects && data.projects.map((project) => {
          return (
            <motion.div className="card" key={project.id}>
            <ProjectCard
              key={project.id}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
              tags={project.tags}
            />
            </motion.div>
          )
        })}
        </motion.div>
      </motion.div>
      
    </>
  )
}


export default Carousel;