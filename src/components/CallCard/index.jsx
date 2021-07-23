import { Container } from "./styles";
import Button from "../Button";

export const CallCard = ({ num }) => {
  return (
    <Container>
      <h3>{num}</h3>
      <div className="buttonBox">
        <Button
          setColor="var(--light-red)"
          setWidth="90px"
          setHeight="45px"
          setClick={() => {}}
        >
          Entregar
        </Button>
      </div>
    </Container>
  );
};
