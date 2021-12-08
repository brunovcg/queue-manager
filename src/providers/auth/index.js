import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom"

const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {

  const history = useHistory()

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@gokitchen:token")) || ""
  );

  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("@gokitchen:user_id")) || ""
  );

  const [userType, setUserType] = useState(
    JSON.parse(localStorage.getItem("@gokitchen:user_type")) || ""
  );

  const logout = ()=> {
    localStorage.clear()
    
    history.go("/")
   
  }

  const getToken = (data) => {
    api()
      .post("login/", data)
      .then((response) => {
        for (let i = 0; i < Object.keys(response.data).length; i++) {
          localStorage.setItem(
            `@gokitchen:${Object.keys(response.data)[i]}`,
            JSON.stringify(response.data[Object.keys(response.data)[i]])
            );
        }

        setUserType(response.data.user_type);
        setUserId(response.data.user_id);
        setToken(response.data.token);

        return true;
      })
      .catch((res) => {
        toast.error("E-mail e/ou senha não conferem!");

        return false;
      });
  };

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("@gokitchen:token")) || "");
    setUserType(JSON.parse(localStorage.getItem("@gokitchen:user_type")) || "");
    setUserId(JSON.parse(localStorage.getItem("@gokitchen:user_id")) || "");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        userType,
        setUserType,
        getToken,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
