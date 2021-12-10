import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@gokitchen:token")) || ""
  );

  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("@gokitchen:user_id")) || ""
  );

  const [userType, setUserType] = useState(
    JSON.parse(localStorage.getItem("@gokitchen:user_type")) || ""
  );

  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("@gokitchen:username")) || ""
  );

  const logout = () => {
    localStorage.clear();
    history.go("/");
  };

  const [configs, setConfigs] = useState({
    headers: {
      Authorization: "Token " + token,
    },
  });

  useEffect(() => {
    setConfigs({
      headers: {
        Authorization: "Token " + token,
      },
    });
  }, [token]);

  const getLogin = (data) => {
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
        setUsername(response.data.username);
        toast.success("Bem vindo!");
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
        username,
        userType,
        setUserType,
        getLogin,
        logout,
        configs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
