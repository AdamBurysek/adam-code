import axios from "axios";

export default axios.create({
  baseURL: "https://formspree.io/f/mgejdjjq",
  headers: {
    "Content-Type": "application/json",
  },
});
