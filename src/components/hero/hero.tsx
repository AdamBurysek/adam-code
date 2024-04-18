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

type Props = {
  language: string;
};

const Hero = (props: Props) => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const background = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const orangeMountains = useTransform(scrollYProgress, [0, 1], ["0%", "130%"]);
  const pinkMountains = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const redMountains = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);
  const purpleMountains = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="home" ref={heroRef}>
      <div className="hero_img-container">
        <motion.img
          src={Background}
          className="hero_background"
          style={{ y: background }}
        />
        <HeroText scrollYProgress={scrollYProgress} language={props.language} />
        <motion.img
          className="orange-mountains"
          src={OrangeMountains}
          style={{ y: orangeMountains }}
        />
        <motion.img
          className="pink-mountains"
          src={PinkMountains}
          style={{ y: pinkMountains }}
        />
        <motion.img
          className="red-mountains"
          src={RedMountains}
          style={{ y: redMountains }}
        />
        <motion.img
          className="purple-mountains"
          src={PurpleMountains}
          style={{ y: purpleMountains }}
        />
        <motion.img src={ClosestMountain} />
      </div>
    </section>
  );
};

export default Hero;
