import axios from "axios";

const api = axios.create({
  baseURL: "https://bolaoequiper2.com/",
});

export default api;
