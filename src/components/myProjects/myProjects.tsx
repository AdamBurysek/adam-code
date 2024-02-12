import Card from "./card";
import { useRef, useState } from "react";
import "./myProjects.css";
import { Projects } from "../../interfaces/global";
import { useInView, motion } from "framer-motion";
import { GitHubIcon } from "../../assets/icons";

// Cards are from older project

type Props = {
  language: string;
  projects: Projects[] | [];
};

const MyProjects = (props: Props) => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });

  const variants = {
    show: { x: 0 },
    hide: { x: 1000 },
  };

  function handleShowAllProjectsButtonClick() {
    setShowAllProjects(!showAllProjects);
  }

  return (
    <>
      <section
        id="my-projects"
        className={
          showAllProjects ? "my-projects my-projects_opened" : "my-projects"
        }
      >
        <div className="section-line" />
        <h1>{props.language === "en" ? "My Projects" : "Moje projekty"}</h1>
        <div className="cards_container" ref={contentRef}>
          {props.projects.length > 0 ? (
            props.projects
              .slice()
              .reverse()
              .map((card: Projects, index) => (
                <motion.span
                  key={index}
                  animate={isInView ? "show" : "hide"}
                  transition={{
                    duration: Math.min(10, 1 + index),
                    type: "spring",
                  }}
                  variants={variants}
                >
                  <Card
                    darkMode={"dark"}
                    language={props.language}
                    title_en={card.title.en}
                    title_cz={card.title.cz}
                    desc_en={card.description.en}
                    desc_cz={card.description.cz}
                    frontend={card.frontend}
                    backend={card.backend}
                    date_en={card.date.en}
                    date_cz={card.date.cz}
                    about_en={card.about.en}
                    about_cz={card.about.cz}
                    image={card.frontImage}
                    image_back={card.backImage}
                    web_url={card.webUrl}
                    git_url={card.gitUrl}
                  />
                </motion.span>
              ))
          ) : (
            <div style={{ height: "60vh", padding: "100px", color: "white" }}>
              No projects found
            </div>
          )}
        </div>
      </section>
      <div className="show-more_button-container">
        {props.language === "en" && !showAllProjects && (
          <button
            className="project_button show-more_button"
            onClick={handleShowAllProjectsButtonClick}
          >
            Show Older Projects
          </button>
        )}

        {props.language !== "en" && !showAllProjects && (
          <button
            className="project_button show-more_button"
            onClick={handleShowAllProjectsButtonClick}
          >
            Ukaž starší projekty
          </button>
        )}
      </div>
      <div className="github-link-container">
        <a
          className="github-button-link"
          href="https://github.com/AdamBurysek"
          target="blank"
        >
          <GitHubIcon width="120" height="120" />
        </a>
        <p className="github-link-text">
          {props.language === "en"
            ? "You can find more of my projects on my GitHub."
            : "Na GitHubu najdete i pár dalších mých zajímavých projektů."}
        </p>
      </div>
    </>
  );
};

export default MyProjects;
