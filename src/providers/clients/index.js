import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";

const ClientContext = createContext([]);

export const ClientProvider = ({ children }) => {

  const [clientCalls, setClientCalls] = useState([]);

  const getClientCalls = () => {
    api.get(`/info`).then((res) => {
      setClientCalls(res.data.map(it=>it.calls));
      console.log(res.data.map(it=>it.calls));
    });
  };

  const getClient = (id) => {
    api.get(`/info/${id}`).then((res) => res.data.calls);
  };

  const patchClientCall = (id, calls) => {
    api.patch(`/info/${id}`, { calls });
  };

  useEffect(() => {
    getClientCalls();
  }, []);



  return (
    <ClientContext.Provider
      value={{ getClientCalls, patchClientCall, getClient, clientCalls}}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext);
