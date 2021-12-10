import { createContext, useState, useContext, useEffect, useLayoutEffect } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../auth";
import { useDashboard } from "../dashboard";

const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const { configs, userType, token } = useAuth();
  const { setOpenModal } = useDashboard();

  const deleteUser = (id, header) => {
    api()
      .delete(`users/${id}/`, configs)
      .then((_) => {
        toast.success("Usuário Apagado");
        setAllUsers(allUsers.filter((item) => item.id !== id));

        setOpenModal(false);
      })
      .catch((_) => toast.error("Algo deu errado, tente novamente!"));
  };

  const getAllUsers = () => {
    api()
      .get("users/", configs)
      .then((response) => {
        setAllUsers(response.data);
      });
  };

  useEffect(()  => {
    

      getAllUsers();
 
    
  }, [token]);

  const createUser = (data) => {
    api()
      .post("signup/", data, configs)
      .then((_) => {
        toast.success("Usuário Criado!");
        console.log(data);
        getAllUsers();
        setOpenModal(false);
      })
      .catch((e) => {
        toast.error(
          e.response.status === 409
            ? "CPF já está sendo usado"
            : "Houve um erro na criação, tente novamente"
        );
      });
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        getAllUsers,
        allUsers,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
