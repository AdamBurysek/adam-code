import { useEffect, useRef } from "react";
import { skills } from "./skillsArray";

import "./mySkills.css";

type Props = {
  language: string;
};

const MySkills = (props: Props) => {
  const contentRef = useRef(null);
  const tableRef: React.MutableRefObject<HTMLUListElement | null> =
    useRef(null);

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
              <a href={skill.url} target="blank" key={index}>
                <li>{skill.name}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
