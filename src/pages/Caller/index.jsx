import { Styled } from "./styles";
import Button from "../../components/Button";
import { CallCard } from "../../components/CallCard";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaUndoAlt } from "react-icons/fa";
import { useWindowSize } from "../../providers/windowSize";
import { useAuth } from "../../providers/auth";
import { Redirect } from "react-router";
import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import mobileBreakpoint from "../../configs/mobileBreakpoint";
import { useParams } from "react-router-dom";
import { useOrder } from "../../providers/orders";
import { useKitchen } from "../../providers/kitchens";
import {enviromentMedia} from "../../configs/enviroment.js"

export const Caller = () => {
  const { getOrders, postOrder, deleteOrder, inputInfo, setInputInfo, orders } =
    useOrder();

  const { selectedKitchen, getOneKitchen } = useKitchen();
  const history = useHistory();
  const { kitchen_id } = useParams();
  const { width } = useWindowSize();
  const { token } = useAuth();

  const [inputMobile, setInputMobile] = useState(true);

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

  useLayoutEffect(() => {
    getOrders(kitchen_id);
    getOneKitchen(kitchen_id)
    /*eslint-disable-next-line */
  }, []);

  if (token === "") {
    return <Redirect to="/" />;
  }

  return (
    <Styled>
      {width < mobileBreakpoint.width && (
        <div className="changeWindow">
          <Button
            setBackground="var(--dark-grey)"
            setColor="var(--white)"
            setWidth="200px"
            setHeight="40px"
            onClick={handleMobile}
          >
            {inputMobile ? "Mudar para senhas" : "Mudar para teclado"}
          </Button>
        </div>
      )}

      <section
        className={
          width > mobileBreakpoint.width
            ? "inputContainer"
            : width < "500" && inputMobile
            ? "inputContainer"
            : "hidden"
        }
      >
        <div style={{display: "flex" }}>
          <p style={{ padding:  "0 40px"}}>{selectedKitchen && selectedKitchen.label}</p>
          <img src={enviromentMedia+selectedKitchen.image} style={{width: "40px", border: "1px solid white"}} alt="logo"/>
        </div>
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
                onClick={item.click}
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
                onClick={() => history.push("/dashboard")}
                setColor="var(--white)"
              >
                Voltar
              </Button>
            </div>
            <div className="call">
              <Button
                setBackground="var(--green)"
                onClick={() => postOrder(kitchen_id)}
              >
                Chamar
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          width > mobileBreakpoint.width
            ? "cardContainer"
            : width < mobileBreakpoint.width && !inputMobile
            ? "cardContainer"
            : "hidden"
        }
      >
        <div className="clientCallsBox">
          {orders &&
            orders.map((item, index) => (
              <CallCard
                num={item.number}
                orderId={item.id}
                key={index}
                kitchenId={kitchen_id}
                deleteOrder={deleteOrder}
              />
            ))}
        </div>
      </section>
    </Styled>
  );
};
