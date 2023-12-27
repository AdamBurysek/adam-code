import { useState } from "react";
import withLoading from "../hooks/withLoading";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";
import AboutMe from "./aboutMe/aboutMe";
import MySkillz from "./mySkillz/mySkillz";
import MyProjects from "./myProjects/myProjects";
import formDataService from "../services/formDataService";

function MainPage(props: any) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const handleHamburgerButtonClick = () => {
    setMenuOpened(!menuOpened);
  };

  const handleFormSubmit = (data: any) => {
    data.preventDefault();
    formDataService.sendData(data);
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
          <section id="contact" className="contact">
            <div className="section-line" />
            <div className="section-content">
              <h1>{props.language === "en" ? "Contact" : "Kontakt"}</h1>
              <div className="contact_form-container">
                <h2>Contact Form</h2>
                <form onSubmit={(data) => handleFormSubmit(data)}>
                  <label>Name</label>
                  <input
                    type="text"
                    name="Name"
                    maxLength={50}
                    placeholder="Your Name"
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    name="Email"
                    maxLength={50}
                    placeholder="Your Email"
                  />
                  <label>Subject</label>
                  <input
                    type="text"
                    name="Subject"
                    maxLength={50}
                    placeholder="Subject"
                  />
                  <label>Message</label>
                  <textarea
                    name="Message"
                    rows={7}
                    maxLength={1000}
                    placeholder="Your Message"
                  />
                  <button className="contact_submit-button" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default withLoading(MainPage);
