import { useState } from "react";
import githubimage from "../../images/github-mark-white.svg";

const Card = (props: any) => {
  let [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className={
        props.darkMode === "dark"
          ? "card_container dark_mode"
          : "card_container"
      }
    >
      <div className={showInfo ? "slide slide_move" : "slide"}>
        <div className="card_image-box">
          <img src={props.image} className="card_image" alt=""></img>
        </div>
        <h5 className="card_heading">
          {props.language === "en" ? props.title_en : props.title_cz}
        </h5>
        <p className="card_text">
          {props.language === "en" ? props.desc_en : props.desc_cz}
        </p>
      </div>
      <div
        className={
          showInfo ? "slide slide_back slide_move" : "slide slide_back"
        }
      >
        <div className="card_image-box-back">
          <img
            src={props.image_back}
            className="card_image"
            alt="adam planet webpage"
          ></img>
        </div>
        <h5 className="card_heading frontend_heading">Frontend</h5>
        <p className="card_text frontend_text">{props.frontend}</p>
        <div
          className={
            props.darkMode === "dark"
              ? "card_line frontend_line dark_line"
              : "card_line frontend_line"
          }
        ></div>
        <h5 className="card_heading backend_heading">Backend</h5>
        <p className="card_text backend_text">{props.backend}</p>
        <div
          className={
            props.darkMode === "dark"
              ? "card_line backend_line dark_line"
              : "card_line backend_line"
          }
        ></div>
        <h5 className="card_heading date_heading">
          {props.language === "en" ? "Date" : "Datum tvorby"}
        </h5>
        <p className="card_text date_text">
          {props.language === "en" ? props.date_en : props.date_cz}
        </p>
        <div
          className={
            props.darkMode === "dark"
              ? "card_line date_line dark_line"
              : "card_line date_line"
          }
        ></div>
        <h5 className="card_heading about_heading">
          {props.language === "en"
            ? "About this project"
            : "Pár detailů k tomto projektu"}
        </h5>
        <p className="card_text about_text">
          {props.language === "en" ? props.about_en : props.about_cz}
        </p>
        <a
          href={props.git_url}
          target="_blank"
          rel="noreferrer"
          className="github_link"
          style={{ cursor: "pointer" }}
        >
          <img
            src={githubimage}
            className={
              props.git_url !== "" ? "github_image" : "github_image github_hide"
            }
            alt="github icon"
          ></img>
        </a>
      </div>
      <div
        className={
          props.darkMode === "dark"
            ? "card_line bottom_line dark_line"
            : "card_line bottom_line"
        }
      ></div>
      <div className="button_container">
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="project_button info_button"
        >
          {showInfo && props.language === "en"
            ? "Back"
            : "Info" && showInfo && (props.language === "en") === false
            ? "Zpět"
            : "Info"}
        </button>

        <button
          disabled={props.web_url === ""}
          className="project_button web_button"
          onClick={() => {
            window.open(props.web_url, "_blank", "noopener,noreferrer");
          }}
        >
          {props.language === "en" ? "Visit Webpage" : "Navštívit web"}
        </button>
      </div>
    </div>
  );
};

export default Card;
