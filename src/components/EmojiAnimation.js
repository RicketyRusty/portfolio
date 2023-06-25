import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const EmojiWave = () => {
    return(
        <AnimatePresence>
            <motion.span
            style={{ display: "inline-block" }}
            animate={{ rotate: [0, -10, 0] }}
            transition={{
            repeat: 1,
            duration: 1,
            ease: "easeInOut",
            }}
            >
                👋
            </motion.span>
        </AnimatePresence>
    )
}

export default EmojiWave;