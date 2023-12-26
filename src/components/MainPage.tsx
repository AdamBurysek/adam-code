import { useState } from "react";
import withLoading from "../hooks/withLoading";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";
import AboutMe from "./aboutMe/aboutMe";
import MySkillz from "./mySkillz/mySkillz";
import MyProjects from "./myProjects/myProjects";

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
          <section>
            <div style={{ fontSize: 60, paddingTop: "80px" }} id="test">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              placeat, laboriosam error maiores in recusandae aperiam molestiae
              ipsum sed adipisci est obcaecati explicabo, ullam ipsa officiis
              sint numquam, repellendus pariatur consequuntur consectetur sit
              optio possimus aliquam cumque. E xpedita voluptate obcaecati
              consequuntur voluptatibus dolorem error, incidunt officiis quo
              officia non itaque, eius nulla eligendi quod. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Nulla placeat, laboriosam
              error maiores in recusandae aperiam molestiae ipsum sed adipisci
              est obcaecati explicabo, ullam ipsa officiis sint numquam,
              repellendus pariatur consequuntur consectetur sit optio possimus
              aliquam cumque. E xpedita voluptate obcaecati consequuntur
              voluptatibus dolorem error, incidunt officiis quo officia non
              itaque, eius nulla eligendi quod. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nulla placeat, laboriosam error
              maiores in recusandae aperiam molestiae ipsum sed adipisci est
              obcaecati explicabo, ullam ipsa officiis sint numquam, repellendus
              pariatur consequuntur consectetur sit optio possimus aliquam
              cumque. E xpedita voluptate obcaecati consequuntur voluptatibus
              dolorem error, incidunt officiis quo officia non itaque, eius
              nulla eligendi quod. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nulla placeat, laboriosam error maiores in
              recusandae aperiam molestiae ipsum sed adipisci est obcaecati
              explicabo, ullam ipsa officiis sint numquam, repellendus pariatur
              consequuntur consectetur sit optio possimus aliquam cumque. E
              xpedita voluptate obcaecati consequuntur voluptatibus dolorem
              error, incidunt officiis quo officia non itaque, eius nulla
              eligendi quod. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Nulla placeat, laboriosam error maiores in recusandae
              aperiam molestiae ipsum sed adipisci est obcaecati explicabo,
              ullam ipsa officiis sint numquam, repellendus pariatur
              consequuntur consectetur sit optio possimus aliquam cumque. E
              xpedita voluptate obcaecati consequuntur voluptatibus dolorem
              error, incidunt officiis quo officia non itaque, eius nulla
              eligendi quod.
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default withLoading(MainPage);
