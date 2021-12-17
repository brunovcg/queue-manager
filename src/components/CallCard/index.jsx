import { Container } from "./styles";
import Button from "../Button";

export const CallCard = ({ num, orderId, deleteOrder, kitchenId}) => {
  return (
    <Container>
      <h3>{num}</h3>
      <div className="buttonBox">
        <Button
          setBackground="var(--light-red)"
          setWidth="90px"
          setHeight="45px"
          onClick={() => deleteOrder(kitchenId,orderId, num)}
        >
          Entregar
        </Button>
      </div>
    </Container>
  );
};
