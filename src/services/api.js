import axios from "axios";
import { enviroment } from "../configs/enviroment.js";

export const api = () => {
  return axios.create({ baseURL: enviroment });
};
