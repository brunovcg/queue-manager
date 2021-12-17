import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "../../providers/auth";
import { useDashboard } from "../../providers/dashboard";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const KitchenContext = createContext([]);

export const KitchenProvider = ({ children }) => {
  const [kitchens, setKitchens] = useState([]);
  const [userKitchens, setUserKitchens] = useState([]);
  const [selectedKitchen, setSelectedKitchen] = useState({});

  const { configs, userType, token } = useAuth();
  const { dashboard, setOpenModal } = useDashboard();

  const getAllKitchens = async () => {
    await api()
      .get("kitchens/", configs)
      .then((response) => {
        setKitchens(response.data);
      });
  };

  const createKitchen = (data) => {
    api()
      .post("kitchens/", data, configs)
      .then((_) => {
        toast.success("Cozinha Criada!");
        getAllKitchens();
      })
      .catch((e) => {
        toast.error(
          e.response.status === 409
            ? "Cozinha já existe"
            : "Houve um erro na criação, tente novamente"
        );
      });
  };

  const getOneKitchen = (kitchenId) => {
    api()
      .get(`kitchens/${kitchenId}/`, configs)
      .then((response) => {
        setSelectedKitchen(response.data);
      });
  };

  const getUserKitchens = (userId) => {
    api()
      .get(`users/${userId}/kitchens/`, configs)
      .then((response) => {
        setUserKitchens(response.data);
      });
  };

  const updateKitchen = (id, data) => {
    api()
      .patch(`kitchens/${id}/`, data, configs)
      .then((_) => {
        toast.success("Cozinha atualizada!");
        getAllKitchens();
        setOpenModal(false);
      })
      .catch((e) => {
        toast.error(
          e.response.status === 409
            ? "Cozinha já existe"
            : "Houve um erro na atualização, tente novamente"
        );
      });
  };

  const deleteKitchen = (id) => {
    api()
      .delete(`kitchens/${id}/`, configs)
      .then((_) => {
        toast.success("Cozinha Deletada!");
        getAllKitchens();
        setOpenModal(false);
      })
      .catch((e) => {
        toast.error("Houve um erro ao deletar, tente novamente");
      });
  };

  useEffect(() => {
    if (userType !== "user" && token) {
      getAllKitchens();
    }
    /* eslint-disable-next-line*/
  }, [dashboard]);

  return (
    <KitchenContext.Provider
      value={{
        getAllKitchens,
        kitchens,
        createKitchen,
        updateKitchen,
        deleteKitchen,
        getUserKitchens,
        userKitchens,
        getOneKitchen,
        selectedKitchen,
      }}
    >
      {children}
    </KitchenContext.Provider>
  );
};

export const useKitchen = () => useContext(KitchenContext);
