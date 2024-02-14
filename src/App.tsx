import { useEffect, useState } from "react";
import { changeLanguage } from "./utils/changeLanguage";
import MainPage from "./components/MainPage";
import mongoDataService from "./services/mongoDataService";
import { AxiosResponse } from "axios";
import { Projects } from "./interfaces/global";

function App() {
  const [language, setLanguage] = useState<string>("en");
  const [projects, setProjects] = useState<Projects[] | []>([]);

  useEffect(() => {
    mongoDataService.getProjects().then((response: AxiosResponse) => {
      setProjects(response.data);
    });
  }, []);

  const handleLanguageButtonClick = () => {
    setLanguage(changeLanguage(language));
  };

  return (
    <>
      <div className="scrollbar-container">
        <MainPage
          handleLanguageButtonClick={handleLanguageButtonClick}
          language={language}
          projects={projects}
        />
      </div>
    </>
  );
}

export default App;
