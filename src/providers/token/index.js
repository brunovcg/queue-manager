import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";
import {Redirect} from "react-router-dom"

const TokenContext = createContext([]);

export const TokenProvider = ({ children }) => {

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@gokitchen:token")) || ""
  );

  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("@gokitchen:user_id")) || ""
  );

  const [userType, setUserType] = useState(
    JSON.parse(localStorage.getItem("@gokitchen:user_type")) || ""
  );

  const getToken = (data) => {
    api.post("login/", data).then((response) => {
      localStorage.setItem(
        "@gokitchen:token",
        JSON.stringify(response.data.token)
      );
      setToken(response.data.token);

      localStorage.setItem(
        "@gokitchen:user_id",
        JSON.stringify(response.data.user_id)
      );
      setUserId(response.data.user_id);

      localStorage.setItem(
        "@gokitchen:user_type",
        JSON.stringify(response.data.user_type)
      );
      setUserType(response.data.user_type);

      

    })
      
   
  };

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("@gokitchen:token")) || "");
    setUserType(JSON.parse(localStorage.getItem("@gokitchen:user_type")) || "");
    setUserId(JSON.parse(localStorage.getItem("@gokitchen:user_id")) || "");
  }, []);

  return (
    <TokenContext.Provider
      value={{
        token,
        userId,
        userType,
        setUserType,
        getToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
