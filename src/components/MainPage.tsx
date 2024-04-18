import { useState } from "react";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";
import AboutMe from "./aboutMe/aboutMe";
import MySkills from "./mySkills/mySkills";
import MyProjects from "./myProjects/myProjects";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import { Projects } from "../interfaces/global";
import { changeLanguage } from "../utils/changeLanguage";

type Props = {
  projects: Projects[] | [];
};

const MainPage = (props: Props) => {
  const [language, setLanguage] = useState<string>("en");
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const handleHamburgerButtonClick = () => {
    setMenuOpened(!menuOpened);
  };

  const handleLanguageButtonClick = () => {
    setLanguage(changeLanguage(language));
  };

  return (
    <>
      <Navbar
        language={language}
        handleLanguageButtonClick={handleLanguageButtonClick}
        handleHamburgerButtonClick={handleHamburgerButtonClick}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />

      <div className={menuOpened ? "page-content blur" : "page-content"}>
        <div className="container">
          <Hero language={language} />
          <AboutMe language={language} />
          <MySkills language={language} />
          <MyProjects projects={props.projects} language={language} />
          <Contact language={language} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
