import { useRef, useState } from "react";
import Card from "./card";
import { GitHubIcon } from "../../assets/icons";
import { Projects } from "../../interfaces/global";

import "./myProjects.css";

// Cards are from older project

type Props = {
  language: string;
  projects: Projects[] | [];
};

const MyProjects = (props: Props) => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const contentRef = useRef(null);

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
              .sort((a: Projects, b: Projects) => {
                const aRating = Number(a.rating) || 0;
                const bRating = Number(b.rating) || 0;
                return bRating - aRating;
              })
              .map((card: Projects) => (
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
              ))
          ) : (
            <div style={{ height: "60vh", padding: "100px", color: "white" }}>
              No projects found
            </div>
          )}
        </div>
      </section>
      {showAllProjects ? (
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
      ) : (
        <div className="show-more_button-container">
          {props.language === "en" && !showAllProjects && (
            <button
              className="project_button show-more_button"
              onClick={handleShowAllProjectsButtonClick}
            >
              Show More Projects
            </button>
          )}

          {props.language !== "en" && !showAllProjects && (
            <button
              className="project_button show-more_button"
              onClick={handleShowAllProjectsButtonClick}
            >
              Ukaž další projekty
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default MyProjects;
