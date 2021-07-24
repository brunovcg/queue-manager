import { Container } from "./styles";
import { Link } from "react-router-dom";
import gk from '../../assets/gokitchen-neg.png'

export const NotFound = () => {
  return (
    <Container>
      <h2>PAGE NOT FOUND!</h2>
      <figure>
        <img src={gk} alt="gk" />
      </figure>
      <Link to="/">retornar a home</Link>
    </Container>
  );
};
