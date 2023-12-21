import GitHubIcon from "../images/github-mark-white.png";
import { CzechFlag, EnglishFlag } from "../assets/icons";
import { useState } from "react";

const NavbarLinks = (props: any) => {
  return (
    <div
      className={
        props.menuOpened
          ? "navbar_dropdown navbar_dropdown-open"
          : "navbar_dropdown "
      }
    >
      <ul className="navbar_links">
        <li>
          <a href="#">{props.language === "en" ? "Home" : "Domů"}</a>
        </li>
        <li>
          <a href="#test">{props.language === "en" ? "About Me" : "O mě"}</a>
        </li>
        <li>
          <a href="#test">
            {props.language === "en" ? "My Skills" : "Moje dovednosti"}
          </a>
        </li>
        <li>
          <a href="#test">
            {props.language === "en" ? "My Projects" : "Moje projekty"}
          </a>
        </li>
        <li>
          <a href="#test">{props.language === "en" ? "Contact" : "Kontakt"}</a>
        </li>
        <a
          className="github_button"
          href="https://github.com/AdamBurysek"
          target="blank"
        >
          <img
            src={GitHubIcon}
            style={{
              width: "25px",
              height: "25px",
              paddingTop: "1.5px",
              marginRight: "26px",
              marginLeft: "20px",
            }}
          />
        </a>

        <button
          className="language-button"
          onClick={props.handleLanguageButtonClick}
        >
          {props.language === "en" ? <EnglishFlag /> : <CzechFlag />}
        </button>
      </ul>
    </div>
  );
};

export default NavbarLinks;
