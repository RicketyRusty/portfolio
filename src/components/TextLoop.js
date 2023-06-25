import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EmojiWave from "./EmojiAnimation";

const variants = {
  enter: direction => {
    return {
      x: -30,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      opacity: 0
    };
  }
};


const TextLoop = ({texts}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3000);
  }, [index, setIndex]);

  return (
      <AnimatePresence>
        <motion.span
          style={{ position: "absolute" }}
          variants={variants}
          key={index}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 200, damping: 200 },
            opacity: { duration: 0.2 }
          }}
        >
          {texts[index]} <EmojiWave/>
        </motion.span>
        
      </AnimatePresence>
  );
};


export default TextLoop;

