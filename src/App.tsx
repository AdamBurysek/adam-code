import { useEffect, useState } from "react";
import { changeLanguage } from "./hooks/changeLanguage";
import MainPage from "./components/MainPage";
import "./App.css";
import mongoDataService from "./services/mongoDataService";

interface Projects {
  id: string;
  title: {
    en: string;
    cz: string;
  };
  description: {
    en: string;
    cz: string;
  };
  frontend: string;
  backend: string;
  date: {
    en: string;
    cz: string;
  };
  about: {
    en: string;
    cz: string;
  };
  webUrl: string;
  gitUrl: string;
  frontImage: string;
  backImage: string;
}

function App() {
  const [language, setLanguage] = useState<string>("en");
  const [projects, setProjects] = useState<Projects | []>([]);

  useEffect(() => {
    mongoDataService.getProjects().then((response: any) => {
      setProjects(JSON.parse(JSON.stringify(response.data)));
    });
  }, []);

  const handleLanguageButtonClick = () => {
    setLanguage(changeLanguage(language));
  };

  return (
    <>
      <MainPage
        handleLanguageButtonClick={handleLanguageButtonClick}
        language={language}
        projects={projects}
      />
    </>
  );
}

export default App;
