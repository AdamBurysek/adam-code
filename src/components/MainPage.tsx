import { useState } from "react";
import withLoading from "../hooks/withLoading";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";
import AboutMe from "./aboutMe/aboutMe";
import MySkillz from "./mySkillz/mySkillz";
import MyProjects from "./myProjects/myProjects";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

function MainPage(props: any) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const handleHamburgerButtonClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <Navbar
        language={props.language}
        handleLanguageButtonClick={props.handleLanguageButtonClick}
        handleHamburgerButtonClick={handleHamburgerButtonClick}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <div className={menuOpened ? "page-content blur" : "page-content"}>
        <div className="container">
          <Hero />
          <AboutMe language={props.language} />
          <MySkillz language={props.language} />
          <MyProjects projects={props.projects} language={props.language} />
          <Contact language={props.language} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default withLoading(MainPage);
