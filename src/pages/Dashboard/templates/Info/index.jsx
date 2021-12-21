import { Styled, MessageCard } from "./styles";
import { useInfo } from "../../../../providers/infos";
import Button from "../../../../components/Button";
import { FaTrashAlt } from "react-icons/fa";
import { useAuth } from "../../../../providers/auth";
import { useDashboard } from "../../../../providers/dashboard";
import SendInfoForm from "./forms/sendInfo";
import { dateFunctions } from "../../../../utils/functions/";

const Info = () => {
  const { infos, deleteInfo } = useInfo();
  const { userType } = useAuth();
  const { setOpenModal, setModalInfo } = useDashboard();

  const sendInfo = () => {
    setOpenModal(true);
    setModalInfo({
      title: "Enviar Informação",
      content: <SendInfoForm />,
    });
  };

  return (
    <Styled>
      {userType === "superuser" && (
        <Button setColor="white" setBackground="var(--blue)" onClick={sendInfo}>
          + Info
        </Button>
      )}

      <div className="message-container">
        <h4 className="title-message">Avisos</h4>
        <div className="message-list">
          {infos &&
            infos
              .sort((a, b) => b.id - a.id)
              .map((item, index) => (
                <MessageCard
                  key={index + item.message}
                  className="message-card"
                  priority={item.priority}
                >
                  <div className="title-author-date-priority">
                    <div className="title">
                      <span className="spanTitle">Tema</span> - {item.title}
                    </div>
                    <div className="author">
                      <span className="spanTitle">Autor:</span>{" "}
                      {item.user?.username}
                    </div>
                    <div className="date">
                      <span className="spanTitle">Data:</span>{" "}
                      {dateFunctions.stringToDateFormated(item.created_at)}
                    </div>
                    <div className="priority">
                      <span className="spanTitle">Prioridade:</span>{" "}
                      {item.priority}
                    </div>
                  </div>

                  <div className="message-button">
                    <p className="message">{item.message}</p>
                    {userType === "superuser" && (
                      <div className="button-box">
                        <Button
                          setWidth="100%"
                          setColor="white"
                          setBackground="var(--red)"
                          onClick={() => deleteInfo(item.id)}
                        >
                          <FaTrashAlt />
                        </Button>
                      </div>
                    )}
                  </div>
                </MessageCard>
              ))}
        </div>
      </div>
    </Styled>
  );
};
export default Info;
