import { useScroll } from "framer-motion";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Background from "../../images/heroParallax/background.webp";
import OrangeMountains from "../../images/heroParallax/orangeMountains.webp";
import PinkMountains from "../../images/heroParallax/pinkMountains.webp";
import RedMountains from "../../images/heroParallax/redMountains.webp";
import PurpleMountains from "../../images/heroParallax/purpleMountains.webp";
import ClosestMountain from "../../images/heroParallax/closestMountain.webp";
import HeroText from "./heroText";
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
          src={Background}
          className="hero_background"
          style={{ y: background, translateY: "-80px", zIndex: 0 }}
        />
        <HeroText scrollYProgress={scrollYProgress} />
        <motion.img
          src={OrangeMountains}
          style={{ y: orangeMountains, translateY: "30px" }}
        />
        <motion.img
          src={PinkMountains}
          style={{ y: pinkMountains, translateY: "20px" }}
          className="instet"
        />
        <motion.img
          src={RedMountains}
          style={{ y: redMountains, translateY: "10px" }}
        />
        <motion.img src={PurpleMountains} style={{ y: purpleMountains }} />
        <motion.img src={ClosestMountain} />
      </div>
    </section>
  );
};

export default Hero;
