import { useEffect, useState } from "react";
import { changeLanguage } from "./utils/changeLanguage";
import MainPage from "./components/MainPage";
import mongoDataService from "./services/mongoDataService";
import { AxiosResponse } from "axios";
import { Projects } from "./interfaces/global";
import Loading from "./components/loading/loading";

function App() {
  const [language, setLanguage] = useState<string>("en");
  const [loading, setLoading] = useState<boolean>(true);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const [projects, setProjects] = useState<Projects[] | []>([]);

  useEffect(() => {
    mongoDataService.getProjects().then((response: AxiosResponse) => {
      setProjects(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    if (projects.length !== 0) {
      const images = document.querySelectorAll("img");
      const fonts = document.fonts;

      console.log(images);

      const handleLoad = () => {
        setLoading(false);
      };

      const imageLoadPromises = Array.from(images).map((image) => {
        if (image.complete) {
          return Promise.resolve();
        } else {
          return new Promise((resolve) => {
            image.addEventListener("load", resolve);
          });
        }
      });

      const fontLoadPromise = fonts.ready.then(() => {
        return Promise.resolve();
      });

      Promise.all([...imageLoadPromises, fontLoadPromise]).then(() => {
        setStartAnimation(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });

      return () => {
        images.forEach((image) => {
          image.removeEventListener("load", handleLoad);
        });
      };
    }
  }, [projects]);

  const handleLanguageButtonClick = () => {
    setLanguage(changeLanguage(language));
  };

  return (
    <>
      <div className="scrollbar-container">
        {loading ? <Loading loaded={startAnimation} /> : null}
        <div className={loading ? "hide-content" : ""}>
          <MainPage
            handleLanguageButtonClick={handleLanguageButtonClick}
            language={language}
            projects={projects}
          />
        </div>
      </div>
    </>
  );
}

export default App;
