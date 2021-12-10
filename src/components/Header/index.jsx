import Styled from "./styles";
import { Navbar, Container, Nav } from "react-bootstrap";
import imgGKLogo from "../../assets/gokitchen-neg.png";
import Menu from "../Menu";

const Header = () => {

  return (
    <Styled>
      <Navbar expand="lg">
        <Container>
          <figure>
            <img src={imgGKLogo} alt="gklogo" />
          </figure>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="box">
              <Menu/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styled>
  );
};

export default Header;
