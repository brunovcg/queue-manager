import axios from "axios";


const getToken = () =>
  JSON.parse(localStorage.getItem("@gokitchen:token")) || "";

export const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  authorization: `Token ${() => getToken()}`,
};

const enviroment = (env) => {

    if (env === 'prod'){
        return "https://queue-manager-fake-api.herokuapp.com/"
    }
    return "http://localhost:8000/api/"
}

export const api = (baseurl, header) => {
  let info = { baseURL: enviroment()};

  if (header) {
    info["header"] = header;
  }

  return axios.create(info);
};
