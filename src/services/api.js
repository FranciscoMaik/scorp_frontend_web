import axios from "axios";

const api = axios.create({
  baseURL: "https://scorpbackend.herokuapp.com",
});

export default api;
