import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../auth";
import { useDashboard } from "../dashboard";

const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const { configs, userType } = useAuth();
  const { setOpenModal, dashboard } = useDashboard();

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

  const getAllUsers = async () => {
    await api()
      .get("users/", configs)
      .then((response) => {
        setAllUsers(response.data);
      });
  };

  const getSimpleUserList = () => {
    let list = [];

    allUsers
      .filter((item) => item.is_staff === false)
      .map((us) => list.push({ username: us.username, id: us.id }));

    return list;
  };

  const resetPassword = (data) => {
    let username = data["username"];
    delete data["username"];
    api()
      .patch("reset-password/", data, configs)
      .then((_) => {
        toast.success(`Senha alterada para ${username} !`);
        setOpenModal(false);
      })
      .catch((e) => {
        toast.error("Algo deu errado!");
      });
  };

  const changePassword = (id, data) => {
    api()
      .patch(`change-password/${id}/`, data, configs)
      .then((_) => {
        toast.success(`Senha alterada!`);
        setOpenModal(false);
      })
      .catch((e) => {
        toast.error(
          e.response.status === 401
            ? "Sua senha antiga está errada"
            : "Houve um erro na criação, tente novamente"
        );
      });
  };

  const updateUser = (id, data) => {
    api()
      .patch(`users/${id}/`, data, configs)
      .then((_) => {
        toast.success(`Usuário Aterado !`);
        setOpenModal(false);
        getAllUsers();
      })
      .catch((e) => {
        toast.error("Houve um erro na atualização, tente novamente");
      });
  };

  useEffect(() => {
    if (userType === "superuser") {
      getAllUsers();
    }
    /* eslint-disable-next-line */
  }, [dashboard]);

  const createUser = (data) => {
    api()
      .post("signup/", data, configs)
      .then((_) => {
        toast.success("Usuário Criado!");
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
        resetPassword,
        changePassword,
        updateUser,
        getSimpleUserList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
