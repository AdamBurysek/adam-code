import { CzechFlag, EnglishFlag, GitHubIcon } from "../../assets/icons";

const NavbarLinks = (props: any) => {
  const navLinks = [
    { target: "home", textEn: "Home", textCz: "Domů" },
    { target: "about-me", textEn: "About Me", textCz: "O mně" },
    { target: "my-skillz", textEn: "My Skills", textCz: "Moje dovednosti" },
    { target: "my-projects", textEn: "My Projects", textCz: "Moje projekty" },
    { target: "contact", textEn: "Contact", textCz: "Kontakt" },
  ];

  return (
    <ul className="navbar_links">
      {navLinks.map((link, index) => (
        <li key={index}>
          <button
            data-target={link.target}
            onClick={props.handleNavLinkButtonClick}
          >
            {props.language === "en" ? link.textEn : link.textCz}
          </button>
        </li>
      ))}
      <a
        className="github-button"
        href="https://github.com/AdamBurysek"
        target="blank"
        onClick={() => props.setMenuOpened(false)}
      >
        <GitHubIcon />
      </a>
      <button
        className={
          props.menuOpened
            ? "language-button show-language-button"
            : "language-button"
        }
        onClick={props.handleLanguageButtonClick}
      >
        {props.language === "en" ? <CzechFlag /> : <EnglishFlag />}
      </button>
    </ul>
  );
};

export default NavbarLinks;
