import axios from "axios";

// MongoDB API
export const createMongoDBApi = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_MONGODB_API,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Formspree API
export const createFormspreeApi = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_FORM_API,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
