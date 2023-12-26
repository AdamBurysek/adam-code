import "./cards.css";
import Card from "./card";
import { useState } from "react";

const MyProjects = (props: any) => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  function haldleShowAllProjectsButtonClick() {
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
        <div className="cards_container">
          {props.projects.length > 0 ? (
            props.projects
              .slice()
              .reverse()
              .map((card: any) => (
                <Card
                  key={card._id}
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
            <div style={{ height: "60vh", padding: "100px" }}>
              No projects found
            </div>
          )}
        </div>
      </section>
      <div className="show-more_button-container">
        <button
          className="project_button show-more_button"
          onClick={haldleShowAllProjectsButtonClick}
        >
          {showAllProjects ? "Hide Older Projects" : "Show Older Projects"}
        </button>
      </div>
    </>
  );
};

export default MyProjects;
