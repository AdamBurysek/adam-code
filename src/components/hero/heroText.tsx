import { useState } from "react";
import { MotionValue, motion, useMotionValueEvent } from "framer-motion";

interface HeroTextProps {
  scrollYProgress: MotionValue<number>;
}

const HeroText: React.FC<HeroTextProps> = ({ scrollYProgress }) => {
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
