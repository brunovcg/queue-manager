import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "../../providers/auth";
import { useDashboard } from "../../providers/dashboard";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const KitchenContext = createContext([]);

export const KitchenProvider = ({ children }) => {
  const [kitchens, setKitchens] = useState([]);

  const { configs } = useAuth();
  const { dashboard } = useDashboard();

  const getAllKitchens = async () => {
    await api()
      .get("kitchens/", configs)
      .then((response) => {
        setKitchens(response.data);
        console.log(response.data);
      });
  };

  // tEM QUE VER NO BACK UM JEITO DE DEIXAR USER OPICIONAL!!!!

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

  useEffect(() => {
    getAllKitchens();
  }, [dashboard]);

  return (
    <KitchenContext.Provider
      value={{
        getAllKitchens,
        kitchens,
        createKitchen,
      }}
    >
      {children}
    </KitchenContext.Provider>
  );
};

export const useKitchen = () => useContext(KitchenContext);
