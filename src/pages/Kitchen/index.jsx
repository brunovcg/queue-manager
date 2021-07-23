import { Container } from "./styles";
import Button from "../../components/Button";
import { CallCard } from "../../components/CallCard";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaUndoAlt } from "react-icons/fa";
import { useWindowSize } from "../../providers/windowSize";

export const Kitchen = () => {
  const { width } = useWindowSize();

  const [inputMobile, setInputMobile] = useState(true);

  const [inputInfo, setInputInfo] = useState("");
  const [call, setCall] = useState([
    "104",
    "108",
    "110",
    "112",
    "115",
    "120",
    "130",
    "150",
    "180",
  ]);

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
    { title: "7", click: () => addNumber("7"), color: "var(--grey)" },
    { title: "8", click: () => addNumber("8"), color: "var(--grey)" },
    { title: "9", click: () => addNumber("9"), color: "var(--grey)" },
    { title: "4", click: () => addNumber("4"), color: "var(--grey)" },
    { title: "5", click: () => addNumber("5"), color: "var(--grey)" },
    { title: "6", click: () => addNumber("6"), color: "var(--grey)" },
    { title: "1", click: () => addNumber("1"), color: "var(--grey)" },
    { title: "2", click: () => addNumber("2"), color: "var(--grey)" },
    { title: "3", click: () => addNumber("3"), color: "var(--grey)" },
    {
      title: <FaArrowAltCircleLeft />,
      click: backspace,
      color: "var(--light-red)",
    },
    { title: "0", click: () => addNumber("0"), color: "var(--grey)" },
    { title: <FaUndoAlt />, click: emptyInput, color: "var(--light-red)" },
  ];

  return (
    <Container>
      {width < "500" && (
        <div className="changeWindow">
          <Button setColor="var(--dark-grey)" setWidth="200px" setHeight="40px" setClick={handleMobile}>
            {inputMobile ? 'Mudar para senhas' : 'Mudar para teclado'}
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
        <article className="info"></article>
        <h2>Adicionar Senhas</h2>
        <div className="inputBox">
          <input
            maxLength="5"
            placeholder="digite a informação (máx 5)"
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
                setColor={item.color}
                setClick={item.click}
                key={index}
              >
                {item.title}
              </Button>
            ))}
          </div>

          <div className="actionButtons">
            <div className="logout">
              <Button setColor="var(--red)">Logout</Button>
            </div>
            <div className="call">
              <Button setColor="var(--green)">Chamar</Button>
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
        {call.map((item) => (
          <CallCard num={item} key={item} />
        ))}
      </section>
    </Container>
  );
};
