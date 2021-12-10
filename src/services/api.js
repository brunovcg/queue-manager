import axios from "axios";
import { enviroment } from "../configs/enviroment.js";

export const api = () => {


  // if (token) {
  //   info["headers"] = {
  //     "Access-Control-Allow-Origin": "*",
  //     "Content-Type": "application/json",
  //     "Authorization": `Token ${token}`,
  //   };
  // }



  return axios.create({ baseURL: enviroment });
};
