import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../providers/auth";
import { toast } from "react-toastify";
import { useDashboard } from "../../providers/dashboard";

import {arrayFunctions} from "../../utils/functions/"

const BranchContext = createContext([]);

export const BranchProvider = ({ children }) => {
  const { configs, token, userType } = useAuth();
  const { dashboard, setOpenModal } = useDashboard();
  const [branches, setBranches] = useState([]);

  const getAllBranches = () => {
    api()
      .get("branches/", configs)
      .then((response) => {
        setBranches(response.data);
      });
  };

  const createBranch = (data) => {
    api()
      .post("branches/", data, configs)
      .then((_) => {
        toast.success("Unidade Criada!");
        getAllBranches()
        setOpenModal(false);
      })
      .catch((e) => {
        toast.error(
          e.response.status === 409
            ? "Branch já existe"
            : "Houve um erro na criação, tente novamente"
        );
      });
  };

  const deleteBranch = (branchId, branchName = "") => {
    api()
      .delete(`branches/${branchId}/`, configs)
      .then((_) => {
        setOpenModal(false);
        toast.success(`Unidade ${branchName} apagada!`);
        setBranches(branches.filter((item) => item.id !== branchId));
      });
  };

  const updateBranch = (id, data) => {
    api()
      .patch(`branches/${id}/`, data, configs)
      .then((_) => {
        toast.success("Unidade atualizada!");
        setOpenModal(false);
        let rest = branches.filter(item=>item.id !== id )
        let updated = arrayFunctions.updatedArrayState(branches,id,data)

        setBranches([...rest, updated]);
      })
      .catch((e) => {
        toast.error(
          e.response.status === 409
            ? "Unidade já existe"
            : "Houve um erro na atualização, tente novamente"
        );
      });
  };

  const deleteThisBranchOrders = (branchId, branchName) => {
    api()
      .delete(`orders/branch/${branchId}/`, configs)
      .then((_) => {
        toast.success(`Todas as senhas da unidade ${branchName} foram apagadas`);
        setOpenModal(false);
      });
  };

  useEffect(() => {
    if (token && userType!=='user') {
      getAllBranches();
    }
    /* eslint-disable-next-line*/
  }, [dashboard]);

  return (
    <BranchContext.Provider
      value={{
        branches,
        deleteBranch,
        updateBranch,
        createBranch,
        deleteThisBranchOrders,
      }}
    >
      {children}
    </BranchContext.Provider>
  );
};

export const useBranch = () => useContext(BranchContext);
