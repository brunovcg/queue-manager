import { createContext, useState, useContext } from "react";
import Info from "../../pages/Dashboard/templates/Info";

const DashboardContext = createContext([]);

export const DashboardProvider = ({ children }) => {
  const [dashboard, setDashboard] = useState(<Info />);
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const resetModal = () => {
    setModalInfo({});
  };

  return (
    <DashboardContext.Provider
      value={{
        dashboard,
        setDashboard,
        setModalInfo,
        modalInfo,
        setOpenModal,
        openModal,
        resetModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
