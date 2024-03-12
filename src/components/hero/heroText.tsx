import { useState } from "react";
import { MotionValue, motion, useMotionValueEvent } from "framer-motion";

interface HeroTextProps {
  scrollYProgress: MotionValue<number>;
}

const HeroText: React.FC<HeroTextProps> = ({ scrollYProgress }) => {
  const [hideHeaderText, setHideHeaderText] = useState<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    setHideHeaderText(latest !== 0)
  );

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
