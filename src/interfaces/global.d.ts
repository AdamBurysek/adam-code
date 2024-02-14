export type Projects = {
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
  rating: string;
};

export type CardProps = {
  darkMode: string;
  language: string;
  title_en: string;
  title_cz: string;
  desc_en: string;
  desc_cz: string;
  frontend: string;
  backend: string;
  date_en: string;
  date_cz: string;
  about_en: string;
  about_cz: string;
  image: string;
  image_back: string;
  web_url: string;
  git_url: string;
};

export type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
