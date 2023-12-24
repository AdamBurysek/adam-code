import { useScroll } from "framer-motion";
import Hero1 from "../../images/heroParallax/Hero-1.webp";
import Hero2 from "../../images/heroParallax/Hero-2.webp";
import Hero3 from "../../images/heroParallax/Hero-3.webp";
import Hero4 from "../../images/heroParallax/Hero-4.webp";
import Hero5 from "../../images/heroParallax/Hero-5.webp";
import Hero6 from "../../images/heroParallax/Hero-6.webp";
import { motion, useTransform } from "framer-motion";
import HeroText from "./heroText";
import { useRef } from "react";
import "./hero.css";

const Hero = () => {
  const pageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end start"],
  });

  const background = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const orangeMountains = useTransform(scrollYProgress, [0, 1], ["0%", "130%"]);
  const pinkMountains = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const redMountains = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);
  const purpleMountains = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="home" ref={pageRef}>
      <div className="hero_img-container">
        <motion.img
          src={Hero1}
          style={{ y: background, translateY: "-80px", zIndex: 0 }}
        />
        <HeroText scrollYProgress={scrollYProgress} />
        <motion.img
          src={Hero2}
          style={{ y: orangeMountains, translateY: "30px" }}
        />
        <motion.img
          src={Hero3}
          style={{ y: pinkMountains, translateY: "20px" }}
          className="instet"
        />
        <motion.img
          src={Hero4}
          style={{ y: redMountains, translateY: "10px" }}
        />
        <motion.img src={Hero5} style={{ y: purpleMountains }} />
        <motion.img src={Hero6} />
      </div>
    </section>
  );
};

export default Hero;
