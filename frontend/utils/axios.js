import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-app-q2vo.vercel.app/",
});

export default API;
