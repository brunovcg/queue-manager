import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";

const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
  const [masterAuth, setMasterAuth] = useState(false);
  const [clientAuth, setClientAuth] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setMasterAuth(false);
    setClientAuth(false);
    console.clear();
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("@GK:Master"));

    if (auth) {
      return setMasterAuth(true);
    }
  }, [masterAuth]);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("@GK:User"));

    if (auth) {
      return setClientAuth(true);
    }
  }, [clientAuth]);

  return (
    <AuthContext.Provider
      value={{
        masterAuth,
        setMasterAuth,
        clientAuth,
        setClientAuth,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
