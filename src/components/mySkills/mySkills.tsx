import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { skills } from "./skillsArray";
import "./mySkills.css";

type Props = {
  language: string;
};

const MySkills = (props: Props) => {
  const contentRef = useRef(null);
  const tableRef: React.MutableRefObject<HTMLUListElement | null> =
    useRef(null);
  const isInView = useInView(contentRef, { once: true });

  const variants = {
    show: { x: 0 },
    hide: { x: 100000 },
  };

  useEffect(() => {
    const countTableRows = () => {
      const rows = Math.ceil(skills.length / 3);
      if (tableRef.current) {
        tableRef.current.style.setProperty("--rows", String(rows));
      }
    };
    countTableRows();
  }, []);

  return (
    <section id="my-skills" className="my-skills">
      <div className="section-line" />
      <div className="section-content">
        <h1>{props.language === "en" ? "My Skills" : "Moje dovednosti"}</h1>
        <div className="my-skills_content" ref={contentRef}>
          <ul ref={tableRef}>
            {skills.map((skill, index) => (
              <motion.a
                animate={isInView ? "show" : "hide"}
                transition={{ duration: 0.3 * index }}
                variants={variants}
                href={skill.url}
                target="blank"
                key={index}
              >
                <li>{skill.name}</li>
              </motion.a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
