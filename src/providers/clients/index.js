import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";

const ClientContext = createContext([]);

export const ClientProvider = ({ children }) => {
  const [groupCalls, setGroupCalls] = useState([]);
  const [clientCalls, setClientCalls] = useState([]);
  const [user, setUser] = useState("");

  const getGroupCalls = () => {
    api.get(`/info`).then((res) => {
      setGroupCalls(res.data.map((it) => it.calls));
    });
  };


  const getClientCalls = (data)=>{
    setClientCalls(data)
  }




  useEffect(() => {
    getGroupCalls();
  }, []);

  return (
    <ClientContext.Provider
      value={{
        getGroupCalls,
        groupCalls,
        clientCalls,
        setUser,
        getClientCalls,
        user,
        setClientCalls
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext);
