import { useRef, useState } from "react";
import withLoading from "../hooks/withLoading";
import { useScroll } from "framer-motion";
import Hero from "./hero";
import Navbar from "./navbar/navbar";
import AdamPicture from "../images/Adam.webp";

function MainPage(props: any) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const handleHamburgerButtonClick = () => {
    setMenuOpened(!menuOpened);
  };

  const pageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end start"],
  });

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
        <div ref={pageRef}>
          <div id="home">
            <Hero scrollYProgress={scrollYProgress} />
          </div>
        </div>
        <div className="container">
          <section id="about-me" className="about-me">
            <div className="section-content">
              <div className="line" />
              <h1 className="about-me_title">About Me</h1>
              <div className="about-me_content">
                <img className="about-me_picture" src={AdamPicture} />
                <p>
                  As a full-stack developer, I prioritize meeting the customer's
                  needs and creating simple, user-friendly applications.
                  Therefore, I focus on UI/UX design and spend significant time
                  developing graphical designs in Figma. Of course, I begin with
                  the mobile-first approach. For applications with a backend, I
                  prefer to program the backend first. I typically use the MERN
                  stack, and I always try to convert applications to serverless
                  whenever possible. I like to write clean code that is easy to
                  navigate for myself and others.
                </p>
              </div>
            </div>
          </section>
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
