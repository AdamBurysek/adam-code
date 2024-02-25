import AdamPicture from "../../images/Adam.webp";
import { motion, useInView } from "framer-motion";
import "./aboutMe.css";
import { useRef } from "react";

type Props = {
  language: string;
};

const AboutMe = (props: Props) => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });

  const variants = {
    show: { opacity: 1, scale: 1 },
    hide: { opacity: 0, scale: 0.5 },
  };

  return (
    <section id="about-me" className="about-me ">
      <div className="section-line" />
      <div className="section-content">
        <h1>{props.language === "en" ? "About Me" : "O mně"}</h1>
        <div ref={contentRef} className="about-me_content">
          <motion.img
            animate={isInView ? "show" : "hide"}
            transition={{ duration: 0.2, ease: "anticipate" }}
            variants={variants}
            className="about-me_picture"
            src={AdamPicture}
          />
          <motion.p
            animate={isInView ? "show" : "hide"}
            transition={{ duration: 0.2, ease: "easeIn" }}
            variants={variants}
          >
            {props.language === "en"
              ? "As a full-stack developer, I prioritize meeting the customer's needs and creating simple, user-friendly applications. Therefore, I focus on UI/UX design and spend significant time developing graphical designs in Figma. Of course, I begin with the mobile-first approach. For applications with a backend, I prefer to program the backend first. I typically use React, Next.js, Node.js and MongoDB, and I always try to convert applications to serverless whenever is possible. I try to write clean code that is easy to navigate for myself and others."
              : "Jako full-stack developer se snažím, aby moje aplikace v první řadě splňovaly přání zákazníka. Dále se snažím, aby aplikace byly co nejjednodušší, nemám rád složité a nepřehledné aplikace. Tedy se hodně orientuji na UI a UX. Následně trávím hodně času grafickými návrhy ve Figmě. Samozřejmě používám mobile first metodu. Pokud se jedná o aplikaci s backendem, osobně raději nejprve programuji backend. Při vývoji nejčastěji používám React, Next.js, Node.js a MongoDB a pokud je to možné, snažím se aplikaci proměnit v serverless. Snažím se psát čistý kód, abych se v něm dobře orientoval já, ale i kdokoliv jiný."}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
