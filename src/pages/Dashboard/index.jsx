import Styled from "./styles";
import Header from "../../components/Header";
import { useAuth } from "../../providers/auth";
import { Redirect } from "react-router-dom";
import { useDashboard } from "../../providers/dashboard";

import { PopUpModal } from "../../components/Modal";

export const Dashboard = () => {
  const { token, username } = useAuth();
  const { dashboard, openModal, modalInfo, setOpenModal } = useDashboard();

  if (token === "") {
    return <Redirect to="/" />;
  }

  return (
    <Styled>
      <Header />

      <h1
        style={{
          color: "var(--dark-grey)",
          width: "100%",
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        Usuário: <span style={{ color: "var(--gk-green)" }}>{username}</span>{" "}
      </h1>

      <main>{dashboard}</main>

      {openModal && (
        <PopUpModal
          title={modalInfo.title}
          content={modalInfo.content}
          setModal={setOpenModal}
          buttons={modalInfo.buttons}
        />
      )}
    </Styled>
  );
};
