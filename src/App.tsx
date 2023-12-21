import MainPage from "./components/MainPage";
import "./App.css";
import { useState } from "react";
import { changeLanguage } from "./hooks/changeLanguage";

function App() {
  const [language, setLanguage] = useState<string>("en");

  const handleLanguageButtonClick = () => {
    setLanguage(changeLanguage(language));
  };

  return (
    <>
      <MainPage
        handleLanguageButtonClick={handleLanguageButtonClick}
        language={language}
      />
    </>
  );
}

export default App;
