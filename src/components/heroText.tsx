import { useState } from "react";
import { motion, useMotionValueEvent } from "framer-motion";

const HeroText = ({ scrollYProgress }: any) => {
  const [hideHeaderText, setHideHeaderText] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest !== 0) {
      setHideHeaderText(true);
    }
    if (latest === 0) {
      setHideHeaderText(false);
    }
  });
  return (
    <motion.p
      className={
        hideHeaderText ? "parallax-text parallax-text_hide" : "parallax-text"
      }
    >
      Hello World
    </motion.p>
  );
};

export default HeroText;
