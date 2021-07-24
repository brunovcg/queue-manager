import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";

const ClientContext = createContext([]);

export const ClientProvider = ({ children }) => {

  const [groupCalls, setGroupCalls] = useState([]);
  const [clientCalls, setClientCalls] = useState([])

  const getGroupCalls = () => {
    api.get(`/info`).then((res) => {
      setGroupCalls(res.data.map(it=>it.calls));
      console.log(res.data.map(it=>it.calls));
    });
  };

  const getClientCalls = (id) => {
    api.get(`/info/${id}`).then((res) =>  { 
      setClientCalls(res.data.calls)
      console.log(res.data.calls)
      }  );
    
  };


  const patchClientCall = (id, calls) => {
    api.patch(`/info/${id}`, { calls });
  };

  useEffect(() => {
    getGroupCalls();
    getClientCalls(1)
  }, []);



  return (
    <ClientContext.Provider
      value={{ getGroupCalls, patchClientCall, getClientCalls, groupCalls, clientCalls}}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext);
