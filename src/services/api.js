import axios from "axios";

const api = axios.create({
  baseURL: "https://scorpfinalbackend.herokuapp.com",
});

export default api;
