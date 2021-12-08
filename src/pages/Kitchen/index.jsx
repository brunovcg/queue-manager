import { Container } from "./styles";
import Button from "../../components/Button";
import { CallCard } from "../../components/CallCard";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaUndoAlt } from "react-icons/fa";
import { useWindowSize } from "../../providers/windowSize";
import { useAuth } from "../../providers/auth";
import { Redirect } from "react-router";
import { useEffect } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const Kitchen = () => {
  const { width } = useWindowSize();
  const { logout, token, userId } = useAuth();
  const user = userId

  const [inputMobile, setInputMobile] = useState(true);

  const [inputInfo, setInputInfo] = useState("");
  const [clientCalls, setClientCalls] = useState([]);

  const addNumber = (data) => {
    if (inputInfo.length < 5) {
      setInputInfo(inputInfo + data);
    }
  };

  const emptyInput = () => {
    setInputInfo("");
  };

  const handleMobile = () => {
    setInputMobile(!inputMobile);
  };

  const backspace = () => {
    setInputInfo(inputInfo.slice(0, inputInfo.length - 1));
  };

  const keys = [
    { title: "1", click: () => addNumber("1"), color: "var(--grey)" },
    { title: "2", click: () => addNumber("2"), color: "var(--grey)" },
    { title: "3", click: () => addNumber("3"), color: "var(--grey)" },
    { title: "4", click: () => addNumber("4"), color: "var(--grey)" },
    { title: "5", click: () => addNumber("5"), color: "var(--grey)" },
    { title: "6", click: () => addNumber("6"), color: "var(--grey)" },
    { title: "7", click: () => addNumber("7"), color: "var(--grey)" },
    { title: "8", click: () => addNumber("8"), color: "var(--grey)" },
    { title: "9", click: () => addNumber("9"), color: "var(--grey)" },
    {
      title: <FaArrowAltCircleLeft />,
      click: backspace,
      color: "var(--light-red)",
    },
    { title: "0", click: () => addNumber("0"), color: "var(--grey)" },
    { title: <FaUndoAlt />, click: emptyInput, color: "var(--light-red)" },
  ];

  const getCalls = () => {
    api.get(`/info/${user}`).then((res) => {
      setClientCalls(res.data.calls);
    });
  };

  const patchCall = (data) => {
    if (inputInfo !== "") {
      api
        .patch(`/info/${user}`, { calls: [...clientCalls, data] })
        .then((_) => {
          width < "500" && toast.info(`Senha ${inputInfo} adicionada`);
          setInputInfo("");
          getCalls();
        });
    } else {toast.error("Precisa digitar a senha")}
  };

  const deleteCall = (callId) => {
    const newCalls = clientCalls.filter((item) => item !== callId);

    api.patch(`/info/${user}`, { calls: newCalls }).then((_) => {
      getCalls();
    });
  };

  useEffect(() => {
    getCalls();
  }, [token]);

  if (token === "") {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      {width < "500" && (
        <div className="changeWindow">
          <Button
            setBackground="var(--dark-grey)"
            setColor="var(--white)"
            setWidth="200px"
            setHeight="40px"
            setClick={handleMobile}
          >
            {inputMobile ? "Mudar para senhas" : "Mudar para teclado"}
          </Button>
        </div>
      )}

      <section
        className={
          width > "500"
            ? "inputContainer"
            : width < "500" && inputMobile
            ? "inputContainer"
            : "hidden"
        }
      >
        <p>Cozinha {user}</p>
        <h2>Gestor de Senhas</h2>
        <div className="inputBox">
          <input
            maxLength="5"
            placeholder="digite a senha (máx 5)"
            value={inputInfo}
            type="text"
            onChange={(typed) => setInputInfo(typed.target.value)}
          />
        </div>
        <div className="virtualKey">
          <div className="numberButtons">
            {keys.map((item, index) => (
              <Button
                setHeight="60px"
                setWidth="60px"
                setFont="2rem"
                setBackground={item.color}
                setClick={item.click}
                key={index}
              >
                {item.title}
              </Button>
            ))}
          </div>

          <div className="actionButtons">
            <div className="logout">
              <Button
                setBackground="var(--red)"
                setClick={() => logout()}
                setColor="var(--white)"
              >
                Logout
              </Button>
            </div>
            <div className="call">
              <Button
                setBackground="var(--green)"
                setClick={() => patchCall(inputInfo)}
              >
                Chamar
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          width > "500"
            ? "cardContainer"
            : width < "500" && !inputMobile
            ? "cardContainer"
            : "hidden"
        }
      >
        <div className="clientCallsBox">
          {clientCalls &&
            clientCalls.map((item, index) => (
              <CallCard num={item} key={index} deleteCall={deleteCall} />
            ))}
        </div>
      </section>
    </Container>
  );
};
