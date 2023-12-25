import axios from "axios";

export default axios.create({
  baseURL:
    "https://eu-central-1.aws.data.mongodb-api.com/app/application-0-acfof/endpoint/",

  headers: {
    "Content-Type": "application/json",
  },
});
