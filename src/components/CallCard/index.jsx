import { Container } from "./styles";
import Button from "../Button";

export const CallCard = ({ num, deleteCall }) => {
  return (
    <Container>
      <h3>{num}</h3>
      <div className="buttonBox">
        <Button
          setBackground="var(--light-red)"
          setWidth="90px"
          setHeight="45px"
          setClick={() => deleteCall(num)}
        >
          Entregar
        </Button>
      </div>
    </Container>
  );
};
