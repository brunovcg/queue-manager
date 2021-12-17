import Styled from "./styles";
import Header from "../../components/Header";
import { useAuth } from "../../providers/auth";
import { Redirect } from "react-router-dom";
import { useDashboard } from "../../providers/dashboard";
import {dateFunctions} from "../../utils/functions"
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

      <div 
        style={{
          color: "var(--dark-grey)",
          width: "100%",
          textAlign: "center",
          paddingTop: "20px",
          display: "flex", justifyContent: "center"
        }}
      >
      <p className="username">  Usuário: <span style={{ color: "var(--gk-green)", paddingRight: "10px" }}>{username}</span> </p> 
      <p style={{paddingLeft: "10px", fontWeight: "bold"}}>{dateFunctions.stringToDateFormated(Date.now())}</p>

      </div>
      

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
