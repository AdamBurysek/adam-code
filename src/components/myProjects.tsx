import "./cards.css";
import Card from "./card";

interface Card {
  id: number;
  title_en: string;
  title_cz: string;
  desc_en: string;
  desc_cz: string;
  frontend: string;
  backend: string;
  date_en: string;
  date_cz: string;
  about_en: string;
  about_cz: string;
  image: string;
  image_back: string;
  web_url: string;
  git_url: string;
}

const MyProjects = (props: any) => {
  return (
    <section id="my-projects" className="my-projects">
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
  );
};

export default MyProjects;
