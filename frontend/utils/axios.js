import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-app-ten-omega.vercel.app/",
});

export default API;
