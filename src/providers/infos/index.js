import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "../../providers/auth";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useDashboard } from "../dashboard";


const InfoContext = createContext([]);

export const InfoProvider = ({ children }) => {
  const { configs, token, } = useAuth();
  const { setOpenModal} = useDashboard();
  const [infos, setInfos] = useState([]);

  const getAllInfo = async () => {
    await api()
      .get("informations/", configs)
      .then((response) => {
        setInfos(response.data);
      });
  };

  const createInfo = (data) => {
    api()
      .post("informations/", data, configs)
      .then((_) => {
        toast.success("Cozinha Criada!");
        getAllInfo()
        setOpenModal(false);
      })
      .catch((e) => {
        toast.error(
          e.response.status === 409
            ? "Cozinha já existe"
            : "Houve um erro na criação, tente novamente"
        );
      });
  };

  const deleteInfo = (id) => {
    api()
      .delete(`informations/${id}/`, configs)
      .then((_) => {
        toast.success("Cozinha Deletada!");
        getAllInfo()
      })
      .catch((e) => {
        toast.error("Houve um erro ao deletar, tente novamente");
      });
  };

  useEffect(() => {

    if (token){
      const interval = setInterval(() => {
        getAllInfo();
      }, 60000);
      return () => clearInterval(interval);
    }
    /*eslint-disable-next-line*/
  }, [configs,token]);

useEffect(()=>{
  
  if (token){

  getAllInfo();
  }
/*eslint-disable-next-line*/
},[configs])



  return (
    <InfoContext.Provider
      value={{
        getAllInfo,
        createInfo,
        deleteInfo,
        infos,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => useContext(InfoContext);
