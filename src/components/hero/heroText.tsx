import { useState } from "react";
import { MotionValue, motion, useMotionValueEvent } from "framer-motion";

interface HeroTextProps {
  scrollYProgress: MotionValue<number>;
  language: string;
}

const HeroText: React.FC<HeroTextProps> = ({ scrollYProgress, language }) => {
  const [hideHeaderText, setHideHeaderText] = useState<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    setHideHeaderText(latest !== 0)
  );

  return (
    <motion.div
      className={
        hideHeaderText ? "parallax-text parallax-text_hide" : "parallax-text"
      }
    >
      <p className="parallax-paragraph">
        {language === "en" ? "Hello, I'm Adam" : "Ahoj, jsem Adam"}
      </p>
      <p className="parallax-small_paragraph">
        {language === "en"
          ? "junior Full-Stack Developer"
          : "juniorní Full-Stack programátor"}
      </p>
    </motion.div>
  );
};

export default HeroText;
