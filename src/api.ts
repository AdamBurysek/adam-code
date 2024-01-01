import axios from "axios";

// MongoDB API
export const createMongoDBApi = () => {
  return axios.create({
    baseURL:
      "https://eu-central-1.aws.data.mongodb-api.com/app/adamcode-ebdbn/endpoint/",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Formspree API
export const createFormspreeApi = () => {
  return axios.create({
    baseURL: "https://formspree.io/f/mgejdjjq",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
